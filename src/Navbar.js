import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withThemeContext } from './ThemeProvider';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DrawerRight from './Drawer';
const useStyles = makeStyles((theme) => ({
   root: {
    flexGrow: 1,
  
  },
  appBar:(props)=>{return{
    
    backgroundColor:props.theme.themeProperties.foregroundColor==="white"?"transparent":props.theme.themeProperties.foregroundColor,
  
  color:props.theme.themeProperties.color}},
  toolBar:{paddingLeft:"25px",
    paddingRight:"25px"},
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    flexShrink:2
  },
}));

 function Navbar(props) {
  
  const classes = useStyles(props);
  const [drawerOpen,setDrawerOpen]=useState(false)
  function handleClick(evt){
    props.theme.showThemeChangePopup()
  }
  function toggleDrawerOpen(){
    setDrawerOpen(!drawerOpen)
  }
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
         
          <Typography variant="h6" className={classes.title}>
            Arvind K
      <IconButton aria-label="expand more"onClick={handleClick} style={{color:props.theme.theme==="light theme"?"":props.theme.themeProperties.otherColor}}>
        <ExpandMoreIcon />
      </IconButton>
          </Typography>
          <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawerOpen}>
            <MenuIcon />
          </IconButton>
         
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
        </AppBar>
        <DrawerRight open={drawerOpen} toggleDrawerOpen={toggleDrawerOpen}/>
    </div>
  );
}
export default withThemeContext(Navbar)
