import React from 'react'
import CardsList from './CardsList.js'



const App = () =>{
let vacationSpots =[

  {
    place: "Meridian, Idaho",
    price: 40,
    timeToGo: "Spring"
  }, {
    place:"Cancun",
    price: 900,
    timeToGo: "Winter"
  },{
    place: "China",
    price: 1200,
    timeToGo: "Fall"
  },{
    place:"Russia",
    price: 1100,
    timeToGo: "Summer"
  },{
    place:"Lebanon",
    price: 400,
    timeToGo: "Spring"
  }

]
  return(
    <div className="cardList">
      {/* style={{border:'1px solid green', margin: 5, padding: 5}} */}
      <CardsList vacationSpots={vacationSpots}/>
    </div>
  )

}

export default App;