import isArray from 'lodash/isArray';
import Localized from '../../../localized';

export default (schema, value) => {
  if (
    value &&
    schema &&
    isArray(value) &&
    schema.maxArrayLength &&
    typeof schema.maxArrayLength === 'number'
  ) {
    if (value.length > schema.maxArrayLength) {
      const title = Localized.getStringByLanguage(schema.title);
      const language = Localized.getLanguage();
      if (language === 'zh-CN') {
        return {
          message: `'${title}'的数量不能大于${schema.maxArrayLength}。`
        };
      }
      return {
        message: `The number of '${title}'  cannot be greater than ${
          schema.maxArrayLength
        }`
      };
    }
  }
  return null;
};
