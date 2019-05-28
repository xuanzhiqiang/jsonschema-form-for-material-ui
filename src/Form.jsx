import React from 'react';
import PropTypes from 'prop-types';
import isEqual from 'lodash/isEqual';
import { generate } from 'shortid';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import formStyles from './form-styles';
import FormField from './FormField';
import updateFormData, {
  addListItem,
  removeListItem,
  moveListItem
} from './helpers/update-form-data';
import getValidationResult from './helpers/validation';
import DefaultErrorList, { hasErrors } from './ErrorList';
import FormButtons from './FormButtons';
import { getDefaultFormState } from './uitils';

class Form extends React.Component {
  static defaultProps = {
    uiSchema: {},
    showErrorList: false,
    showHelperError: true,
    ErrorList: DefaultErrorList,
    onErrors: () => {},
    onChange: null,
    onSubmit: null,
    onCancel: null,
    cancelText: null,
    submitText: null
  };

  constructor(props) {
    super(props);
    const nextState = this.getStateFromProps(props);
    this.state = {
      id: generate(),
      haveError: false,
      ...nextState
    };
    if (!isEqual(nextState.data, props.formData)) {
      if (props.onChange) {
        props.onChange({ formData: nextState.data });
      }
    }
  }

  getStateFromProps = props => {
    const data = getDefaultFormState(props.schema, props.formData);
    const errors = getValidationResult(props.schema, data);
    const haveError = hasErrors(errors);
    console.log('errors ', errors);
    console.log('haveError ', haveError);
    return {
      data,
      errors,
      haveError
    };
  };

  componentWillReceiveProps = nextProps => {
    const nextState = this.getStateFromProps(nextProps);
    if (!isEqual(this.state.data, nextState.data)) {
      this.setState(nextState);
    }
  };

  onChange = field => value => {
    // eslint-disable-next-line react/no-access-state-in-setstate
    const data = updateFormData(this.state.data, field, value);
    const errors = getValidationResult(this.props.schema, data);
    const haveError = hasErrors(errors);
    this.setState(() => {
      return { data, errors, haveError };
    }, this.notifyChange);
  };

  onMoveItemUp = (path, idx) => () => {
    this.setState(
      prevState => ({ data: moveListItem(prevState.data, path, idx, -1) }),
      this.notifyChange
    );
  };

  onMoveItemDown = (path, idx) => () => {
    this.setState(
      prevState => ({ data: moveListItem(prevState.data, path, idx, 1) }),
      this.notifyChange
    );
  };

  onDeleteItem = (path, idx) => () => {
    this.setState(
      prevState => ({ data: removeListItem(prevState.data, path, idx) }),
      this.notifyChange
    );
  };

  onAddItem = (path, defaultValue) => () => {
    this.setState(
      prevState => ({
        data: addListItem(prevState.data, path, defaultValue || '')
      }),
      this.notifyChange
    );
  };

  onSubmit = () => {
    const { onSubmit, onErrors } = this.props;
    const { data, haveError, errors } = this.state;
    if (haveError) {
      onErrors(errors);
    } else {
      onSubmit({ formData: data });
    }
  };

  notifyChange = () => {
    const { onChange } = this.props;
    const { data } = this.state;
    if (onChange) {
      onChange({ formData: data });
    }
  };

  render() {
    const {
      classes,
      onSubmit,
      onChange,
      onCancel,
      cancelText,
      submitText,
      showErrorList,
      ErrorList,
      buttonProps,
      ...rest
    } = this.props;
    const { errors, id, data, haveError } = this.state;
    return (
      <Paper className={classes.root}>
        {showErrorList ? <ErrorList errors={errors} field={id} /> : null}
        <div className={classes.field}>
          <FormField
            path=""
            data={data}
            id={id}
            className={classes.formfield}
            onChange={this.onChange}
            onSubmit={this.onSubmit}
            errors={errors}
            onMoveItemUp={this.onMoveItemUp}
            onMoveItemDown={this.onMoveItemDown}
            onDeleteItem={this.onDeleteItem}
            onAddItem={this.onAddItem}
            {...rest}
          />
        </div>
        <FormButtons
          haveError={haveError}
          onSubmit={this.onSubmit}
          hasExternalOnSubmit={!!onSubmit}
          onCancel={onCancel}
          classes={classes}
          cancelText={cancelText}
          submitText={submitText}
          buttonProps={buttonProps}
        />
      </Paper>
    );
  }
}
export default withStyles(formStyles)(Form);

Form.propTypes = {
  schema: PropTypes.object.isRequired,
  classes: PropTypes.object,
  uiSchema: PropTypes.object,
  buttonProps: PropTypes.object,
  formData: PropTypes.any,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  onErrors: PropTypes.func,
  onCancel: PropTypes.func,
  cancelText: PropTypes.string,
  submitText: PropTypes.string,
  showErrorList: PropTypes.bool,
  showHelperError: PropTypes.bool,
  ErrorList: PropTypes.func
};
