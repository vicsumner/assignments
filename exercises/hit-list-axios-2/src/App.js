import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {
  constructor() {
    super()
    this.state = {
      hitList: []

    }
  }
  componentDidMount() {
    axios.get("http://s3.amazonaws.com/v-school/data/hitlist.json").then(response => {
      console.log(response)
      this.setState({
        hitList: response.data
      })

    }).catch(error => console.log(error))

  }


  render() {
    console.log(this.state)

    const mappedChars = this.state.hitList.map((item) => {
      return (
        <div>
          
        <div className="items" key={item.id} style={{ backgroundImage: `url(${item.image})` }}>
          <h1>{item.name}</h1>
        </div>
        </div>
      )
    })


    return (
      <div className="container">
      <div className="header"></div>
        {mappedChars}
      </div>
    )
  }
}

export default App