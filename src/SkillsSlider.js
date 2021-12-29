import React from 'react'
import Slider from 'rc-slider';
import './SkillsSliders.css'

import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles} from '@material-ui/core/styles';
import { withThemeContext } from './ThemeProvider';
/* Custom handle */
const handle = (smileys, stopPoints) => {
    return props => {
      const style = {
          left: `${props.offset}%`
      };

      const smiley =
          smileys[stopPoints.findIndex(threshold => props.value < threshold)];

      return (
          <div style={style} className="smiley-handle">
              {smiley}
          </div>
      );
   }
};
const useStyles = makeStyles((theme) => ({
  root:(props)=> { 
       const bgColor=props.theme.themeProperties.foregroundColor;
     const textColor=props.theme.themeProperties.color;
       return {
   
       backgroundColor:bgColor,
   color:textColor,
       

   }},
   
}))
 function SmileySlider(props) {
    
        const sliderHandle = handle(props.smileys, props.stopPoints);
        return (
            <Slider
              min={props.minValue}
              max={props.maxValue}
              defaultValue="75"
              handle={sliderHandle}
              step={props.step || 1}
              value={props.value}
              onAfterChange={props.handleChange}
              disabled

             />
        );
    }


function SkillsSlider(props){
 
  const classes = useStyles(props);
    // Ensure last stop point is > maxValue
    // Find codepoints with codePointAt() https://medium.com/reactnative/emojis-in-javascript-f693d0eb79fb
    return (
     
       
          <CardActionArea className={classes.root}>
           <CardContent className={classes.root} >
            <Typography gutterBottom variant="h6"  >
              {props.name}
              </Typography>
             
        <SmileySlider
          smileys={[
            String.fromCodePoint(128528),
            String.fromCodePoint(128578),
            String.fromCodePoint(128515),
            String.fromCodePoint(128519),
            String.fromCodePoint(128526)
          ]}
         stopPoints={[
           20,40, 60, 80, 101,
         ]}
         minValue={1}
         maxValue={100}
         value={props.value}
          />
           </CardContent>
           </CardActionArea>
   
 
          
    );
  }

export default withThemeContext(SkillsSlider)