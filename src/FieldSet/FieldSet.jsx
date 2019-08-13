import React from 'react';
import isEqual from 'lodash/isEqual';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import fieldSetStyles from './field-set-styles';
import FieldSetArray from './FieldSetArray';
import FieldSetObject from './FieldSetObject';
import Localized from '../localized';

export const RawFieldSetContent = props => {
  const { schema = {} } = props;
  const { type } = schema;
  if (type === 'array') {
    return <FieldSetArray {...props} />;
  }
  if (type === 'object') {
    return <FieldSetObject {...props} />;
  }
  return null;
};

// for unit testing
export class RawFieldSet extends React.Component {
  shouldComponentUpdate = nextProps =>
    !isEqual(this.props.data, nextProps.data);

  render() {
    const { path, classes, schema = {}, ...ret } = this.props;
    const title = Localized.getStringByLanguage(schema.title);
    const helpText = Localized.getStringByLanguage(schema.help);
    return (
      <div className={classes.root}>
        {schema.title && (
          <InputLabel className={classes.title}>{title}</InputLabel>
        )}
        {schema.help && <FormHelperText>{helpText}</FormHelperText>}
        <RawFieldSetContent path={path} schema={schema} {...ret} />
      </div>
    );
  }
}

export default withStyles(fieldSetStyles.fieldSet)(RawFieldSet);
