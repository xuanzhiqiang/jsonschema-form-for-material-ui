// import Input, { InputLabel } from 'material-ui/Input'; // eslint-disable-line import/no-named-default
import getComponentProps from './get-component-props';
import getLabelComponentProps from './get-label-component-props';
import getLabelComponent from './get-label-component';
import getComponent from './get-component';
import Localized from '../../localized';

const getClassName = ({ uiSchema = {} }) => {
  const widget = uiSchema['ui:widget'];
  return widget === 'textarea' ? 'textarea' : null;
};

const changeDataDefault = (configuredProps, { schema = {}, errors }) => {
  const { type } = schema;
  const temp = { ...configuredProps };
  if (type === 'dropzone') {
    temp.data = {
      preview: '',
      uploading: false
    };
    temp.componentProps.error = errors && errors.length > 0;
  }
  return temp;
};

export default props => {
  const { schema } = props;
  const title = Localized.getStringByLanguage(schema.title);
  const configuredProps = {
    title,
    className: getClassName(props),
    Component: getComponent(props),
    componentProps: getComponentProps(props),
    LabelComponent: title && getLabelComponent(props),
    labelComponentProps: getLabelComponentProps(props),
    popUpOffset: props.popUpOffset
  };
  return changeDataDefault(configuredProps, props);
};
