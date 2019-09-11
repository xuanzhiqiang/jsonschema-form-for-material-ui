import React from 'react';
import { createStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import styles from './example-styles';
import Source from './Source';
import Form from '../../src/Form';

const formStyles = theme =>
  createStyles({
    field: {
      paddingLeft: theme.spacing(4)
    },
    formButtons: {
      order: 2
    },
    root: {
      display: 'flex',
      padding: theme.spacing(1)
    }
  });

class Example extends React.Component {
  state = {
    ...this.props.data // eslint-disable-line react/destructuring-assignment
  };

  componentWillReceiveProps = ({ data }) => {
    this.setState({
      ...data
    });
  };

  onChange = type => value => {
    this.setState({
      [type]: value
    });
  };

  onFormChanged = ({ formData }) => {
    console.log('onFormChanged, ', formData);
    this.setState({ formData });
  };

  onSubmit = value => {
    console.log('onSubmit: %s', JSON.stringify(value)); // eslint-disable-line no-console
  };

  onCancel = () => {
    const { data } = this.props;
    this.setState({
      ...data
    });
  };

  onErrors = errors => {
    console.log(errors);
  };

  render() {
    const { data, classes } = this.props;
    const { title, showErrorList, showHelperError, ErrorList } = data;
    const { schema, uiSchema, formData } = this.state;
    return (
      <Paper className={classes.root}>
        <h3>{title}</h3>
        <div className={classes.ctr}>
          <div className={classes.sourceCtr}>
            <div>
              <Source
                title={'JSONSchema'}
                source={schema}
                onChange={this.onChange('schema')}
              />
            </div>
            <div>
              <Source
                title={'uiSchema'}
                source={uiSchema}
                onChange={this.onChange('uiSchema')}
              />
              <Source
                title={'formData'}
                source={formData}
                onChange={this.onChange('formData')}
              />
            </div>
          </div>
          <div className={classes.display}>
            <Form
              styles={formStyles}
              schema={schema}
              uiSchema={uiSchema}
              formData={formData}
              onCancel={this.onCancel}
              onSubmit={this.onSubmit}
              onChange={this.onFormChanged}
              cancelText={'Cancel'}
              submitText={'Save'}
              showErrorList={true}
              showHelperError={true}
              onErrors={this.onErrors}
              disabled={false}
            />
          </div>
        </div>
      </Paper>
    );
  }
}
export default withStyles(styles)(Example);
