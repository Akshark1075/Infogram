import React from 'react'
import Card from '@mui/material/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { withThemeContext } from './ThemeProvider';
import getExp from "./getExp"
const useStyles = makeStyles((theme) => ({
    row:{
        display:"flex",
        alignItems:"flexStart"
    },
    column:{
        display:"flex",
        flexDirection:"column",
        marginLeft:"15px"
    },
  workLogo:{
      height:"60px"
  },
  colors:(props)=>{return{
    
    backgroundColor:props.theme.themeProperties.foregroundColor,
  
  color:props.theme.themeProperties.color}
  },
  otherColor:(props)=>{return{
   
  color:props.theme.themeProperties.otherColor}
  }
}))
function WorkExperience(props){
  const classes=useStyles(props)
  
return(
<Card className={classes.colors}>
          <CardActionArea className={classes.colors}>
           <CardContent className={classes.colors}>
            <div className={classes.row}>
           <img src="/static/images/avatar/Infosys.svg" width="100px" alt="Infosys logo"  className={classes.workLogo}/>
           <div className={classes.column}>
            <Typography gutterBottom variant="h5" >
           
              Infosys
              </Typography>
              <Typography gutterBottom variant="subtitle1" className={classes.otherColor} >
           
              {getExp()}
              </Typography>
            
              <Typography gutterBottom variant="h6" className={classes.otherColor} >
           
              Technology Analyst
              </Typography>
              <Typography gutterBottom variant="subtitle1"className={classes.otherColor} >
           
              Full-time
              </Typography>
              <Typography gutterBottom variant="subtitle1" className={classes.otherColor}>
           
            Oct 2018-Present
              </Typography>
              </div>
              </div>
          </CardContent>
          </CardActionArea>
        </Card>
)
}
export default withThemeContext(WorkExperience)