import React from 'react'

import Body from './Body'
import NewBody from './NewBody'
import Header from './Header'
import Footer from './Footer'

import {Switch, Route} from 'react-router-dom'

const App = () => {

  return(
    <div>
      <Header />
      <Switch> 
        <Route exact path='/' component={Body} />
        <Route path='/newbody' component={NewBody} />
      </Switch>
      
      <Footer />
    </div>
  )
}





export default App