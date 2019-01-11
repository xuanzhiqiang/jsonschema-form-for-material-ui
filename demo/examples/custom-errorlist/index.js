import React from 'react';
import schema from './schema.json';
import uiSchema from './ui-schema.json';
import formData from './form-data.json';


function ErrorListTemplate({ errors }) {
  return (
    <ul>
      {
        Object.values(errors).map(errorArray => {
          return errorArray.map((error, index) => (
              <li key={index} style={{ color: "blue" }}>
              {`Customized errors (${error.message})`}
            </li>
          ));
        })
      }
    </ul>
  );
}


export default ({
  title: 'Custom Error List',
  schema,
  uiSchema,
  formData,
  showErrorList: true,
  showHelperError: false,
  ErrorList: ErrorListTemplate
});
