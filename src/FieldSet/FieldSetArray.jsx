import React from 'react';
import includes from 'lodash/includes';
import slice from 'lodash/slice';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import isArray from 'lodash/isArray';
import { withStyles } from '@material-ui/core/styles';
import FormField from '../FormField';
import fieldSetStyles from './field-set-styles';
import getDefaultValue from '../helpers/get-default-value';
import ReorderableFormField from './ReorderableFormField';

export const RawFieldSetArray = props => {
  const {
    startIdx = 0,
    className,
    classes,
    schema = {},
    uiSchema = {},
    data,
    path,
    onMoveItemUp,
    onMoveItemDown,
    onDeleteItem,
    errors,
    ...rest
  } = props;

  return (
    <div className={classes.root}>
      {!isArray(schema.items) && !schema.uniqueItems && (
        <div>
          {(data || []).map((d, idx) => (
            <ReorderableFormField
              key={
                `${path}[${idx}]` // eslint-disable-line react/no-array-index-key
              }
              path={`${path}[${startIdx + idx}]`}
              errors={errors[idx]}
              required={schema.required}
              schema={schema.items}
              data={d}
              _onMoveItemUp={onMoveItemUp && onMoveItemUp(path, startIdx + idx)}
              _onMoveItemDown={
                onMoveItemDown && onMoveItemDown(path, startIdx + idx)
              }
              _onDeleteItem={onDeleteItem && onDeleteItem(path, startIdx + idx)}
              onMoveItemUp={onMoveItemUp}
              onMoveItemDown={onMoveItemDown}
              onDeleteItem={onDeleteItem}
              uiSchema={uiSchema.items}
              first={idx === 0}
              last={idx === data.length - 1}
              {...rest}
            />
          ))}
          <div className={classes.addItemBtn}>
            <Fab
              color="primary"
              aria-label="Add"
              onClick={
                rest.onAddItem &&
                rest.onAddItem(path, getDefaultValue(schema.items))
              }
            >
              <AddIcon />
            </Fab>
          </div>
        </div>
      )}
      {isArray(schema.items) &&
        (data || []).map((d, idx) => {
          if (idx < schema.items.length) {
            return (
              <FormField
                key={
                  `${path}[${idx}]` // eslint-disable-line react/no-array-index-key
                }
                path={`${path}[${startIdx + idx}]`}
                required={schema.required}
                schema={schema.items[idx]}
                data={d}
                uiSchema={(uiSchema.items || [])[idx]}
                {...rest}
              />
            );
          }
          return null;
        })}
      {!isArray(schema.items) &&
        schema.uniqueItems &&
        schema.items.enum &&
        schema.items.enum.map(d => (
          <FormField
            key={
              `${path}[${d}]` // eslint-disable-line react/no-array-index-key
            }
            path={`${path}`}
            required={schema.required}
            schema={{ ...schema.items, title: d }}
            data={includes(data, d)}
            uiSchema={uiSchema}
            {...rest}
          />
        ))}
      {schema.additionalItems && (
        <RawFieldSetArray
          classes={classes}
          path={path}
          startIdx={2}
          required={schema.required}
          schema={{ type: 'array', items: schema.additionalItems }}
          data={slice(data, schema.items.length)}
          uiSchema={uiSchema.additionalItems}
          onMoveItemUp={onMoveItemUp}
          onMoveItemDown={onMoveItemDown}
          onDeleteItem={onDeleteItem}
          {...rest}
        />
      )}
    </div>
  );
};
export default withStyles(fieldSetStyles.fieldSetArray)(RawFieldSetArray);
