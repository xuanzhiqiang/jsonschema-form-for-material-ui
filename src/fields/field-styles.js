export default theme => ({
  root: {
    flex: 1,
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  textarea: {},
  description: {
    transform: `translateX(-${theme.spacing(2)}px)`,
    fontSize: '80%',
    color: theme.palette.grey[500]
  },
  withLabel: {},
  label: {
    marginTop: theme.spacing(-1)
  },
  tooltip: {
    marginTop: theme.spacing(-2)
  }
});
