import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import RemoveCircle from '@material-ui/icons/RemoveCircle';
import { withStyles } from '@material-ui/core/styles';
import fieldSetStyles from './field-set-styles';

export const RawReorderControls = ({
  first,
  last,
  classes,
  onMoveItemUp,
  onMoveItemDown,
  onDeleteItem
}) => (
  <div className={classes.root}>
    <IconButton
      className={classes.up}
      onClick={onMoveItemUp}
      disabled={first}
      size="small"
    >
      <ArrowUpward />
    </IconButton>
    <IconButton
      className={classes.down}
      onClick={onMoveItemDown}
      disabled={last}
      size="small"
    >
      <ArrowDownward />
    </IconButton>
    <IconButton className={classes.remove} onClick={onDeleteItem} size="small">
      <RemoveCircle />
    </IconButton>
  </div>
);
export default withStyles(fieldSetStyles.reorderControls)(RawReorderControls);
