export default theme => ({
  root: {
    flex: 1,
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit * 1,
    marginRight: theme.spacing.unit * 1
  },
  textarea: {},
  description: {
    transform: `translateX(-${theme.spacing.unit * 2}px)`,
    fontSize: '80%',
    color: theme.palette.grey[500]
  },
  withLabel: {},
  label: {
    marginTop: theme.spacing.unit * -1
  },
  tooltip: {
    marginTop: theme.spacing.unit * -2
  }
});
