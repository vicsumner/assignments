import React, {Component} from 'react'


class App extends Component {
      constructor(){
          super()
          this.state ={
            nameInput: "",
            ageInput: "",
            names: []
          }
      }

        handleChange = (e) => {
          const {name, value} = e.target
          this.setState({
            
            [name]:value
            // [[e.target.name]]: e.target.value
            //nameInput: e.target.name
            //ageInput: e.target.value
            
          })
// console.log (e.target.value)
        }

        handleSubmit = (e) => {
          e.preventDefault()

          //alert(this.state.nameInput)
          this.setState(prevState => {
            return {
              names: [...prevState.names, this.state.nameInput],
              nameInput: '',
              ageInput: ''
            }
          })
        }
    

      render(){
        return (
          <div>
            <h1>{this.state.nameInput}</h1>
            <h1>{this.state.ageInput}</h1>
              <form onSubmit={this.handleSubmit}>
                <input 
                type="text" 
                name="nameInput" 
                value={this.state.nameInput} 
                onChange={this.handleChange}
                placeholder="Name"
                />

              <input 
              type="text" 
              name="ageInput" 
              value={this.state.ageInput} 
              onChange={this.handleChange}
              placeholder= "Age"
              />
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