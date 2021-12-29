import React from 'react';
import {useState,useEffect} from 'react'

import { makeStyles } from '@material-ui/core/styles';

import { Avatar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'
import getExp from './getExp';
import { withThemeContext } from './ThemeProvider';
const useStyles = makeStyles((theme) => ({
    root:{width:"100%"},
    avatarDiv:{
        display:"flex",
        flexDirection:"column",
  
        flex:1,
        justifyContent:"center"
},
    highlightsContainer:{
        display:"flex",
         width:"100%",
        flex:2,
        alignItems:"center",
        justifyContent:"space-around"
},
    highlights:{ display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center"
},

githubLinkSm:(size)=>{
return size<700? {width:"60%",justifyContent:"flexStart"}:{display:"flex",width:"30%",justifyContent:"center"}
}
,
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
   size: (size)=>{
      return size>650?{
      width: theme.spacing(18),
      height: theme.spacing(18)}:size>400?{
        width: theme.spacing(13),
        height: theme.spacing(13),
      }:{
        width: theme.spacing(10),
        height: theme.spacing(10),
      }
    
    },
    smallBoldFont:(size)=>{
   
    return size<400?{
      fontSize:"1rem",
      
    }:size<550?{
      fontSize:"1.15rem",
    
    }:""
    },
    smallFont:(size)=>{
      return size<550?{
        fontSize:"1rem",
      }:""
      }
  }))
  
export default withThemeContext(function IconLabelTabs(props) {
   
    const [windowDimensions, setWindowDimensions] = useState(window.innerWidth);
    const classes = useStyles(windowDimensions);
useEffect(() => {
  function handleResize() {
    setWindowDimensions(window.innerWidth);
  }

  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);

  return (
    <div className={classes.avatarDiv}>
  <div style={{"display":"flex"}}>
    
   <div style={{"display":"flex","width":"30%","justifyContent":"center"}} >
    <Avatar alt="Profile picture" src="https://lh3.googleusercontent.com/WjuWQMo6SNGKBPBqtJX1y7ksgsCg5ehvJDibydWzOGN-2Xto6_Mm-9Ai_0DFo-GF9Sh7XDq78O5P0LKZkyXZHDzrW1KKupHFzmYW3VEbn3PJ7X-JK05g1TCqflN5Ed2_Ebrkqs7Qrw=w2400" className={classes.size}/>
   
    </div>
    <div className={classes.highlightsContainer}>
    <div className={classes.highlights}>
    <Typography variant="h5"className={classes.smallBoldFont} style={{color:props.theme.theme==="light theme"?"":props.theme.themeProperties.otherColor}}>
            11
        </Typography>
        <Typography variant="h6" className={classes.smallFont}>
             Projects
        </Typography>
    </div>
    <div className={classes.highlights} style={{"display":"flex","width":"70%"}}>
    <Typography variant="h5" className={classes.smallBoldFont}style={{color:props.theme.theme==="light theme"?"":props.theme.themeProperties.otherColor}}>
            {getExp()}
        </Typography>
      <Typography variant="h6" className={classes.smallFont}>
        Work Exp
      </Typography>
      
      </div>
      <div className={classes.highlights}>
      <Typography variant="h5" className={classes.smallBoldFont} style={{color:props.theme.theme==="light theme"?"":props.theme.themeProperties.otherColor}} >
            6.94
        </Typography>
      <Typography variant="h6" className={classes.smallFont}> 
      CGPA
      </Typography>
  
      </div>
    </div>
    </div>
    <div style={{"display":"flex","margin":"20px"}}>
    <p style={{}} className={classes.githubLinkSm}>
      <Link to="https://github.com/Akshark1075"> 
      https://github.com/Akshark1075
      </Link>
      </p>
    <div></div>
    </div>
    </div>
  );
})
