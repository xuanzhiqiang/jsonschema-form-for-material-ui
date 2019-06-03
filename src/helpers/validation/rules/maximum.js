import Localized from '../../../localized';

export default (schema, value) => {
  if (schema.maximum && typeof value === 'number' && value > schema.maximum) {
    const title = Localized.getStringByLanguage(schema.title);
    return { message: `'${title}' should be <= ${schema.maximum}` };
  }
  return null;
};
