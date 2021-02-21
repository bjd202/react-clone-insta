import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import AssignmentIcon from '@material-ui/icons/Assignment';
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';

import Dashboard from './Dashboard'
import Photo from './Photo'
import Board from './Board'
import Profile from './Profile'
import BoardRead from './BoardRead'
import BoardWrite from './BoardWrite'
import BoardEdit from './BoardEdit'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

function Header() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const menuItems1 = [
        {
            icon: (<DeveloperBoardIcon/>),
            text: 'Dashboard',
            url: '/'
        },
        {
            icon: (<PhotoCameraIcon/>),
            text: 'Photo',
            url: '/photo'
        },
        {
            icon: (<AssignmentIcon/>),
            text: 'Board',
            url: '/board'
        },
        {
            icon: (<InboxIcon/>),
            text: 'My Profile',
            url: '/profile'
        }
    ]

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Clone Insta
          </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {menuItems1.map((item, index) => (
                        <ListItem button key={item.text} component={Link} to={item.url}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />
                
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route path="/photo" component={Photo} />
                    <Route exact path="/board" component={Board} />
                    <Route exact path="/board/:id" component={BoardRead} />
                    <Route exact path="/board-write" component={BoardWrite} />
                    <Route exact path="/board-edit" component={BoardEdit} />
                    <Route path="/profile" component={Profile} />
                </Switch>
            </main>
        </div>
    );
}

export default Header
