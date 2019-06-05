export default theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2)
  },
  formButtons: {
    display: 'flex',
    marginTop: theme.spacing(2),
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
    marginLeft: theme.spacing(2)
  },
  field: {},
  formfield: {}
});
