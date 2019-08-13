import isArray from 'lodash/isArray';
import Localized from '../../../localized';

export default (schema, other = {}) => {
  const { image } = other;
  if (
    image &&
    typeof image === 'object' &&
    schema.filesize &&
    typeof schema.filesize === 'object'
  ) {
    if (isArray(schema.filesize)) {
      const noError = schema.filesize.some(
        elem => elem.width === image.width && elem.height === image.height
      );
      if (!noError) {
        const tip = Localized.getStringByLanguage(schema.tip);
        return { message: `${tip}` };
      }
      return null;
    }

    if (
      image.width !== schema.filesize.width ||
      image.height !== schema.filesize.height
    ) {
      const tip = Localized.getStringByLanguage(schema.tip);
      return { message: `${tip}` };
    }
  }
  return null;
};
