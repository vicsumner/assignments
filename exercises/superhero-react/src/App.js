import React from 'react'
import data from './superHero.json'
import SuperHero from './SuperHero.js';

class App extends React.Component{
    constructor(){
        super()  
        // this.state ={
        // }
    } 

    sayCatchPhrase = (catchPhrase) => {
       alert(catchPhrase)
    }
   


    render(){
      //console.log(data.superHero)
      const mappedSuperHero = data.superHero.map((hero, i) => <SuperHero
                                                                    name={hero.name} 
                                                                    imgUrl={hero.imgUrl} 
                                                                    sayCatchPhrase={this.sayCatchPhrase} 
                                                                    catchPhrase={hero.catchPhrase}
                                                                    key={i}/>
      
      )
      return(
        <div>
          {mappedSuperHero}
        </div>
      )
    }

}



export default App