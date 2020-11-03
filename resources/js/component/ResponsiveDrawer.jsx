import React from 'react';
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
import MailIcon from '@material-ui/icons/Mail';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AppsIcon from '@material-ui/icons/Apps';
import AssignmentIcon from '@material-ui/icons/Assignment';
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { deepOrange, deepPurple } from '@material-ui/core/colors';

import BreadCrums from './BreadCrums';
import Taskicon from './Taskicon';
import Mailicon from './Mailicon';
import Notificationicon from './Notificationicon';
import Appsicon from './Appsicon';
import Image from './Image';
import RightDrawer from './RightDrawer';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    border: 0,
  },
  link: {
    display: 'flex',
    margin: 20,

  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },

  rightToolbar: {
    display: 'flex',
    marginLeft: 'auto',
    // marginRight: -0,
    // padding:20
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
    marginRight: theme.spacing(3),
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

export default function ResponsiveDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleClick = (event) => {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

  const handleDrawerClose = () => {
    setOpen(false);
  };


  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  // const handleClose = (event) => {
  //   if (anchorRef.current && anchorRef.current.contains(event.target)) {
  //     return;
  //   }};

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        color='transparent'
        // border='2px solid black'
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            // color="white"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Link color="inherit" href="/" onClick={handleClick} className={classes.link}>
            {/* <HomeIcon className={classes.icon} /> */}
        Dashboard
      </Link>
          <Link color="inherit" href="/" onClick={handleClick} className={classes.link}>
            {/* <HomeIcon className={classes.icon} /> */}
        Users
      </Link>

          <Link color="inherit" href="/" onClick={handleClick} className={classes.link}>
            {/* <HomeIcon className={classes.icon} /> */}
       Settings
      </Link>
          {/* <Typography variant="h6" noWrap>
          Settings
          </Typography> */}

          
            {/* <NotificationsIcon styles={{ marginRight: '12px' }} /> */}

            {/* <MailIcon styles={{ marginRight: '12px' }} /> */}
            {/* <AppsIcon styles={{ marginRight: '12px' }} /> */}
            <div  className={classes.rightToolbar}  >
            <Notificationicon />
            <Taskicon  />
            <Mailicon  />
            <Image/>
            <RightDrawer />
            </div>
            {/* <Avatar styles={{ marginLeft: '-0px' }} className={classes.orange}>N</Avatar> */}
             


           
              {/* <Avatar className={classes.orange}>N</Avatar> */}
          

            {/* <NotificationsIcon  className={classes.rightToolbar}/> */}
 
            {/* <Avatar styles={{ marginLeft: '-0px' }} className={classes.orange}>N</Avatar> */}

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
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          {/* <Divider /> */}
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>















        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >

          <div className={classes.drawerHeader} />
          <BreadCrums />
          <Divider />

        </main>
    </div>

  );
}
