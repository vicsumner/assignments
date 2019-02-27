//Stateful and State
// Class        functional(Display)
//State
//Lifecycle Methods

//notes, because "we" in a class most if all "things" get prefaced with word "this" ex. "this.handleClick"
//anything is clickable except forms use submit


import React from "react"
import Box from './Box'

class App extends React.Component{

  constructor(){
      super()
      this.state ={// change and maintain data over a period of time
          color1: "blue",
          color2: "green",
          color3: "yellow"
      } 
}

// handleClick = () => {alert ("Hello")}


handleChangeColor =() => {
  //Generate different color
  //1 of 5 random colors
  const colors = ["green", "purple", "teal", "yellow", "red"]
  const count = 0
  
  //set state to have that new color
  const chosenColor1 = colors[Math.floor(Math.random()* colors.length)]
  const chosenColor2 = colors[Math.floor(Math.random() * colors.length)]
  const chosenColor3 = colors[Math.floor(Math.random() * colors.length)]
  
  this.setState(prevState => {
    return {
        color1: chosenColor1,
        color2: chosenColor2,
        color3: chosenColor3,
        count:prevState.count +1
  }
})
}

render(){
  return(
    <div>
      < Box  color={this.state.color1}  handleChangeColor={this.handleChangeColor} count ="0" />
       < Box color={this.state.color2} handleChangeColor={this.handleChangeColor} count ="0" /> 
      < Box color={this.state.color3} handleChangeColor={this.handleChangeColor} count ="0" /> 
    </div>
  )
  }
}

export default App