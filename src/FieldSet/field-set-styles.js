export default {
  fieldSet: theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      border: 0
    },
    listItem: {
      margin: theme.spacing.unit,
      padding: theme.spacing.unit
    }
  }),
  fieldSetObject: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      '&$row': {
        flexDirection: 'row',
        flexWrap: 'wrap'
      }
    },
    row: {},
    listItem: {}
  },
  fieldSetArray: theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column'
    },
    listItem: {},
    addItemBtn: {
      display: 'flex',
      justifyContent: 'flex-end',
      '&>button': {
        background: theme.palette.primary.main,
        color: theme.palette.common.white
      }
    }
  }),
  reorderable: {
    root: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      '& >fieldset': {
        width: '100%'
      }
    },
    listItem: {}
  },
  reorderControls: () => ({
    root: {
      display: 'flex',
      flexDirection: 'row',
      '& >button': {
        // marginRight: 1,
        // borderRadius: 0,
        // '&:not(:last-child)': {
        //   borderRight: `1px solid ${theme.palette.grey[400]}`
        // }
      }
    }
    // remove: {
    //   background: theme.palette.error.main,
    //   color: theme.palette.grey[800]
    // }
  }),
  fieldSetContent: {
    root: {},
    listItem: {}
  }
};
