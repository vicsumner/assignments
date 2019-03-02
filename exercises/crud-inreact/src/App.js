import React, {Component} from 'react'
import axios from 'axios'
import TodoList from './component/TodoList'

//GET -Map out todos
      // todolist-list out Todos
      //todo - singular Todo that is mapped out in TodoList component

// App- 
    // componentDidMount
    //add place for todos in state 
    //componenttWillUnmount
        //window.eventListeners
        // setInterval, setTimeout     

class App extends Component{

      constructor(){
        super()
        this.state={
          todos: []
        }
      }

      componentDidMount(){
        axios.get("https://api.vschool.io/vsumner/todo").then(response =>{
          //resolve
          this.setState({
            todos: response.date
          })

          console.log(response)
        }) //reject
        .catch(error => console.log(error))
      }

      render(){
        console.log(this.state)
        return(
          <div>
              <TodoList todos={this.state}/>
          </div>
        )
      }

}
export default App