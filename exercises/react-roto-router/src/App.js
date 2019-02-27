import React from 'react'

import Header from './Header'
import Home from './Home'
import About from './About'
import Services from './Services'
import Footer from './Footer'

import { Switch, Route } from 'react-router-dom'

const App = () => {

  return(
    <div>
      <Header />
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/services' component={Services} />
      < Footer/>
    </div>
  )
}

export default App;