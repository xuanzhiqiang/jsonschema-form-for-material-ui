import React from 'react';
import isEqual from 'lodash/isEqual';
import { withStyles } from '@material-ui/core/styles';
import FieldSet from './FieldSet';
import Field from './fields';
import styles from './form-field-styles';

// exported for unit testing
export class RawFormField extends React.Component {
  shouldComponentUpdate = nextProps =>
    !isEqual(this.props.data, nextProps.data);

  render() {
    const {
      classes,
      schema,
      data,
      uiSchema = {},
      onChange,
      path,
      disabled,
      ...rest
    } = this.props;
    const { type } = schema;
    if (type === 'object' || type === 'array') {
      return (
        <FieldSet
          className={classes.root}
          path={path}
          schema={schema}
          data={data}
          uiSchema={uiSchema}
          onChange={onChange}
          {...rest}
          disabled={disabled}
        />
      );
    }
    return (
      <Field
        className={classes.root}
        path={path}
        schema={schema}
        data={data}
        uiSchema={uiSchema}
        onChange={onChange && onChange(path)}
        {...rest}
        disabled={disabled}
      />
    );
  }
}

export default withStyles(styles)(RawFormField);
