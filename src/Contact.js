import React from "react";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles} from '@material-ui/core/styles';
import { withThemeContext } from './ThemeProvider';

const useStyles = makeStyles((theme) => ({
root:(props)=>{
   
    return{
    display:"flex",
    backgroundColor:props.theme.themeProperties.foregroundColor,
    color:props.theme.themeProperties.color
}},
btn:(props)=>{
    
    return{
flex:"9",
color:props.theme.themeProperties.color
}},
expandMore:(props)=>{ 
    
    return{
    flex:"1",
    borderRadius:"0%",
   
    color:props.theme.themeProperties.color,
    border:"1px solid rgba(0, 0, 0, 0.23)",
    "&:hover":{
        backgroundColor:props.theme.themeProperties.color,
        color:props.theme.theme==="light theme"?"white":"black"
    },
    

       }},


}))

function Contact(props){
    const classes = useStyles(props);
    

    
return(
    <>
<div className={classes.root}>
<Button variant="outlined" className={classes.btn}>Contact</Button>
<IconButton aria-label="expand more" className={classes.expandMore} onClick={props.togglePopup} >
  <ExpandMoreIcon />
</IconButton>
</div>

</>
)
}
export default withThemeContext(Contact)