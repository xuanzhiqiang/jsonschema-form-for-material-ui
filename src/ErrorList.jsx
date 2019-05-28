import React from 'react';
import ReactDOM from 'react-dom';
import keys from 'lodash/keys';
import { withStyles } from '@material-ui/core/styles';
import filter from 'lodash/filter';
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
      document.getElementById(anchor).focus(); // eslint-disable-line
    }}
  >
    {errors.map((v, idx) => (
      <Error key={idx} errors={v} classes={classes} />
    )) // eslint-disable-line react/no-array-index-key,max-len
    }
  </ListItem>
);

function isObject(thing) {
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
    if (!errorsFlag && error.length > 0) {
      errorsFlag = true;
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
    return (
      <Errors key={v} errors={errors[v]} anchor={anchor} classes={classes} />
    );
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
