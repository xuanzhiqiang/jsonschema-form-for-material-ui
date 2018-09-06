import React from 'react';
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import debounce from 'lodash.debounce';

import fieldStyles from './field-styles';

const getLTofEl = el => {
  const box = el.getBoundingClientRect();
  return {
    top: box.top,
    left: box.left,
  };
}

// for unit testing only
export class RawConfiguredField extends React.Component {
  state = {
    anchorEl: null,
  };

  getAnchorPosition = () => {
    if (!this.state.anchorEl) return { top: 0, left: 0 };
    const pos = getLTofEl(this.state.anchorEl);
    if (this.props.popUpOffset) {
      if (this.props.popUpOffset.top) pos.top += this.props.popUpOffset.top;
      if (this.props.popUpOffset.left) pos.left += this.props.popUpOffset.left;
    }
    return pos;
  }

  handlePopoverOpen = debounce(event => {
    this.setState({ anchorEl: event.currentTarget })
  }, 250, { leading: true });
  handlePopoverClose = debounce(() => {
    this.setState({ anchorEl: null })
  }, 250, { leading: true });

  shouldComponentUpdate = (nextProps, nextState) => {
    if (this.props.data !== nextProps.data) return true;
    if (this.state.anchorEl !== nextState.anchorEl) return true;
    return false;
  };

  render() {
    // debounce(() => { console.log(1); }, 250, { leading: true });
    const {
      classes = {},
        data,
        type,
        descriptionText,
        helpText,
        Component = Input,
        LabelComponent,
        labelComponentProps = {},
        title,
        className,
        componentProps = {},
        id,
    } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
      <FormControl className={classNames(classes.root, { [classes.withLabel]: LabelComponent })}>
        {LabelComponent && title &&
          (<LabelComponent {...labelComponentProps}>
              {title}
          </LabelComponent>)
        }

        {descriptionText ? <IconButton
          style={{position: 'absolute', left: -20, top: 15, width: 20, height: 20}}
          aria-owns={open ? 'mouse-over-popover' : null}
          aria-haspopup="true"
          disableRipple
          className={classes.infoButton}
          disableTouchRipple
          onMouseEnter={this.handlePopoverOpen}
          onMouseLeave={this.handlePopoverClose}
          >
          <InfoIcon />
        </IconButton>
        : null}
        {descriptionText ? <Popover
            anchorReference="anchorPosition"
            id="mouse-over-popover"
            className={classes.infoPopover}
            classes={{
              paper: classes.infoPaper,
            }}
            style={{ pointerEvents: 'none' }}
            open={open}
            anchorEl={anchorEl}
            anchorPosition={this.getAnchorPosition()}
            onClose={this.handlePopoverClose}
            disableRestoreFocus
          >
            <Typography>{descriptionText}</Typography>
          </Popover> : null}

        <Component
          className={className && classes[className]}
          value={data}
          type={type}
          {...componentProps}
        />
        {helpText && <FormHelperText id={`${id}-help`}>{helpText}</FormHelperText>}
      </FormControl>
    );
  }
}
export default withStyles(fieldStyles)(RawConfiguredField);
