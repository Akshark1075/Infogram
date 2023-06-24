import * as React from "react";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

import { ThemeProvider } from "@mui/material/styles";

import { DialogContentText } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "@material-ui/core/styles";
import { withThemeContext } from "./ThemeProvider";
const useStyles = makeStyles((theme) => ({
  root: (props) => {
    const bgColor = props.theme.themeProperties.foregroundColor;
    const textColor = props.theme.themeProperties.color;

    return {
      backgroundColor: bgColor,
      color: textColor,
    };
  },
  customPaper: {
    height: "100%",
    maxHeight: "100%",
  },
}));
export default withThemeContext(function StoryDialog(props) {
  const { isOpen, handleClose, achievements, currentAchievement } = props;
  const classes = useStyles(props);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <ThemeProvider theme={theme}>
      <Dialog
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        open={isOpen}
        fullScreen={fullScreen}
        fullWidth
        maxWidth={"sm"}
        classes={{ paper: classes.customPaper }}
      >
        <DialogContent className={classes.root}>
          <div
            id="carouselExampleFade"
            className="carousel carousel-dark"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {achievements.map((a, i) => {
                return (
                  <div
                    className={`carousel-item ${
                      i === currentAchievement ? "active" : ""
                    }`}
                    data-bs-interval="5000"
                    style={{ textAlign: "center" }}
                    key={i}
                  >
                    <DialogTitle
                      id="responsive-dialog-title"
                      onClose={handleClose}
                    >
                      {a.title}
                      <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                          position: "absolute",
                          right: 8,
                          top: 8,
                          color: (theme) => theme.palette.grey[500],
                        }}
                        style={{ zIndex: "100" }}
                      >
                        <CloseIcon
                          style={{
                            color:
                              props.theme.theme === "light theme"
                                ? ""
                                : props.theme.themeProperties.otherColor,
                          }}
                        />
                      </IconButton>
                    </DialogTitle>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={a.logo}
                        className="d-block"
                        style={{ height: "400px" }}
                        alt="project"
                      />

                      <DialogContentText
                        style={{
                          width: "90%",
                          color:
                            props.theme.theme === "light theme"
                              ? ""
                              : props.theme.themeProperties.otherColor,
                          marginTop: "20px",
                        }}
                      >
                        {a.description}
                      </DialogContentText>
                    </div>

                    {/* <img src= className="d-block" alt="..."/> */}
                  </div>
                );
              })}
            </div>
            <DialogActions>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                  style={{
                    color:
                      props.theme.theme === "light theme"
                        ? ""
                        : props.theme.themeProperties.otherColor,
                  }}
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="next"
                
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                  style={{
                    color:
                      props.theme.theme === "light theme"
                        ? ""
                        : props.theme.themeProperties.otherColor
                  }}
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </DialogActions>
          </div>
        </DialogContent>
      </Dialog>
    </ThemeProvider>
  );
});
