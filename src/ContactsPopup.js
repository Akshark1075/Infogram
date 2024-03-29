import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withThemeContext } from './ThemeProvider';
import { Divider } from '@material-ui/core';
import { makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root:{
    display:"flex",
    flexDirection: "column",
    justifyContent: "flex-end !important",
   
  },
  links:(props)=>{ return{   color:props.theme.themeProperties.color}},
  customPaper:(props)=>{
    const bgColor=props.theme.themeProperties.foregroundColor;
    const textColor="#f50057";
    return{
    margin:"0px",
    backgroundColor:bgColor,
    color:textColor,
  }}

  }))
function ContactsPopup(props) {

  
  const {isOpen}=props
  const classes = useStyles(props);
  const handleClose = (evt) => {
 props.togglePopup()

  };

  return (

       <Dialog
        fullWidth
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        style={{textAlign:"center"}}
        maxWidth="xl"
       classes={{scrollPaper:classes.root, paper:classes.customPaper}}
      
      >
        <DialogTitle id="responsive-dialog-title">{"Contact"}</DialogTitle>
        <Divider style={{backgroundColor:"#f50057"}}/>
        <DialogContent style={{display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
     
          <DialogActions style={{color:props.theme.theme==="light theme"?"":props.theme.themeProperties.color}}>
          <DialogContentText style={{color:props.theme.themeProperties.otherColor}}>
            Linked in:

          <a  onClick={handleClose} color="primary" className={classes.links} href="https://www.linkedin.com/in/arvind-k-0402ab150/"style={{display:"block", width:"100%"}}target="_blank" rel="noreferrer">
          https://www.linkedin.com/in/arvind-k-0402ab150/
          </a>
          </DialogContentText>
         </DialogActions>
          <Divider style={{width:"100%", backgroundColor:"#f50057"}}/>

          <DialogActions>
          <DialogContentText style={{color:props.theme.themeProperties.otherColor,width:"100%"}}>
          Email:
          <a onClick={handleClose} color="primary" className={classes.links} href="mailto:arvind.007as@gmail.com"style={{display:"block", width:"100%"}}>
           arvind.007as@gmail.com
          </a>
          </DialogContentText>
          </DialogActions>
          <Divider style={{width:"100%",backgroundColor:"#f50057"}}/>
          <DialogActions style={{width:"100%"}}>
          
          <DialogContentText style={{color:props.theme.themeProperties.otherColor, width:"100%"}}>
          Mobile:
          <Button onClick={()=>{navigator.clipboard.writeText("+919952922719"); handleClose()}} color="primary" className={classes.links}  style={{display:"block", width:"100%"}}>
            +91 9952922719
          </Button>
          </DialogContentText>
         </DialogActions>
       
          </DialogContent>
        
      </Dialog>
     
  );
}
export default withThemeContext(ContactsPopup)