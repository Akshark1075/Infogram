import React from 'react'
import Card from '@mui/material/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { withThemeContext } from './ThemeProvider';
import workExp from './workExpData';
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
   
  color:props.theme.themeProperties.otherColor,  textAlign:'justify'}

  }
}))
function WorkExperience(props){
  const classes=useStyles(props)
  
return(
  <>
  {workExp.map(work=>
<Card className={classes.colors} key={work.companyName}>
          <CardActionArea className={classes.colors}>
           <CardContent className={classes.colors}>
            <div className={classes.row}>
           <img src={work.imgSrc} width="100px" alt={work.altText}  className={classes.workLogo}/>
           <div className={classes.column}>
            <Typography gutterBottom variant="h5" >
           
              {work.companyName}
              </Typography>
              <Typography gutterBottom variant="subtitle1" className={classes.otherColor} >
           
              {work.experience}
              </Typography>
            
              <Typography gutterBottom variant="h6" className={classes.otherColor} >
           
              {work.designation}
              </Typography>
              <Typography gutterBottom variant="subtitle1"className={classes.otherColor} >
           
              {work.type}
              </Typography>
              <Typography gutterBottom variant="subtitle1" className={classes.otherColor}>
           
            {work.period}
              </Typography>
              <Typography gutterBottom variant="body1" className={classes.otherColor}>
           {work.shortDescription}
              </Typography>
              <Typography gutterBottom variant="body1" className={classes.otherColor}>
       {work.description}              </Typography>
              </div>
              </div>
          </CardContent>
          </CardActionArea>
        </Card>
        )}
        </>
)

}
export default withThemeContext(WorkExperience)