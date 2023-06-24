import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useParams, useHistory } from 'react-router-dom';

import {withThemeContext} from "./ThemeProvider"
import { makeStyles} from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root:(props)=> {
    return{
      backgroundColor:props.theme.themeProperties.foregroundColor,
      color:props.theme.themeProperties.color,
    }
  
    },
    otherColor:(props)=> {
      return{
        
        color:props.theme.themeProperties.otherColor,
      }
    
      },
  back:{
    "&:hover":{
      cursor:"pointer"
    }
  }
}))
 function ShowPage(props) {
  const {projectName}=useParams();
  const history =useHistory()
  const {projectList}=props
  const classes = useStyles(props);
  const currentProject=projectList.find(x=>x.projectName===projectName)
  const currentIndex=projectList.indexOf(currentProject)
  function next(){history.push( `/projects/${projectList[currentIndex+1].projectName}`)}
const previous=()=>history.push( `/projects/${projectList[currentIndex-1].projectName}`)
const goHome=()=>history.push('/')
  return (
    <Card classes={{root:classes.root, paper:classes.root}}>
          
         <div style={{display:"flex", alignItems:"center", backgroundColor:props.theme.themeProperties.foregroundColor, color:props.theme.themeProperties.color}}> 
         <KeyboardBackspaceIcon style={{margin:"10px"}} onClick={goHome} className={classes.back}/> 
          <Typography variant="h5" >
                      Projects
          </Typography>
          </div>
        
      <CardActionArea>
        <CardMedia
          component="img"
        
          image={currentProject.projectThumbnail}
          alt={currentProject.projectName}
        
        />
        <CardContent className={classes.root}>
          <Typography gutterBottom variant="h5" component="div" style={{color:"#f50057"}}>
            {currentProject.projectName}
          </Typography>
          <Typography variant="subtitle1" className={classes.otherColor}>
            {currentProject.projectDescription}
          </Typography>
          <br/>
          <Typography variant="subtitle1"  className={classes.otherColor}>
            <b> URL :</b> <a href={currentProject.url}>{currentProject.url}</a>
          </Typography>
          <Typography variant="subtitle1" className={classes.otherColor}>
            <b>Github URL:</b> <a href={currentProject.githubUrl}>{currentProject.githubUrl}</a>
          </Typography>
          <Typography variant="subtitle1"  className={classes.otherColor}>
            <b>Responsive:</b> {currentProject.responsive}
          </Typography>
          <Typography variant="subtitle1"  className={classes.otherColor}>
            <b>Best Viewed in:</b> {currentProject.compatibleDevices}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.root}>
        {currentIndex>=1 &&
        <Button size="small" color="primary" onClick={previous} style={{color:props.theme.themeProperties.color}}>
          Previous
        </Button>
}
{currentIndex<projectList.length - 1 &&
        <Button size="medium" color="primary" onClick={next} style={{color:props.theme.themeProperties.color}}>
          Next
        </Button>
}
      </CardActions>
    </Card>
  );
}
export default withThemeContext(ShowPage)