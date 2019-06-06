import React from 'react';

import configureComponent from './configure';
import ConfiguredField from './ConfiguredField';
import Localized from '../localized';

export default props => {
  const { path, id, schema, data, uiSchema, errors, showHelperError } = props;
  const { type } = schema;
  const htmlId = `${id}_${path}`;
  const configuredProps = configureComponent({ ...props, htmlId });
  const descriptionText =
    Localized.getStringByLanguage(uiSchema['ui:description']) ||
    Localized.getStringByLanguage(schema.description);
  const helpText = Localized.getStringByLanguage(uiSchema['ui:help']);

  return (
    <ConfiguredField
      id={id}
      data={data}
      type={type}
      descriptionText={descriptionText}
      helpText={helpText}
      showHelperError={showHelperError}
      errors={errors}
      {...configuredProps}
    />
  );
};
