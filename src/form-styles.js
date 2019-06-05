export default theme => ({
  root: {
    padding: theme.spacing.unit * 2
  },
  formButtons: {
    display: 'flex',
    marginTop: theme.spacing.unit * 2,
    justifyContent: 'flex-end'
  },
  submit: {
    fontSize: '100%'
  },
  cancel: {
    fontSize: '100%'
  },
  button: {
    fontSize: '100%',
    margin: theme.spacing.unit * 2
  },
  field: {
    display: 'flex',
    flexDirection: 'column'
  },
  formfield: {}
});
