export default {
  fieldSet: theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: theme.spacing(1)
    },
    title: {
      fontSize: 20,
      color: 'black',
      marginTop: theme.spacing(3)
    },
    listItem: {
      margin: theme.spacing(1),
      padding: theme.spacing(1)
    }
  }),
  fieldSetArray: () => ({
    root: {
      display: 'flex',
      flexDirection: 'column'
    },
    addItemBtn: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }),
  reorderable: {
    root: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between'
    },
    listItem: {}
  },
  reorderControls: () => ({
    root: {
      display: 'flex',
      flexDirection: 'row'
    }
  })
};
