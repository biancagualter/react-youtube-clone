import React from 'react'
import { Toolbar, Drawer, Divider, List, ListItem, ListItemIcon, ListItemText, Box, Typography, Button, ListSubheader  } from '@material-ui/core'
import useStyles from '../styles/index'

import { HomeSharp, Subscriptions, Whatshot, VideoLibrary, History, AccountCircle, AddCircle, YouTube, LiveTv } from '@material-ui/icons'


const Navbar = () => {
    const classes = useStyles()
    return (
        <>
           <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                paper: classes.drawerPaper,
                }}
            >
                <Toolbar />
                <div className={classes.drawerContainer}>
                <Divider className={classes.divider}/>
                    <List classes={{root: classes.list}}>
                        <ListItem button classes={{root: classes.listItem}}>
                            <ListItemIcon classes={{root: classes.listIcon}}>{<HomeSharp />}</ListItemIcon>
                            <ListItemText classes={{
                                primary: classes.listItemText
                            }} primary={'Início'} />
                        </ListItem>
                        <ListItem button classes={{root: classes.listItem}}>
                            <ListItemIcon classes={{root: classes.listIcon}}>{<Whatshot />}</ListItemIcon>
                            <ListItemText classes={{
                                primary: classes.listItemText
                            }} primary={'Em alta'} />
                        </ListItem>
                        <ListItem button classes={{root: classes.listItem}}>
                            <ListItemIcon classes={{root: classes.listIcon}}>{<Subscriptions />}</ListItemIcon>
                            <ListItemText classes={{
                                primary: classes.listItemText
                            }} primary={'Inscrições'} />
                        </ListItem>
                    </List>
                    <Divider />
                    <List classes={{root: classes.list}}>
                        <ListItem button classes={{root: classes.listItem}}>
                            <ListItemIcon classes={{root: classes.listIcon}}>{<VideoLibrary />}</ListItemIcon>
                            <ListItemText classes={{
                                primary: classes.listItemText
                            }} primary={'Biblioteca'} />
                        </ListItem>
                        <ListItem button classes={{root: classes.listItem}}>
                            <ListItemIcon classes={{root: classes.listIcon}}>{<History />}</ListItemIcon>
                            <ListItemText classes={{
                                primary: classes.listItemText
                            }} primary={'Histórico'} />
                        </ListItem>
                    </List>
                    <Divider />

                    <Box p={4} className={classes.box}>
                        <Typography variant='body3'>
                            Faça login para curtir vídeos, comentar e se inscrever.
                        </Typography>
                        <Box mt={2}>
                            <Button 
                                variant='outlined'
                                color='secondary'
                                startIcon={<AccountCircle />}
                            >
                                Fazer login
                            </Button>
                        </Box>
                    </Box>
                    <Divider />
                    <List
                        component='nav'
                        aria-labelledby='list-subheader'
                        subheader={
                            <ListSubheader id='list-subheader' className={classes.subheader}>
                                    O Melhor do Youtube
                            </ListSubheader>
                        }
                    />
                    <List className={classes.listMore}>
                        <ListItem button>
                                <ListItemIcon><AddCircle /></ListItemIcon>
                                <ListItemText classes={{
                                    primary: classes.listItemText
                                }}primary={'Música'} />
                        </ListItem>
                        <ListItem button>
                                <ListItemIcon><AddCircle /></ListItemIcon>
                                <ListItemText classes={{
                                    primary: classes.listItemText
                                }}primary={'Esportes'} />
                        </ListItem>
                        <ListItem button>
                                <ListItemIcon><AddCircle /></ListItemIcon>
                                <ListItemText classes={{
                                    primary: classes.listItemText
                                }}primary={'Jogos'} />
                        </ListItem>
                        <ListItem button>
                                <ListItemIcon><AddCircle /></ListItemIcon>
                                <ListItemText classes={{
                                    primary: classes.listItemText
                                }}primary={'Filmes'} />
                        </ListItem>
                        <ListItem button>
                                <ListItemIcon><AddCircle /></ListItemIcon>
                                <ListItemText classes={{
                                    primary: classes.listItemText
                                }}primary={'Notícias'} />
                        </ListItem>
                        <ListItem button>
                                <ListItemIcon><AddCircle /></ListItemIcon>
                                <ListItemText classes={{
                                    primary: classes.listItemText
                                }}primary={'Ao vivo'} />
                        </ListItem>
                        <ListItem button>
                                <ListItemIcon><AddCircle /></ListItemIcon>
                                <ListItemText classes={{
                                    primary: classes.listItemText
                                }}primary={'Destaques'} />
                        </ListItem>
                        <ListItem button>
                                <ListItemIcon><AddCircle /></ListItemIcon>
                                <ListItemText classes={{
                                    primary: classes.listItemText
                                }}primary={'Vídeos 360'} />
                        </ListItem>
                    </List>
                    <Divider />

                    <List
                        component='nav'
                        aria-labelledby='list-subheader'
                        subheader={
                            <ListSubheader id='list-subheader' className={classes.subheader}>
                                    Mais do Youtube
                            </ListSubheader>
                        }
                    />
                    <List className={classes.listMore}>
                        <ListItem button>
                                <ListItemIcon><YouTube /></ListItemIcon>
                                <ListItemText classes={{
                                    primary: classes.listItemText
                                }}primary={'Youtube Premium'} />
                        </ListItem>
                        <ListItem button>
                                <ListItemIcon><LiveTv /></ListItemIcon>
                                <ListItemText classes={{
                                    primary: classes.listItemText
                                }}primary={'Ao vivo'} />
                        </ListItem>
                    </List>
                </div>
            </Drawer> 
        </>
    )
}

export default Navbar
