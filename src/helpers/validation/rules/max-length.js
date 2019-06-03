import size from 'lodash/size';
import Localized from '../../../localized';

export default (schema, value) => {
  if (schema.maxLength && size(value) > schema.maxLength) {
    const title = Localized.getStringByLanguage(schema.title);
    const language = Localized.getLanguage();
    if (language === 'zh-CN') {
      return {
        message: `属性 '${title}' 的值超出最大长度${
          schema.maxLength
        }。 '${value}'`
      };
    }
    return {
      message: `'${value}' exceeds the maximum length of ${
        schema.maxLength
      } for field '${title}'`
    };
  }
  return null;
};
