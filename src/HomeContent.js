import React from 'react'
import { useSwipeable } from 'react-swipeable';
import PaletteList from './PaletteList';
import IconTab from './IconTab'
import paletteData from './projectData'
import WorkExperience from './workExperience';
import Education from './Education'
import { withThemeContext } from './ThemeProvider';
import { makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root:(props)=> { 
       const bgColor=props.theme.themeProperties.foregroundColor;
     const textColor=props.theme.themeProperties.color;
       return {
    
       backgroundColor:bgColor,
   color:textColor
      }}

   }))

   function HomeContent(props){
    const [value, setValue] = React.useState(0);
    const classes=useStyles(props);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
   
      const handlers = useSwipeable({
        onSwipedLeft: (evt) => (value-1)>=0?handleChange(evt,value+1):"",
        onSwipedRight: (evt) => (value+1)<=2?handleChange(evt,value-1):"",
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
      });
  return <div {...handlers} className={classes.root}> 
  
    <IconTab handleChange={handleChange} value={value} />
      
      {value===0 &&<PaletteList paletteList={paletteData} />}
      {value===1 &&<WorkExperience/>}
      {value===2 &&<Education/>}
      
   </div>;

  }
  export default withThemeContext(HomeContent)