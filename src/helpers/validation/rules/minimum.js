import Localized from '../../../localized';

export default (schema, value) => {
  if (schema.minimum && typeof value === 'number' && value < schema.minimum) {
    const title = Localized.getStringByLanguage(schema.title);
    return { message: `'${title}' should be >= ${schema.minimum}` };
  }
  return null;
};
