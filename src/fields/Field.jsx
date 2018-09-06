import React from 'react';
import configureComponent from './configure';
import ConfiguredField from './ConfiguredField';

export default (props) => {
  const { path, id, schema, data, uiSchema } = props;
  const { type } = schema;
  const htmlId = `${id}_${path}`;
  const configuredProps = configureComponent({ ...props, htmlId });

  const descriptionText = uiSchema['ui:description'];
  const helpText = uiSchema['ui:help'];
  return (
    <ConfiguredField
      id={id}
      data={data}
      type={type}
      descriptionText={descriptionText}
      helpText={helpText}
      {...configuredProps}
    />
  );
};
