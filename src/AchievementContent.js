import React from 'react'
import Card from '@mui/material/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles} from '@material-ui/core/styles';

import { withThemeContext } from './ThemeProvider';
import achievementData from './achievementsData'
import { Divider } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    row:{
        display:"flex",
        alignItems:"center"
    },
    column:{
        display:"flex",
        flexDirection:"column",
        marginLeft:"15px"
    },
  logo:{
      height:"100px",
      position:"relative",
     

  },
  colors:(props)=>{return{
    
    backgroundColor:props.theme.themeProperties.foregroundColor, 
  
  color:props.theme.themeProperties.color}
  },
}))
function AchievementContent(props){
  const classes = useStyles(props);
return(
<Card classes={{root:classes.colors, paper:classes.colors}} >
  {achievementData.map((data,i)=><>
          <CardActionArea className={classes.colors} key={i}>
           <CardContent className={classes.colors}>
            <div className={classes.row}>
           <img src={data.logo} width="100px" alt="logo"   className={classes.logo}/>
           <div className={classes.column}>
            <Typography gutterBottom variant="subtitle1" style={{color:props.theme.themeProperties.otherColor}}>
           
              {data.title}
              </Typography>
              <Typography gutterBottom variant="subtitle1" >
           
              {data.description}
              </Typography>
              
              </div>
              </div>
          </CardContent>
          </CardActionArea>
            <Divider variant="middle" style={{backgroundColor:"#f50057"}} />
            </>
          )}
        </Card>
)
}
export default withThemeContext(AchievementContent)