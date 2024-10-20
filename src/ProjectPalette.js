import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { withThemeContext } from "./ThemeProvider";
const useStyles = makeStyles((theme) => ({
  root: (props) => {
    return {
      backgroundColor: props.theme.themeProperties.foregroundColor,
      color: props.theme.themeProperties.color,
    };
  },
  link: {
    textDecoration: "none",
  },
}));
function ProjectPalette(props) {
  const { paletteData } = props;
  const classes = useStyles(props);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Link to={`/projects/${paletteData.projectName}`}>
          <CardMedia
            component="img"
            alt={paletteData.projectName}
            height="250"
            image={paletteData.projectThumbnail}
            title={paletteData.projectName}
          />

          <CardContent>
            <Typography gutterBottom variant="h5">
              {paletteData.projectName}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              style={{
                color:
                  props.theme.theme === "light theme"
                    ? "rgba(0, 0, 0, 0.54)"
                    : props.theme.themeProperties.otherColor,
              }}
            >
              {paletteData.shortDescription}
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              component="p"
              style={{
                color:
                  props.theme.theme === "light theme"
                    ? "rgba(0, 0, 0, 0.54)"
                    : props.theme.themeProperties.otherColor,
                marginTop: "10px",
              }}
            >
              {`Responsive: ${paletteData.responsive}`}
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              component="p"
              style={{
                color:
                  props.theme.theme === "light theme"
                    ? "rgba(0, 0, 0, 0.54)"
                    : props.theme.themeProperties.otherColor,
              }}
            >
              {`Best viewed in: ${paletteData.compatibleDevices}`}
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
      <CardActions>
        <a
          href={paletteData.url}
          className={classes.link}
          target="_blank"
          rel="noreferrer"
        >
          View
        </a>
      </CardActions>
    </Card>
  );
}
export default withThemeContext(ProjectPalette);
