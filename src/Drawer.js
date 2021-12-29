import React from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import List from '@material-ui/core/List';

import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import MoodIcon from '@material-ui/icons/Mood';
import { withThemeContext } from './ThemeProvider';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  customPaper:(props)=>{return {
    backgroundColor:props.theme.themeProperties.foregroundColor,
    color:props.theme.themeProperties.color,
    width: drawerWidth
  }},
  iconRoot:(props)=>{return{color:props.theme.themeProperties.color}},
  drawer: (props)=>{return {
    width: drawerWidth,
    flexShrink: 0,
    
  }},
 links:(props)=>{ return{   color:props.theme.themeProperties.color}},
 icons:(props)=>{ return{   color:props.theme.themeProperties.color}},
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));

export default withThemeContext(function DrawerRight(props) {
  const classes = useStyles(props);
  const theme = useTheme();
  const {changeTheme}=props.theme
  const themeChange = (evt) => {
    changeTheme(evt.target.innerText.toLowerCase())

  };
    return (
             
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={props.open}
        classes={{
          paper: classes.customPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={props.toggleDrawerOpen} >
            {theme.direction === 'rtl' ? <ChevronLeftIcon className={classes.icons}  /> : <ChevronRightIcon className={classes.icons}/>}
          </IconButton>
        </div>
      
        <List>
            <ListItem button onClick={themeChange}>
              <ListItemIcon> <WbSunnyIcon className={classes.icons} /></ListItemIcon>
              <ListItemText primary={"Light Theme"} />
            </ListItem>
            <ListItem button onClick={themeChange}>
              <ListItemIcon> <NightsStayIcon className={classes.icons}/></ListItemIcon>
              <ListItemText primary={"Dark Theme"} />
            </ListItem>
            <ListItem button onClick={themeChange} style={{display:"none"}}>
              <ListItemIcon> <MoodIcon className={classes.icons}/></ListItemIcon>
              <ListItemText primary={"Go Crazy"} />
            </ListItem>
           
   
        
            <ListItem button>
           <ListItemIcon> <MailIcon className={classes.icons}/></ListItemIcon>
           <a href="mailto:arvind.007as@gmail.com" target="_blank" className={classes.links}rel="noreferrer">
              <ListItemText primary={"Email"}/>
              </a>
            </ListItem>
            <ListItem button>
              
              <ListItemIcon> <LinkedInIcon className={classes.icons}/></ListItemIcon>
              <a href="https://www.linkedin.com/in/arvind-k-0402ab150/" target="_blank" className={classes.links}rel="noreferrer"> 
              <ListItemText primary={"Linked In"} />
              </a>
            </ListItem>
            <ListItem button>
              <ListItemIcon> <GitHubIcon className={classes.icons}/></ListItemIcon>
              <a href="https://github.com/Akshark1075"target="_blank"className={classes.links}rel="noreferrer" >
              <ListItemText primary={"Github"} />
              </a>
            </ListItem>
        </List>
      </Drawer>
 
  );
})
