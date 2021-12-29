import React,{Component, createContext} from 'react'
import themes from"./themes.js"
export const ThemeContext = createContext('light theme');
export default class ThemeProvider extends Component{
   constructor(props){
      super(props)
    this.state={
      theme:"light theme",
      openThemeChangePopup:false
         
    
    }
    this.changeTheme=this.changeTheme.bind(this)
    this.showThemeChangePopup=this.showThemeChangePopup.bind(this)
  }
  
changeTheme(value){
 
  this.setState({theme:value})
  }
  showThemeChangePopup(){
    this.setState((state) => {
      return {openThemeChangePopup: !state.openThemeChangePopup};
    })
  }
  componentDidMount(){
    this.setState({theme:window.localStorage.getItem('theme')||"light theme"})
  }
  componentDidUpdate(prevProps, prevState) {
    // Typical usage (don't forget to compare props):
    if (this.state.theme !== prevState.theme) {
      window.localStorage.setItem("theme",this.state.theme)
    }
  }
  
render(){
  
    
    return(<ThemeContext.Provider value={{theme:this.state.theme,changeTheme:this.changeTheme,openThemeChangePopup:this.state.openThemeChangePopup, showThemeChangePopup:this.showThemeChangePopup,themeProperties:themes[this.state.theme]}}>
    {this.props.children}
  </ThemeContext.Provider>)
}
}

export const withThemeContext=(MyComponent)=>(props)=>{
  return (<ThemeContext.Consumer>
  {value =><MyComponent theme={value} {...props}/> }
</ThemeContext.Consumer>
  )

}

