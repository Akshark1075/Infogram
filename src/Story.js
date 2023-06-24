import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import achievements from "./achievementsData";
import StoryDialog from "./StoryDialog";

import "./customScrollBar.css";
const styles = (theme) => ({
  root: {
    width: "100%",
  },
});
class Story extends Component {
  constructor(props) {
    super(props);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      isOpen: false,
      openAchievement: null,
    };
    this.achievements = achievements;
  }

  handleClickOpen = (idx) => {
    this.setState((preState) => ({ isOpen: true, openAchievement: idx }));
  };
  handleClose = () => {
    this.setState((preState) => ({ isOpen: false, openAchievement: null }));
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div
          style={{
            width: "100%",
            paddingLeft: "0px",
            paddingRight: "0px",
            paddingTop: "2rem",
            paddingBottom: "2rem",
          }}
        >
          <ul
            id="carouselExampleControls"
            className="flex space-x-6 carousel slide"
            data-bs-ride="carousel"
            style={{ width: "100%", overflowX: "auto", touchAction: "pan-x" }}
          >
            {achievements.map((a, i) => (
              <li
                className="flex flex-col items-center space-y-1"
                key={i}
                style={{
                  maxWidth: "6rem",
                  maxHeight: "6rem",
                  minWidth: "5rem",
                  minHeight: "5rem",
                }}
              >
                <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-1 rounded-full">
                  <button className="block bg-white p-1 rounded-full transform transition hover:-rotate-6">
                    <img
                      className="rounded-full"
                      src={a.logo}
                      alt="logo"
                      onClick={() => this.handleClickOpen(i)}
                      id={i}
                      key={i}
                      style={{ height: "100%", width: "100%" }}
                    />
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <StoryDialog
            handleClose={this.handleClose}
            isOpen={this.state.isOpen}
            achievements={this.achievements}
            currentAchievement={this.state.openAchievement}
            style={{ margin: "0 auto" }}
          />
        </div>
      </div>
    );
  }
}
export default withStyles(styles, { withTheme: true })(Story);
