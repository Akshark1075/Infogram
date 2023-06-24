import React from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import { withThemeContext } from "./ThemeProvider";
const useStyles = makeStyles((theme) => ({
  row: {
    display: "flex",
    alignItems: "flexStart",
    marginTop: "20px",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "15px",
  },
  educationLogo: {
    height: "100px",
    position: "relative",
    top: "-15px",
  },
  colors: (props) => {
    return {
      backgroundColor: props.theme.themeProperties.foregroundColor,

      color: props.theme.themeProperties.color,
    };
  },
  otherColor: (props) => {
    return {
      color: props.theme.themeProperties.otherColor,
    };
  },
}));
function Education(props) {
  const classes = useStyles(props);
  return (
    <>
      <Card className={classes.colors}>
        <CardActionArea>
          <CardContent className={classes.colors}>
            <div className={classes.row}>
              <img
                src="https://lh3.googleusercontent.com/3MBcKM4WFPAeERfy13AX5bvU7OAiYC79E4dIiY4edfsRNGXq1cmZUl-_QkSu95hyNY-SvxSs1QrOXMkQ8E_NyilrKAifvLnKTc3xLeR8WEcdouTuBj9eQ7-XWH1vwiSakJ8nRMcM1Q=w2400"
                width="100px"
                alt="logo"
                className={classes.educationLogo}
              />
              <div className={classes.column}>
                <Typography gutterBottom variant="h5">
                  Valliammai Engineering College
                </Typography>
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  className={classes.otherColor}
                >
                  Bachelor of Electrical and Electronics Engineering
                </Typography>
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  className={classes.otherColor}
                >
                  Anna University
                </Typography>

                <Typography
                  gutterBottom
                  variant="subtitle1"
                  className={classes.otherColor}
                >
                  APR 2014-APR 2018
                </Typography>
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  className={classes.otherColor}
                >
                  Full-time
                </Typography>
              </div>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={classes.colors}>
        <CardActionArea>
          <CardContent className={classes.colors}>
            <div className={classes.row}>
              <img
                src="https://lh3.googleusercontent.com/pw/AJFCJaU6q9nHtueZnFudLQr_0-N3k3NkvIcsA_sF3mmK_0svEfy-qpsFfgI7emygPtylo8zegu5P1pbJ8oGnQRfOcVRBrLWtYjBUzd8V3x1yWNHwekaiucM=w2400"
                width="100px"
                alt="logo"
                className={classes.educationLogo}
              />
              <div className={classes.column}>
                <Typography gutterBottom variant="h5">
                  University College Cork
                </Typography>
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  className={classes.otherColor}
                >
                  MSc Interactive Media
                </Typography>

                <Typography
                  gutterBottom
                  variant="subtitle1"
                  className={classes.otherColor}
                >
                  Expected Graduation on SEPT 2024
                </Typography>
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  className={classes.otherColor}
                >
                  Full-time
                </Typography>
              </div>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
export default withThemeContext(Education);
