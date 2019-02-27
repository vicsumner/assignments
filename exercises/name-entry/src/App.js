import React, {Component} from 'react'

class App extends Component{
    constructor(){
        super()
        this.state ={
          nameInput:'',
          names:[]
        }
    }

    handleChange = (e) => {
      const {name, value} = e.target
      this.setState({

        [name]: value
      })
    }

    handleSubmit = (e) => {
      e.preventDefault()


      this.setState(prevState =>{
        return {
          //names:[...prevState.names,
          //this.state.nameInput],
          nameInput: '',
          names: [...prevState.names, this.state.nameInput]
        }
      })
    }
    

    render(){

      const mappedNames = this.state.names.map((name, i) => <h1 key={i}>{name}</h1>)

      return(
        <div>
          <h1>{this.state.nameInput}</h1>
          <form onSubmit ={this.handleSubmit}>
            <textarea
            type="text" 
            name="nameInput"
            value={this.state.nameInput}
            onChange={this.handleChange}
            placeholder="Name"
            />
            <ol>
              <li></li>
            </ol>
            <button>Submit</button>
          </form>

          <div>
            {/* This is where you would map out your state names Array*/}
            {this.state.names.map(name => <h1>{name}</h1>)}
          </div>
        </div>
      )
    }
  }


export default App