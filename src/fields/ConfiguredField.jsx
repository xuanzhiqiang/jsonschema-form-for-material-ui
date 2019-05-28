import React from 'react';
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';

import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/InfoOutlined';

import fieldStyles from './field-styles';
// import PopoverInfo from './components/PopoverInfo'; removed for fix animation problems

// for unit testing only
export class RawConfiguredField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    if (this.props.data !== nextProps.data) return true;
    if (this.state.anchorEl !== nextState.anchorEl) return true;
    return false;
  };

  formatErrorMessages = () => {
    const { errors } = this.props;
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
      className,
      componentProps = {},
      id,
      errors
    } = this.props;
    const helpText =
      showHelperError && errors && errors.length > 0
        ? this.formatErrorMessages()
        : helpT;
    return (
      <FormControl
        error={errors && errors.length > 0}
        className={classNames(classes.root, {
          [classes.withLabel]: LabelComponent
        })}
      >
        {LabelComponent && title && (
          <LabelComponent className={classes.label} {...labelComponentProps}>
            {title}
            {descriptionText ? (
              <Tooltip title={descriptionText} placement="top-start">
                <IconButton>
                  <InfoIcon />
                </IconButton>
              </Tooltip>
            ) : null}
          </LabelComponent>
        )}
        {descriptionText && !(LabelComponent && title) ? (
          <Tooltip title={descriptionText} placement="top-start">
            <IconButton>
              <InfoIcon />
            </IconButton>
          </Tooltip>
        ) : null}
        <Component
          className={className && classes[className]}
          value={data || ''}
          id={labelComponentProps.htmlFor}
          type={type}
          {...componentProps}
        />
        <FormHelperText id={`${id}-help`}>{helpText}</FormHelperText>
      </FormControl>
    );
  }
}
export default withStyles(fieldStyles)(RawConfiguredField);
