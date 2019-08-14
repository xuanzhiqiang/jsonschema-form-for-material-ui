import isArray from 'lodash/isArray';
import Localized from '../../../localized';

export default (schema, value) => {
  if (
    value &&
    schema &&
    isArray(value) &&
    schema.minArrayLength &&
    typeof schema.minArrayLength === 'number'
  ) {
    if (value.length < schema.minArrayLength) {
      const title = Localized.getStringByLanguage(schema.title);
      const language = Localized.getLanguage();
      if (language === 'zh-CN') {
        return {
          message: `'${title}'的数量不能少于${schema.minArrayLength}。`
        };
      }
      return {
        message: `The number of '${title}'  cannot be less than ${
          schema.minArrayLength
        }.`
      };
    }
  }
  return null;
};
