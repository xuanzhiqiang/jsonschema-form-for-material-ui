import React from 'react';
import Typography from '@material-ui/core/Typography';
import keys from 'lodash/keys';
import { withStyles } from '@material-ui/core/styles';
import filter from 'lodash/filter';

const errorsStyles = {
  errorList: {
    backgroundColor: "#e9e9e9",
    color: "#f44336",
    listStyle:"none"
  },
};

const Error = ({ errors, classes }) => (
  <Typography variant="p">
    {errors.message}
  </Typography>
);

const Errors = ({ errors, classes }) => (
  <li className={classes.ul} >
    {errors.map((v, idx) => (<Error key={idx} errors={v} classes={classes} />)) // eslint-disable-line react/no-array-index-key,max-len
    }
  </li>
);

const ErrorList = ({ errors, classes }) => (
  <ul className={classes.errorList}>
    {errors && filter(keys(errors), (k) => {
      const v = errors[k];
      return v && v.length > 0;
    }).map(v => (
      <Errors key={v} errors={errors[v]} classes={classes} />
    ))
    }
  </ul>
);

export default withStyles(errorsStyles)(ErrorList);
