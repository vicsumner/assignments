import React, { Component} from 'react'

//1. create a class Component
//2. Use componentDidMount and componentWillUnmount to add a window keydown event listener
//3. Use styling changes on key events by setting state depending on the key pressed
      //hint: use the 'event.which' number
      
class App extends Component{
      constructor(){
          super()
          this.state ={
            bgColor: "blue",
            fontSize: 20
          }  
          
      }
      componentDidMount(){
        window.addEventListener("keydown", (e) => {
          //console.log (e)
          if(e.which === 71){
              this.setState({

              })
          }
        }
      }
}