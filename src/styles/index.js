import { makeStyles} from '@material-ui/core'

 const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh'
    },
    appBar: {
      boxShadow: 'none',
      zIndex: theme.zIndex.drawer + 1,
      height: 56
    },
    toolbar: {
      paddingBottom: 10
    },
    logo: {
      height: 18, 
      paddingRight: 10
    },
    divider: {
      marginTop: -8
    },
    drawer: {
      width: 240,
      flexShrink: 0
      },
    drawerPaper: {
      width: 240,
      borderRight: 'none'
    },
    menuIcon: {
      paddingRight: theme.spacing(3),
      paddingLeft: 10
    },
    icons: {
      paddingRight: theme.spacing(2),
    },
    grow: {
      flexGrow: 1
    },
    listItemText: {
      fontSize: 14
    },
    list: {
      paddingTop: 11,
      paddingBottom: 13
    },
    listItem: {
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 24
    },
    listIcon: {
      marginRight: -10
    },
    box: {
      paddingTop: 23,
      paddingBottom: 23
    },
    subheader: {
      textTransform: 'uppercase',
      fontWeight: 'bold'
    },
    listMore: {
      marginTop: -16
    },

  }))

  export default useStyles