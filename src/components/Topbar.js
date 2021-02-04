import React from 'react'
import { AppBar, Toolbar, IconButton, Button } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VideoCall from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import useStyles from '../styles/index'


const Topbar = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
           <AppBar color='inherit' className = {classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <IconButton 
                        edge="start" 
                        className={classes.menuIcon} 
                        color="inherit" 
                        aria-label="menu"
                    >
                    <MenuIcon />
                    </IconButton>
                    <img src="./images/logo.png" alt="logo" className={classes.logo}/>
                    <div className={classes.grow} />

                    <IconButton 
                        className={classes.icons} 
                        color="inherit" 
                    >
                    <VideoCall />
                    </IconButton>
                    <IconButton 
                        className={classes.icons} 
                        color="inherit" 
                    >
                    <AppsIcon />
                    </IconButton>
                    <IconButton 
                        className={classes.icons} 
                        color="inherit" 
                    >
                    <NotificationsIcon />
                    </IconButton>
                    
                    <Button startIcon={<AccountCircle />} variant="outlined" color="secondary">Fazer Login</Button>
                </Toolbar>
            </AppBar> 
        </div>
    )
}

export default Topbar
