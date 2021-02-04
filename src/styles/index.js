import { makeStyles} from '@material-ui/core'

 const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh'
    },
    appBar: {
        boxShadow: 'none',
        zIndex: theme.zIndex.drawer + 1,
    },
    toolbar: {
        paddingBottom: 10,
    },
    logo: {
       height: 18, 
       paddingRight: 10,
    },
    drawer: {
        width: 240,
        flexShrink: 0,
      },
      drawerPaper: {
        width: 240,
      },
    menuIcon: {
        paddingRight: theme.spacing(3),
        paddingLeft: 10,
    },
    icons: {
        paddingRight: theme.spacing(2),
    },
    grow: {
        flexGrow: 1
    }
  }))

  export default useStyles