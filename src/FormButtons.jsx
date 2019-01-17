import React from 'react';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';

export class RawFormButtons extends React.Component {
  shouldComponentUpdate = () => false

  render() {
    const { classes, onCancel, onSubmit, cancelText = 'Cancel', submitText = 'Submit' } = this.props;
    return (onCancel || onSubmit) && (
      <div className={classes.formButtons}>
        {onCancel
          && (
          <Button
            className={classNames(classes.cancel, classes.button)}
            variant={'flat'}
            onClick={onCancel}
          >
            {cancelText}
          </Button>
          )
        }
        {onSubmit
          && (
          <Button
            className={classNames(classes.submit, classes.button)}
            variant={'raised'}
            color={'primary'}
            onClick={onSubmit}
          >
            {submitText}
          </Button>
          )
        }
      </div>
    );
  }
}

export default RawFormButtons;
