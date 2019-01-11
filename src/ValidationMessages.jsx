import React from 'react';
import Typography from '@material-ui/core/Typography';
import keys from 'lodash/keys';
import { withStyles } from '@material-ui/core/styles';
import filter from 'lodash/filter';

const validationStyles = {
  errorList: {
    backgroundColor: "#e9e9e9",
    color: "#f44336",
    listStyle:"none"
  },
};

const Validation = ({ validation, classes }) => (
  <Typography variant="p">
    {validation.message}
  </Typography>
);

const Validations = ({ validation, classes }) => (
  <li className={classes.ul} >
    {validation.map((v, idx) => (<Validation key={idx} validation={v} classes={classes} />)) // eslint-disable-line react/no-array-index-key,max-len
    }
  </li>
);

const ValidationMessages = ({ validation, classes }) => (
  <ul className={classes.errorList}>
    {validation && filter(keys(validation), (k) => {
      const v = validation[k];
      return v && v.length > 0;
    }).map(v => (
      <Validations key={v} validation={validation[v]} classes={classes} />
    ))
    }
  </ul>
);

export default withStyles(validationStyles)(ValidationMessages);
