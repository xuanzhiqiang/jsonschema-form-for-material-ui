import React from 'react';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';

export class RawFormButtons extends React.Component {
  componentWillReceiveProps(nextProps) {
    const { haveError } = nextProps;
    if (haveError !== this.props.haveError) {
      this.shouldComponentUpdate = true;
    } else {
      this.shouldComponentUpdate = false;
    }
  }

  shouldComponentUpdate = () => this.shouldComponentUpdate;

  render() {
    const {
      classes,
      onCancel,
      onSubmit,
      haveError,
      buttonProps,
      hasExternalOnSubmit,
      cancelText = 'Cancel',
      submitText = 'Submit'
    } = this.props;

    const cancelProps = Object.assign(
      {
        variant: 'text',
        onClick: onCancel
      },
      buttonProps
    );
    const submitProps = Object.assign(
      {
        variant: 'contained',
        color: 'primary',
        onClick: onSubmit
      },
      buttonProps
    );
    return (
      (onCancel || onSubmit) && (
        <div className={classes.formButtons}>
          {onCancel && (
            <Button
              className={classNames(classes.cancel, classes.button)}
              {...cancelProps}
            >
              {cancelText}
            </Button>
          )}
          {hasExternalOnSubmit && (
            <Button
              className={classNames(classes.submit, classes.button)}
              {...submitProps}
              disabled={haveError}
            >
              {submitText}
            </Button>
          )}
        </div>
      )
    );
  }
}

export default RawFormButtons;
