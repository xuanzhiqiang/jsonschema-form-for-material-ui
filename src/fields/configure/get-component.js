// import Input, { InputLabel } from 'material-ui/Input'; // eslint-disable-line import/no-named-default
const Input = require('@material-ui/core/Input').default;

const { RadioGroup, Select, Checkbox } = require('../components');

export default ({ schema, uiSchema = {} }) => {
  const widget = uiSchema['ui:widget'];
  const { type } = schema;

  if (schema.enum) {
    if (widget === 'radio') {
      return RadioGroup;
    }
    if (widget === 'checkboxes') {
      return Checkbox;
    }
    return Select;
  }
  if (type === 'boolean') {
    return Checkbox;
  }
  return Input;
};
