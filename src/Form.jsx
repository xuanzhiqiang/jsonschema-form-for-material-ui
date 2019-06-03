import React from 'react';
import PropTypes from 'prop-types';
import isEqual from 'lodash/isEqual';
import { generate } from 'shortid';
import { withStyles } from '@material-ui/core/styles';
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
import Localized from './localized';

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
    submitText: null,
    localized: null
  };

  constructor(props) {
    super(props);
    if (props.localized) {
      Localized.setLocalized(props.localized);
    }
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
    const { schema } = this.props;
    this.setState(prevState => {
      const data = moveListItem(prevState.data, path, idx, -1);
      const errors = getValidationResult(schema, data);
      const haveError = hasErrors(errors);
      return { data, errors, haveError };
    }, this.notifyChange);
  };

  onMoveItemDown = (path, idx) => () => {
    const { schema } = this.props;
    this.setState(prevState => {
      const data = moveListItem(prevState.data, path, idx, 1);
      const errors = getValidationResult(schema, data);
      const haveError = hasErrors(errors);
      return { data, errors, haveError };
    }, this.notifyChange);
  };

  onDeleteItem = (path, idx) => () => {
    const { schema } = this.props;
    this.setState(prevState => {
      const data = removeListItem(prevState.data, path, idx);
      const errors = getValidationResult(schema, data);
      const haveError = hasErrors(errors);
      return { data, errors, haveError };
    }, this.notifyChange);
  };

  onAddItem = (path, defaultValue) => () => {
    const { schema } = this.props;
    this.setState(prevState => {
      const data = addListItem(prevState.data, path, defaultValue || '');
      const errors = getValidationResult(schema, data);
      const haveError = hasErrors(errors);
      return { data, errors, haveError };
    }, this.notifyChange);
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
      <div className={classes.root}>
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
      </div>
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
  ErrorList: PropTypes.func,
  localized: PropTypes.object
};
