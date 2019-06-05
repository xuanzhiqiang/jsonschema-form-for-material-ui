export default {
  fieldSet: theme => ({
    root: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      border: 0,
      marginTop: theme.spacing.unit * 2
    },
    listItem: {
      margin: theme.spacing.unit,
      padding: theme.spacing.unit
    }
  }),
  fieldSetObject: {
    column: {
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
      display: 'flex',
      flex: 1,
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
