import React, {Component} from 'react'
import axios from 'axios'
import TodoList from './components/TodoList'


class App extends Component{
    constructor(){
      super()
      this.state = {
          todos: []
      }
    }

    componentDidMount (){
      axios.get("https://api.vschool.io/vicsumner/todo/").then(response =>{
      //resolve
      this.setState({
        todos:response.data
      })
        //console.log(response)

      }) //reject
      .catch(error => console.log(error))
    }
   
   

    render(){
      console.log(this.state)
      return(

        <div>
            <TodoList todos={this.state.todos}/>
        </div>
      )

    }
}


export default App