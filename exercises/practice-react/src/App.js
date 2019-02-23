import React from 'react'
import CounterControls from './CounterControls.js'
import CounterDisplay from './CounterDisplay.js'

// Class Components vs Functional Components
//Stateful                     Stateless
//Event Listeners

class App extends React.Component{
    constructor(){
      super()
      this.state = {
          counter: 0
      }
    }

    handleClick = () =>{
      this.setState(prevState =>{
        return {
          counter: prevState.counter +1
        }
      })
    }

    render(){
      return(
        <div>
          <CounterDisplay counter={this.state.counter}/>
          <CounterControls handleIncrement={this.handleIncrement}/>
          {/* <h1>{this.state.counter}</h1>
          <button onClick={this.handleClick}> + </button> */}
        </div>
      )
    }
  
}

export default App;