import React, {Component} from 'react'


//form component
    //7 inputs, <
// nameBadgelist
// NameBadge

class App extends Component {
  constructor(){
    super()
    this.state ={
      fnameInput:'',
      lnameInput: '',
      emailInput: '',
      numInput: '',
      dateInput: '',
      favFoodInput: '',
      messageInput: ''
     
      //names:[]
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })

    
  }

  handleSubmit = (e) =>{
    e.preventDefault()

    const newBadge ={
      nameInput:'',
        fnameInput: '',
        lnameInput: '',
        emailInput: '',
        numInput: '',
        dateInput: '',
        messageInput: ''

    }

    this.setState(prevState => {
      return {
          badge:[...prevState.badge, newBadge],
        nameInput: '',
        fnameInput: '',
        lnameInput: '',
        emailInput: '',
        numInput: '',
        dateInput: '',
        messageInput: ''
          
        //names: [...prevState.names, this.state.nameInput]
      }
    })
  }
  
  render(){

    //const mappedNames = this.state.names.map((name, i) => <h1 key={1}></h1>)

    return (
      <div>
        {/* <p>{this.state.nameInput}</p> */}
        <form className="form" onSubmit ={this.handleSubmit}>
          
          <div className="top-container">
                <input className="fName left"
                    type="text"
                    name="fnameInput"
                    value={this.state.fnameInput}
                    onChange={this.handleChange}
                    placeholder="First Name"
                />

            <input className=" right"
                    type="text"
                    name="lnameInput"
                    value={this.state.lnameInput}
                    onChange={this.handleChange}
                    placeholder="Last Name"
                  />
            <input className="left"
                  type="email"
                  name="emailInput"
                  value={this.state.emailInput}
                  onChange={this.handleChange}
                  placeholder="Email"
                />

            <input className="right"
                  type="text"
                  name="dateInput"
                  value={this.state.dateInput}
                  onChange={this.handleChange}
                  placeholder="Place of Birth"
                />


            <input className="left"
                    type="text"
                    name="numInput"
                    value={this.state.numInput}
                    onChange={this.handleChange}
                    placeholder="Phone"
                  />

            <input className="right"
                  type="text"
                  name="favFoodInput"
                  value={this.state.favFoodInput}
                  onChange={this.handleChange}
                  placeholder="Favorite Food"
                />
          </div>
          
          <textarea
            type="text"
            name="messageInput"
            value={this.state.messageInput}
            onChange={this.handleChange}
            placeholder="Tell us about yourself"
          />


          <button>Submit</button>
        </form>
      </div>
    )
  }
}


export default App