import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import FormField from '../FormField';
import fieldSetStyles from './field-set-styles';
import ReorderControls from './ReorderControls';

export const RawReorderableFormField = ({
  first,
  last,
  className,
  classes,
  path,
  _onMoveItemUp,
  _onMoveItemDown,
  _onDeleteItem,
  disabled = false,
  ...rest
}) => (
  <div className={classNames(className, classes.root)}>
    <FormField path={path} disabled={disabled} {...rest} />
    <ReorderControls
      first={first}
      last={last}
      disabled={disabled}
      onMoveItemUp={_onMoveItemUp}
      onMoveItemDown={_onMoveItemDown}
      onDeleteItem={_onDeleteItem}
    />
  </div>
);
export default withStyles(fieldSetStyles.reorderable)(RawReorderableFormField);
