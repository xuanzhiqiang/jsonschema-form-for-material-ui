import React from 'react';
import has from 'lodash/has';
import forOwn from 'lodash/forOwn';
import isArray from 'lodash/isArray';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ErrorOutline from '@material-ui/icons/ErrorOutline';

const errorsStyles = {
  errorList: {
    backgroundColor: '#ffa3a3',
    borderColor: '#ebccd1',
    color: '#f44336',
    clear: 'both'
  },
  panelHeading: {
    color: '#a94442',
    backgroundColor: '#f98989',
    borderColor: '#ebccd1'
  }
};

const Error = ({ errors }) => <ListItemText primary={errors.message} />;

const clickAction = ['file'];
const Errors = ({ errors, anchor, classes }) => (
  <ListItem
    button
    onClick={() => {
      const element = document.getElementById(anchor); // eslint-disable-line
      if (element) {
        if (clickAction.indexOf(element.type) !== -1) {
          element.click();
        } else {
          element.focus();
        }
      }
    }}
  >
    {errors.map(v => (
      <Error key={v} errors={v[0]} classes={classes} />
    ))}
  </ListItem>
);

function isObject(thing) {
  // eslint-disable-next-line no-undef
  if (typeof File !== 'undefined' && thing instanceof File) {
    return false;
  }
  return typeof thing === 'object' && thing !== null && !isArray(thing);
}

// 判断是否有错误
export const hasErrors = errors => {
  // 1、不是array和object的直接返回false
  if (!isObject(errors) && !isArray(errors)) return false;

  // 2、判断是否符合条件
  let errorsFlag = false;
  if (isObject(errors)) {
    if (has(errors, 'rule') && has(errors, 'message')) {
      return true;
    }
  }

  // 3、不符合条件的递归遍历
  forOwn(errors, e => {
    errorsFlag = hasErrors(e);
    return !errorsFlag; // return false --> forOwn()会提前结束遍历
  });
  return errorsFlag;
};

// 把错误条目转化为UI条目
function allErrorsItem({
  id,
  errors,
  classes,
  field = undefined,
  key = undefined,
  array = false
}) {
  // 1、计算锚点
  let anchor = id;
  if (key !== undefined) {
    if (array) {
      anchor = id === field ? `${field}_[${key}]` : `${field}[${key}]`;
    } else {
      anchor = id === field ? `${field}_${key}` : `${field}.${key}`;
    }
  }

  // 2、符合错误条目数据结构的返回 Errors UI
  if (isObject(errors)) {
    if (has(errors, 'rule') && has(errors, 'message')) {
      return [
        <Errors
          key={anchor}
          anchor={anchor}
          errors={[errors]}
          classes={classes}
        />
      ];
    }
  } else if (isArray(errors) && errors.length > 0) {
    if (has(errors[0], 'rule') && has(errors[0], 'message')) {
      return [
        <Errors
          key={anchor}
          anchor={anchor}
          errors={[errors]}
          classes={classes}
        />
      ];
    }
  }

  // 3、递归遍历
  let items = [];
  const _isArray = isArray(errors);
  forOwn(errors, (error, k) => {
    items = items.concat(
      allErrorsItem({
        id,
        errors: error,
        field: anchor,
        key: k,
        array: _isArray,
        classes
      })
    );
  });

  return items;
}

const ErrorList = ({ errors, id, classes }) => (
  <div className={classes.errorList}>
    {hasErrors(errors) ? (
      <List
        component="nav"
        subheader={
          <ListItem className={classes.panelHeading}>
            <ListItemIcon>
              <ErrorOutline color="error" />
            </ListItemIcon>
            <ListItemText primary="ERRORS" color="error" />
          </ListItem>
        }
      >
        {allErrorsItem({ errors, classes, id, field: id })}
      </List>
    ) : null}
  </div>
);

export default withStyles(errorsStyles)(ErrorList);
