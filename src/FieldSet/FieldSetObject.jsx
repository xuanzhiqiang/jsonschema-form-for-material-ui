import React from 'react';
import keys from 'lodash/keys';
import { withStyles } from '@material-ui/core/styles';
import FormField from '../FormField';
import fieldSetStyles from './field-set-styles';

export const RawFieldSetObject = ({
  className,
  classes,
  schema = {},
  uiSchema = {},
  data = {},
  path,
  errors,
  ...rest
}) => {
  const orientation =
    uiSchema['ui:orientation'] === 'row' ? classes.row : classes.column;
  return (
    <div className={orientation}>
      {keys(schema.properties).map(p => {
        const newPath = path ? `${path}.${p}` : p;
        const error = errors && errors.hasOwnProperty(p) ? errors[p] : null;
        return (
          <FormField
            key={p}
            objectData={data}
            path={newPath}
            required={schema.required}
            schema={schema.properties[p]}
            data={data[p]}
            uiSchema={uiSchema[p] || {}}
            errors={error}
            {...rest}
          />
        );
      })}
    </div>
  );
};
export default withStyles(fieldSetStyles.fieldSetObject)(RawFieldSetObject);
