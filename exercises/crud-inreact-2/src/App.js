import React, {Component} from 'react'
import axios from 'axios'
import TodoList from './components/TodoList'
import AddTodoForm from './components/AddTodoForm'



//create- GET() - Map out todos
    // TodoList- list out Todos
    // Todo - singular Todo that is mapped out in TodoList component

    //App - 
        //componentDidMount
        //add place for todos in state
        //componentWillUnmount
            //window.eventListeners
            //setInterval, setTimeout


// read-POST (Adding)-
    //Components
        //<Add Todoform />
        //state properties for inputs values
        // handleChange and handle Submit

//Deleting-
//PUT - Updating-



class App extends Component{
    constructor(){
      super()
      this.state = {
          todos: [],
          title: '',
          description:'',
          price: '',
          imgUrl:''
      }
    }

    componentDidMount (){
      this.getTodos()
    
    }
     getTodos = () =>{
      axios.get("https://api.vschool.io/vicsumner/todo/").then(response =>{
      //resolve
      this.setState({
        todos:response.data
      })
        //console.log(response)

      }) //reject
      .catch(error => console.log(error))
   }

   handleChange = e =>{
      const {name, value} = e.target
      this.setState({
        [name]: value
      })
   }

   handleSubmit = e => {
      e.preventDefault()
      const {title, description, price, imgUrl} = this.state
      //POST request
          //Creat OBJ
          const newTodo = {title, description, price, imgUrl}

     axios.post("https://api.vschool.io/vicsumner/todo/", newTodo).then(response =>{
          //update state
          this.setState(prevState => {
            return{
              todos:[response.data, ...prevState.todos],
              title:'',
              description:'',
              price:'',
              imgUrl:''
            }
          })
          //todos: maintain old todos, and add in new to from DB
          //input Values: Reset back to empty strings
     
     })
     .catch(error => console.log(error))
   }

    render(){
      console.log(this.state)
      return(

        <div>
            <AddTodoForm 
                handleChange={this.handleChange} 
                handleSubmit={this.handleSubmit}
                title={this.state.title}
                description={this.state.description}
                price={this.state.price}
                imgUrl={this.state.imgUrl}
             />
            <TodoList todos={this.state.todos}/>
        </div>
      )

    }
}


export default App