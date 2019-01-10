import React from 'react';
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';

import fieldStyles from './field-styles';
import PopoverInfo from './components/PopoverInfo';

// for unit testing only
export class RawConfiguredField extends React.Component {

  shouldComponentUpdate = (nextProps, nextState) => {
    if (this.props.data !== nextProps.data) return true;
    if (this.state.anchorEl !== nextState.anchorEl) return true;
    return false;
  };

  formatErrorMessages = () => {
    const { validation } = this.props;
    return validation.map( error => error.message).toString();
  }

  render() {
    const {
      classes = {},
        data,
        type,
        descriptionText,
        helpT = helpText,
        Component = Input,
        LabelComponent,
        labelComponentProps = {},
        title,
        className,
        componentProps = {},
        id,
        validation
    } = this.props;
    const helpText = validation && validation.length > 0 ? this.formatErrorMessages() : helpT;
    return (
      <FormControl error={validation && validation.length > 0} className={classNames(classes.root, { [classes.withLabel]: LabelComponent })}>
        {LabelComponent && title &&
          (<LabelComponent className={classes.label} {...labelComponentProps}>
              {title}
              {descriptionText ?
                <PopoverInfo
                  descriptionText={descriptionText}
                  classes={classes}
                /> : null}
          </LabelComponent>)
        }
        {descriptionText && !(LabelComponent && title) ?
          <PopoverInfo
            descriptionText={descriptionText}
            classes={classes}
          /> : null}
        <Component
          className={className && classes[className]}
          value={data}
          type={type}
          {...componentProps}
        />
        <FormHelperText id={`${id}-help`}>{helpText}</FormHelperText>
      </FormControl>
    );
  }
}
export default withStyles(fieldStyles)(RawConfiguredField);
