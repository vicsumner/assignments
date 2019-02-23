import React from 'react'


function Card(props){
  return (
<div>
    <ul>
      <li>place:{props.place}</li>
        <li>price:{props.price}</li>
        <li>timeToGo:{props.timeToGo}</li>
        
    </ul>
</div>
  )
}

export default Card