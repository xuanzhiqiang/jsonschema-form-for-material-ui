// import Input, { InputLabel } from 'material-ui/Input'; // eslint-disable-line import/no-named-default
const Input = require('@material-ui/core/Input').default;

const {
  RadioGroup,
  Select,
  Checkbox,
  Image,
  DropZone,
  DualDropZone,
  Link
} = require('../components');

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
  if (type === 'image') {
    return Image;
  }
  if (type === 'dropzone') {
    return DropZone;
  }
  if (type === 'DualDropZone') {
    return DualDropZone;
  }
  if (type === 'link') {
    return Link;
  }
  return Input;
};
