import LocalizedStrings from 'localized-strings';

export default class Localized {
  constructor() {
    Localized.strings = new LocalizedStrings(
      {
        en: {},
        'zh-CN': {}
      },
      {
        /* options */
      }
    );
  }

  static getLanguage = () => {
    if (Localized.strings === undefined) {
      Localized.INSTANCE = new Localized();
    }
    return Localized.strings.getLanguage();
  };

  static getStringByLanguage = str => {
    if (str === undefined) return undefined;

    if (Localized.strings === undefined) {
      Localized.INSTANCE = new Localized();
    }

    if (typeof str === 'object') {
      return str[Localized.strings.getLanguage()];
    }

    return str;
  };
}
