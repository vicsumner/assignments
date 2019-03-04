// Blue when the mouse hovers over the square
//Red when the mouse button is held down over the square
//Yellow when the mouse button is let go over the square
//Green when the mouse is double clicked in the square
//Orange when the mouse scroll is used somewhere in the window(not just over the square)


import React from 'react'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
          color1: "blue",
          color2: "pink"
    }
  }
handleChangeColor =() => {
  const colors = ["red", "green", "pink", "yellow", "brown", "#f07402", "grey"]
  const currentColor = colors[Math.floor(Math.random()* colors.length)]
  this.setState({
    color1: currentColor,
  })
  //console.log(currentColor)
}

  handleChangeColor2 = () => {
    const colors = ["red", "green", "pink", "yellow", "brown"]
    const currentColor2 = colors[Math.floor(Math.random() * colors.length)]
    this.setState({
      color2: currentColor2
    })
    //console.log(currentColor)
  }
  render(){

  //   const boxStyles ={
  //       width: 200,
  //       height: 200,
  //       border: '1px solid #000',
  //       display: 'flex',
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //       background: this.state.color1
  // }
    
    const box1 = {
      background: this.state.color1
    }

    const box2 = {
      background: this.state.color2
    }
    return(
      <div>
        <div style={box1} id="events" className="box">Box</div>
        <button onClick={this.handleChangeColor}>Change Color</button>

        <div style={box2} id="events" className="box">Box2</div>
        <button onClick={this.handleChangeColor2}>Change Color</button>

      </div>
    )
  }
}  



export default App