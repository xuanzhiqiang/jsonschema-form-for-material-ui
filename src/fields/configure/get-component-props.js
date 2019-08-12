import without from 'lodash/without';
import getMuiProps from './get-mui-props';
import getInputType from './get-input-type';
import valuesToOptions from './values-to-options';
import Localized from '../../localized';

const toNumber = v => {
  if (v === '' || v === undefined) return v;
  const n = Number(v);
  return !Number.isNaN(n) ? n : v;
};
const coerceValue = (type, value) => {
  switch (type) {
    case 'string':
      return typeof value === 'string' ? value : String(value);
    case 'number':
    case 'integer':
    case 'double':
    case 'float':
    case 'decimal':
      return toNumber(value);
    default:
      return value;
  }
};
const onChangeHandler = (onChange, type) => e => {
  const value = coerceValue(type, e.target.value);
  if (value !== undefined) onChange(value);
};
const onCheckboxChangeHandler = (onChange, title) => e => {
  const spec = {};
  if (e) {
    spec.$push = [title];
  } else {
    spec.$apply = arr => without(arr, title);
  }
  return onChange(spec);
};

export default ({
  schema = {},
  uiSchema = {},
  onChange,
  htmlId,
  data,
  objectData
}) => {
  const widget = uiSchema['ui:widget'];
  const options = uiSchema['ui:options'] || {};
  const { type } = schema;
  const title = Localized.getStringByLanguage(schema.title);
  const rv = {
    type: getInputType(type, uiSchema),
    onChange: onChange && onChangeHandler(onChange, type),
    ...getMuiProps(uiSchema)
  };
  if (schema.enum) {
    if (widget === 'radio') {
      if (options.inline) {
        rv.row = true;
      }
    } else if (widget === 'checkboxes') {
      rv.onChange = onChange && onCheckboxChangeHandler(onChange, title);
      rv.label = title;
    } else {
      rv.nullOption = 'Please select...';
    }
    rv.options = valuesToOptions(schema.enum);
  } else if (type === 'boolean') {
    rv.label = title;
    rv.onChange = onChange;
  } else if (type === 'image') {
    rv.src = schema.src;
    rv.small = schema.small;
    rv.alt = schema.alt;
    rv.height = schema.height;
    rv.width = schema.width;
  } else {
    rv.inputProps = {
      id: htmlId
    };
  }
  if (widget === 'textarea') {
    rv.multiline = true;
    rv.rowsMax = 5;
  }
  if (options.disabled) {
    if (typeof options.disabled === 'boolean') {
      rv.disabled = options.disabled;
    } else if (typeof options.disabled === 'function') {
      rv.disabled = options.disabled.call(null, data, objectData);
    }
  }
  return rv;
};
