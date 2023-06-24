import React from "react";
import SkillsSlider from "./SkillsSlider";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@mui/material/Card";
import skillData from "./skillData";
import Typography from "@material-ui/core/Typography";
import { withThemeContext } from "./ThemeProvider";
const useStyles = makeStyles((theme) => ({
  root: (props) => {
    const bgColor = props.theme.themeProperties.backgroundColor;
    const textColor = props.theme.themeProperties.color;
    return {
      display: "grid",
      gridTemplateColumns: "auto auto",
      gridGap: "25px 25px",
      gridAutoFlow: "row dense",
      backgroundColor: bgColor,
      color: textColor,
      "@media (max-width:720px)": {
        display: "grid",
        gridTemplateColumns: "auto",
      },
    };
  },
  coloredFont: (props) => {
    const bgColor = props.theme.themeProperties.foregroundColor;

    return {
      backgroundColor: bgColor,
    };
  },

  skillGrid: {
    display: "grid",
    gridTemplateColumns: "auto auto",
  },
  tabColor: (props) => {
    const bgColor = props.theme.themeProperties.foregroundColor;
    const textColor = props.theme.theme === "dark theme" ? "#f50057" : "";
    return {
      backgroundColor: bgColor,
      color: textColor,
    };
  },
}));
function Skills(props) {
  const classes = useStyles(props);

  return (
    <Card
      classes={{ root: classes.root }}
      style={{ backgroundColor: props.theme.themeProperties.backgroundColor }}
    >
      {skillData.map((data) => (
        <Card
          classes={{ root: classes.tabColor }}
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            justifyContent: "stretch",
            height: "fit-content",
            backgroundColor: props.theme.themeProperties.foregroundColor,
          }}
          className={classes.coloredFont}
        >
          <Typography
            gutterBottom
            variant="h5"
            style={{
              paddingTop: "10px",
              PaddingBottom: "10px",
              color: "#f50057",
            }}
          >
            {data.category}
          </Typography>
          <Card
            className={`${classes.skillGrid} ${classes.tabColor}`}
            style={{
              width: "100%",
              backgroundColor: props.theme.themeProperties.foregroundColor,
            }}
          >
            {data.skills.map((skill) => (
              <SkillsSlider name={skill.name} value={skill.value} />
            ))}
          </Card>
        </Card>
      ))}
    </Card>
  );
}
export default withThemeContext(Skills);
