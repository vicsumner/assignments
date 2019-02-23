import React from 'react'
import Card from './Card'

const CardsList = props => {

  const mappedvacationSpots = props.vacationSpots.map((spot, i) => 
  <Card 
              place={spot.place} 
              price = {spot.price} 
              timeToGo = {spot.timeToGo}
              key = {i}/>)

return (
  <div>
      {mappedvacationSpots}
  </div>
)

}



export default CardsList;