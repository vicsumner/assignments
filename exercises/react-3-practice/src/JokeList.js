import React from 'react'


function JokeList(props) {
  // console.log(props)
  return(

    <div>
      <img src={props.imgUrl} />
      <h2>Question: {props.question}</h2>
      <h3>Punch Line: {props.punchLine}</h3>
      <h3>Comedian: {props.comedian}</h3>
    </div>
)
  
}
export default JokeList