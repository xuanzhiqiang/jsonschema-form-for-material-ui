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

export default props => {
  const { schema } = props;
  // const title = uiSchema['ui:title'] || schema.title;
  const title = Localized.getStringByLanguage(schema.title);
  return {
    title,
    className: getClassName(props),
    Component: getComponent(props),
    componentProps: getComponentProps(props),
    LabelComponent: title && getLabelComponent(props),
    labelComponentProps: getLabelComponentProps(props),
    popUpOffset: props.popUpOffset
  };
};
