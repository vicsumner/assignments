import React, {Component} from 'react'
import axios from 'axios'

class App extends Component {
  constructor(){
    super()
    this.state = {
          bounties: [],
          firstName: "",
          lastName:""
    }
  }

  componentDidMount(){
    axios.get("/bounties").then(response =>{
      //console.log(response)
        this.setState({
          bounties: response.data

        })
    })
  }

  handleChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      })
  }

  handleSubmit = e => {
    e.preventDefault()

    const newBounty = {
      firstName: this 
    }
  }

  render(){
    //console.log(this.state)
    
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
            <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange}/>
            <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange}/>
            <button>Get Bounty</button>
        </form>
          {this.state.bounties.map(bounty => <h1>{bounty.name} {bounty.lastName}</h1> )}
      </div>
    )
  }
}

export default App