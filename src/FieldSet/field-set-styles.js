export default {
  fieldSet: theme => ({
    root: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      border: 0,
      marginTop: theme.spacing(2)
    },
    listItem: {
      margin: theme.spacing(1),
      padding: theme.spacing(1)
    }
  }),
  fieldSetObject: {
    root: {
      display: 'flex',
      flexDirection: 'column'
    },
    row: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    listItem: {}
  },
  fieldSetArray: () => ({
    root: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    },
    listItem: {},
    addItemBtn: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }),
  reorderable: {
    root: {
      display: 'flex',
      flex: 1,
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
  }),
  fieldSetContent: {
    root: {},
    listItem: {}
  }
};
