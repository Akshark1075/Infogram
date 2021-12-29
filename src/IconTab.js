import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import WorkIcon from '@material-ui/icons/Work';
import GitHubIcon from '@mui/icons-material/GitHub';
import SchoolIcon from '@mui/icons-material/School';
import { withThemeContext } from './ThemeProvider';
const useStyles = makeStyles({
    root:(props)=> { 
    const bgColor=props.theme.themeProperties.foregroundColor;
  const textColor=props.theme.themeProperties.color;
    return {
 
    backgroundColor:bgColor,
color:textColor,
width:"100%"
   }},
   tabColor:(props)=> { 
    const bgColor=props.theme.themeProperties.foregroundColor;
  const textColor=props.theme.theme==="light theme"?"":"white !important";
    return {
 
    backgroundColor:bgColor,
    color:textColor
   }},
   textColor:(props)=>{
     return{
       color:"white"
     }
   },
   selected:(props)=>{return{
    '&.Mui-selected':{
      color:"#f50057 !important"
    }
  }}
});

export default withThemeContext(function IconLabelTabs(props) {
  const classes = useStyles(props);
 

  return (
    <Paper square className={classes.root}>
      <Tabs
        value={props.value}
        onChange={props.handleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        classes={{root:classes.tabColor}}
        aria-label="tab bar"
         textColor={props.theme.theme==="light theme"?'secondary':'inherit'}
        // className={classes.tabColor}
      >
       
        
        <Tab icon={<GitHubIcon />} label="Projects" classes={{root:classes.tabColor, selected:classes.selected}}/>
        <Tab icon={<WorkIcon />} label="Work Experience" classes={{root:classes.tabColor, selected:classes.selected}}/>
        <Tab icon={<SchoolIcon />} label="Education" classes={{root:classes.tabColor, selected:classes.selected}}/>
      </Tabs>
    </Paper>
  );
})
