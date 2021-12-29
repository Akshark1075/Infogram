import React from 'react'
import { makeStyles} from '@material-ui/core/styles';
import ProjectPalette  from './ProjectPalette';
import {withThemeContext} from "./ThemeProvider"
const useStyles = makeStyles((theme) => ({
    projectGridContainer:(props)=>{
        return{
        display:"grid",
        gridTemplateColumns:"33% 33% 33%",
        gridGap:"5px 5px",
        marginTop:"5px", 
        
        color:props.theme.themeProperties.color,
        "@media (max-width:720px)":{
            display:"grid",
            gridTemplateColumns:"auto", 
        }
    }}
}))
function PaletteList(props){
    
    const classes = useStyles(props);
    const {paletteList}=props
    
        return (<div className={classes.projectGridContainer}>
            
                {paletteList.map(paletteData=><ProjectPalette paletteData={paletteData} key={paletteData.projectName}/>)}
        </div>)
    
}
export default withThemeContext(PaletteList)