import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import projectList from "./projectData";
import Navbar from "./Navbar";
import AvatarTab from "./AvatarTab";
import ContactsPopup from "./ContactsPopup";
import Story from "./Story";
import BottomNav from "./BottomNav";
import Contact from "./Contact";
import AchievementContent from "./AchievementContent";
import ChangeThemePopup from "./ChangeThemePopup";
import HomeContent from "./HomeContent";
import { Switch, Route, Link} from "react-router-dom";
import ShowPage from "./ShowPage";
import { withThemeContext } from "./ThemeProvider";
import Skills from "./Skills";
import { CSSTransition, TransitionGroup } from "react-transition-group";
const useStyles = makeStyles((theme) => ({
  App: (props) => {
    const bgColor = props.theme.themeProperties.backgroundColor;
    const textColor = props.theme.themeProperties.color;

    return {
      fontFamily: "Roboto, sans-serif",
      backgroundColor: bgColor,
      color: textColor,
    };
  },
  contentDiv: {
    padding: "25px",
    marginBottom: "58px",
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },

  "& html,body": (props) => {
    return { backgroud: props.theme.themeProperties.backgroundColor };
  },
}));
function App(props) {
  const classes = useStyles(props);
  const [isContactPopupOpen, setContactsPopupOpen] = React.useState(false);
  const [currentSelection, setCurrentSelection] = React.useState(0);
  //  const bottomNavOptions=new Map([['home',0],['achievements',1],['skills',2],['askjarvis',3]])
  const bottomNavOptions = new Map([
    ["home", 0],
    ["achievements", 1],
    ["skills", 2],
  ]);
  const tabs = [<HomeContent />, <AchievementContent />, <Skills />];
  function togglePopup() {
    setContactsPopupOpen(!isContactPopupOpen);
  }
  function changeCurrentSelection(value) {
    setCurrentSelection(bottomNavOptions.get(value));
  }

  return (
    <div
      className={classes.App}
      style={{ backgroundColor: props.theme.themeProperties.backgroundColor }}
    >
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} timeout={500} classNames="page">
              <Switch location={location}>
                <Route
                  exact
                  path="/"
                  render={(routeProps) => (
                    <>
                      <Navbar />

                      <div className={classes.contentDiv}>
                        <AvatarTab />
                        <Contact togglePopup={togglePopup} />
                        <Story />
                        {tabs[currentSelection]}
                      </div>

                      <BottomNav
                        changeCurrentSelection={changeCurrentSelection}
                      />
                      <ContactsPopup
                        togglePopup={togglePopup}
                        isOpen={isContactPopupOpen}
                      />
                      <ChangeThemePopup />
                    </>
                  )}
                />
                <Route exact
                  path="/projects/:projectName"
                  render={(routeProps) => (
                    <ShowPage projectList={projectList} />
                  )}
                />
                <Route path="*" render={()=><div style={{width:"100%",height:"100vh", display:"flex", flexDirection:'column', justifyContent:"center",alignItems:"center"}}><h1 style={{fontSize:"30px"}}>Page not found</h1>
                <p>Please click <Link to='/' style={{color:'blue'}}>Home</Link> to go back to homepage</p>
                </div>}/>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </div>
  );
}
App.defaultProps = {
  theme: "light theme",
  themeProperties: {
    color: "#20232a",
    backgroundColor: "#fafafa",
    foregroundColor: "white",
    otherColor: "black",
  },
};
export default withThemeContext(App);
