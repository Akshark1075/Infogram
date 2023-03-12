import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import StarsIcon from '@mui/icons-material/Stars';
import { withThemeContext } from './ThemeProvider';
const useStyles = makeStyles({
  root: (props)=>{return {
    backgroundColor:props.theme.themeProperties.foregroundColor,
    
    width: "100%",justifyContent:"space-around",
    position:"fixed",
    bottom:0,marginTop:"10px"
  }},
  icon:(props)=>{return {color:props.theme.theme==="light theme"?"":props.theme.themeProperties.color}},
  selected:(props)=>{return{
    '&.Mui-selected':{
      color:"#f50057 !important"
    }
  }}

});

export default withThemeContext( function BottomNav(props) {
  const classes = useStyles(props);
  const [value, setValue] = React.useState('home');

  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.changeCurrentSelection(newValue)
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} showLabels className={classes.root}  >
      <BottomNavigationAction label="Home" value="home" icon={<HomeIcon/>} classes={{selected:classes.selected, root:classes.icon}}/>
      <BottomNavigationAction label="Achievements" value="achievements" icon={<EmojiEventsIcon/>} classes={{selected:classes.selected, root:classes.icon}}/>
      <BottomNavigationAction label="Skills" value="skills" icon={<StarsIcon />} classes={{selected:classes.selected, root:classes.icon}}/>
      {/* <BottomNavigationAction label="Ask Jarvis" value="askjarvis" icon={<SmartToyIcon />} /> */}
    </BottomNavigation>
  );
}
)