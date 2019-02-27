import React from 'react'


function Card(props){
const bgStyles = {backgroundColor: " "}

  if (props.timeToGo==="Spring"){
    bgStyles.backgroundColor="blue"
  } else 
  if (props.timeToGo === "Fall"){ 
    bgStyles.backgroundColor = "green"

  } if (props.timeToGo === "Summer") {
      bgStyles.backgroundColor = "pink"

  } if (props.timeToGo === "Winter") {
    bgStyles.backgroundColor = "lightblue"
  }

  return (
<div style={bgStyles} className="card">
    <ul>
      <li>Place:{props.place}</li>
        <li>Price:{props.price}</li>
        <li>Time To Go:{props.timeToGo}</li> 
    </ul>
</div>
  )
}

export default Card