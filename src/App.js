import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import projectList from './projectData'
import Navbar from './Navbar'
import AvatarTab from './AvatarTab'
import ContactsPopup from './ContactsPopup';
import Story from './Story';
import BottomNav from "./BottomNav"
import Contact from './Contact';
import AchievementContent from './AchievementContent';
import ChangeThemePopup from './ChangeThemePopup';
import HomeContent from "./HomeContent"
import {Switch, Route,Redirect} from 'react-router-dom'
import ShowPage from './ShowPage'
import Splashscreen from './Splashscreen'
import { withThemeContext } from './ThemeProvider';
import Skills from './Skills'
const useStyles = makeStyles((theme) => ({
  App:(props)=>
 
    { 
    
      const bgColor=props.theme.themeProperties.backgroundColor;
      const textColor=props.theme.themeProperties.color;
      
      return{
    fontFamily: "Roboto, sans-serif",
    backgroundColor:bgColor,
    color:textColor
      }
  },
  contentDiv:{
  padding:"25px",
  marginBottom:"58px"
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
 
"& html,body":(props)=>{
  return {backgroud:props.theme.themeProperties.backgroundColor}
}

}))
function App(props) {

  const classes = useStyles(props);
  const [isContactPopupOpen, setContactsPopupOpen]= React.useState(false)
  const [currentSelection, setCurrentSelection]= React.useState(0)
//  const bottomNavOptions=new Map([['home',0],['achievements',1],['skills',2],['askjarvis',3]])
const bottomNavOptions=new Map([['home',0],['achievements',1],['skills',2]])
 const tabs=[<HomeContent/>, <AchievementContent/>, <Skills/>]
    function togglePopup(){
      setContactsPopupOpen(!isContactPopupOpen)
    }
    function changeCurrentSelection(value){
     
      setCurrentSelection(bottomNavOptions.get(value))
    }
    
  return (
    <div className={classes.App}style={{backgroundColor:props.theme.themeProperties.backgroundColor}}>
    <Switch>
     
  
     <Route exact path="/">  <Redirect to="/home"/> </Route>
    <Route exact path="/home" render={routeProps=>

        <>
           <Navbar/>
          
                  <div className={classes.contentDiv}>
            <AvatarTab/>
            <Contact togglePopup={togglePopup}/>
            <Story/>
            {tabs[currentSelection]}
            </div>
            
            <BottomNav changeCurrentSelection={changeCurrentSelection}/>
            <ContactsPopup togglePopup={togglePopup}  isOpen={isContactPopupOpen}/>
            <ChangeThemePopup/>
           </>}
/>
      <Route  path="/projects/:projectName" render={routeProps=><ShowPage projectList={projectList}/>}/>
   
 
       
         
         </Switch>

         

         </div>
  );
}
App.defaultProps={
  theme:"light theme",
  themeProperties:{
  color:"#20232a",
backgroundColor:"#fafafa",
foregroundColor:"white",
otherColor:"black"}}
export default withThemeContext(App)