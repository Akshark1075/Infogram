import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { makeStyles } from '@material-ui/core/styles';

import { withThemeContext } from './ThemeProvider';
import { Divider } from '@material-ui/core';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import MoodIcon from '@material-ui/icons/Mood';

const useStyles = makeStyles((theme) => ({
icon:{
  marginRight:"10px"
},

  root:(props)=>{
    
    return{
    display:"flex",
    flexDirection: "column",
    justifyContent: "flex-end !important",
   width:"100%"
  }},
  links:(props)=>{ return{   color:props.theme.themeProperties.color, width:"100%"}},
  customPaper:(props)=>{
    const bgColor=props.theme.themeProperties.foregroundColor;
    const textColor="#f50057";
    return{
    margin:"0px",
    backgroundColor:bgColor,
    color:textColor,
    width:"100%"
  }}

  
}))


function ResponsiveDialog(props) {
  const {openThemeChangePopup,  showThemeChangePopup, changeTheme}=props.theme

  
  const classes=useStyles(props)
  
  const handleClose = (evt) => {
    if(evt.target.innerText){
    const txt=evt.target.innerText.toLowerCase()
    if(txt==="light theme"|| txt==="dark theme" || txt==="go crazy")
    changeTheme(evt.target.innerText.toLowerCase())
    showThemeChangePopup()
  }};

  return (
 
       <Dialog
      
        open={openThemeChangePopup}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
       id="changeThemeDialog"
      fullWidth
      maxWidth="xl"
      style={{textAlign:"center"}}
      classes={{scrollPaper:classes.root, paper:classes.customPaper}}
      >
        <DialogTitle id="responsive-dialog-title">{"Change Theme"}</DialogTitle>
        <Divider style={{width:"100%",backgroundColor:"#f50057"}}/>
        <DialogContent style={{display:"flex", flexDirection:"column", justifyContent:"center",alignItems:"center", width:"100%"}}>
     
          <DialogActions style={{color:props.theme.theme==="light theme"?"":props.theme.themeProperties.color, width:"100%",display:"flex",justifyContent:"center"}}>
       
          
               <DialogContentText className={classes.links}>

               <Button autoFocus onClick={handleClose} color="secondary"  className={classes.links} style={{width:"100%"}} >
           <WbSunnyIcon className={classes.icon}/> Light Theme
           </Button>
           </DialogContentText > 
      
          </DialogActions>
          <Divider style={{width:"100%",backgroundColor:"#f50057"}}/>
          
          <DialogActions style={{color:props.theme.theme==="light theme"?"":props.theme.themeProperties.color, width:"100%",display:"flex",justifyContent:"center"}}>
         
          
          <DialogContentText className={classes.links}>
          <Button onClick={handleClose} color="secondary"  className={classes.links} style={{width:"100%"}}>
           <NightsStayIcon className={classes.icon}/>  Dark Theme
           </Button>
          </DialogContentText>
        
          </DialogActions>
          <Divider style={{width:"100%",backgroundColor:"#f50057",display:"none"}} />
     
          <DialogActions style={{color:props.theme.theme==="light theme"?"":props.theme.themeProperties.color, width:"100%",display:"flex",justifyContent:"center", display:"none"}}>
          
           
          <DialogContentText className={classes.links}>
          <Button onClick={handleClose} color="secondary"  className={classes.links} style={{width:"100%"}} >
           <MoodIcon className={classes.icon}/>Go Crazy
           </Button>
           </DialogContentText>
       
    
         </DialogActions>
       
          </DialogContent>
        
      </Dialog>
    
  );
}
export default withThemeContext(ResponsiveDialog)