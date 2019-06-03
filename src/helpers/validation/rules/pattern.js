/* eslint-disable */
import size from 'lodash/size';
import Localized from '../../../localized';

export default (schema, value) => {
  if (schema.pattern && value && !RegExp(schema.pattern).test(value)) {
    const title = Localized.getStringByLanguage(schema.title);
    return { message: `'${title}' must ma tch pattern ${schema.pattern}` };
  }
  return null;
};
