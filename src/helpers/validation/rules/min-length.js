import size from 'lodash/size';
import Localized from '../../../localized';

export default (schema, value) => {
  if (schema.minLength !== undefined && size(value) < schema.minLength) {
    const title = Localized.getStringByLanguage(schema.title);
    const language = Localized.getLanguage();
    if (language === 'zh-CN') {
      return { message: `'${title}' 长度不能小于${schema.minLength}。` };
    }
    return {
      message: `'${schema.title}' must be at least ${schema.minLength}`
    };
  }
  return null;
};
