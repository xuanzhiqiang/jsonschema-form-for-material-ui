import React from 'react';
import isEqual from 'lodash/isEqual';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';

import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/InfoOutlined';

import fieldStyles from './field-styles';

// for unit testing only
export class RawConfiguredField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    const { data: preData, componentProps: preComponentProps } = this.props;
    const { data, componentProps } = nextProps;
    if (!isEqual(preData, data)) return true;
    if (!isEqual(preComponentProps.error, componentProps.error)) return true;
    if (this.state.anchorEl !== nextState.anchorEl) return true;
    return false;
  };

  formatErrorMessages = () => {
    const { errors, errorHelp = undefined } = this.props;
    if (errorHelp) return errorHelp;
    return errors.map(error => error.message).toString();
  };

  render() {
    const {
      classes = {},
      data,
      type,
      descriptionText,
      helpText: helpT,
      showHelperError,
      Component = Input,
      LabelComponent,
      labelComponentProps = {},
      title,
      componentProps = {},
      id,
      errors,
      disabled: disabled1 = false
    } = this.props;
    const helpText =
      showHelperError && errors && errors.length > 0
        ? this.formatErrorMessages()
        : helpT;

    const {
      disabled: disabled2 = false,
      ...retComponentProps
    } = componentProps;
    const disabled = disabled1 || disabled2;

    return (
      <FormControl error={errors && errors.length > 0} className={classes.root}>
        {LabelComponent && title && (
          <LabelComponent className={classes.label} {...labelComponentProps}>
            {title}
            {descriptionText ? (
              <Tooltip
                className={classes.tooltip}
                title={descriptionText}
                placement="top-start"
              >
                <IconButton>
                  <InfoIcon />
                </IconButton>
              </Tooltip>
            ) : null}
          </LabelComponent>
        )}
        {descriptionText && !(LabelComponent && title) ? (
          <div>
            <Tooltip title={descriptionText} placement="top-start">
              <IconButton>
                <InfoIcon />
              </IconButton>
            </Tooltip>
          </div>
        ) : null}
        <Component
          value={data || ''}
          type={type}
          id={labelComponentProps.htmlFor}
          {...retComponentProps}
          disabled={disabled}
        />
        <FormHelperText id={`${id}-help`}>{helpText}</FormHelperText>
      </FormControl>
    );
  }
}
export default withStyles(fieldStyles)(RawConfiguredField);
