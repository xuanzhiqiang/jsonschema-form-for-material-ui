import React from 'react';
import keys from 'lodash/keys';
import forOwn from 'lodash/forOwn';
import filter from 'lodash/filter';
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

const Errors = ({ errors, anchor, classes }) => (
  <ListItem
    button
    onClick={() => {
      const element = document.getElementById(anchor); // eslint-disable-line
      if (element) {
        if (element.type === 'file') {
          element.click();
        } else {
          element.focus();
        }
      }
    }}
  >
    {errors.map(v => (
      <Error key={v} errors={v} classes={classes} />
    )) // eslint-disable-line react/no-array-index-key,max-len
    }
  </ListItem>
);

function isObject(thing) {
  // eslint-disable-next-line no-undef
  if (typeof File !== 'undefined' && thing instanceof File) {
    return false;
  }
  return typeof thing === 'object' && thing !== null && !Array.isArray(thing);
}

export const hasErrors = errors => {
  let errorsFlag = false;

  Object.values(errors).forEach(error => {
    if (!errorsFlag && isObject(error)) {
      errorsFlag = hasErrors(error);
    }
  });

  Object.values(errors).forEach(error => {
    if (!errorsFlag && Array.isArray(error) && error.length > 0) {
      // eslint-disable-next-line no-prototype-builtins
      if (error[0].hasOwnProperty('message')) {
        errorsFlag = true;
      } else {
        Object.values(error).forEach(e => {
          if (!errorsFlag) {
            errorsFlag = hasErrors(e);
          }
        });
      }
    }
  });
  return errorsFlag;
};

function allErrorsItem({ errors, field, classes, root }) {
  let items = filter(keys(errors), k => {
    const v = errors[k];
    return v && v.length > 0;
  }).map(v => {
    let anchor;
    if (root === field) {
      anchor = `${field}_${v}`;
    } else {
      anchor = `${field}.${v}`;
    }
    if (Array.isArray(errors[v]) && errors[v].length > 0) {
      // eslint-disable-next-line no-prototype-builtins
      if (errors[v][0].hasOwnProperty('message')) {
        return (
          <Errors
            key={v}
            errors={errors[v]}
            anchor={anchor}
            classes={classes}
          />
        );
      }
      const rv = [];
      forOwn(errors[v], (e, index) => {
        if (root === field) {
          rv.push(
            allErrorsItem({
              errors: e,
              field: `${field}_${v}[${index}]`,
              classes
            })
          );
        } else {
          rv.push(
            allErrorsItem({
              errors: e,
              field: `${field}.${v}[${index}]`,
              classes
            })
          );
        }
      });
      return rv;
    }
    return null;
  });

  filter(keys(errors), k => {
    const v = errors[k];
    if (isObject(v)) {
      items = items.concat(
        allErrorsItem({ errors: v, field: `${field}_${k}`, classes })
      );
    }
  });
  return items;
}

const ErrorList = ({ errors, field, classes }) => (
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
        {allErrorsItem({ errors, field, classes, root: field })}
      </List>
    ) : null}
  </div>
);

export default withStyles(errorsStyles)(ErrorList);
