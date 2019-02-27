import React from 'react'

const SuperHero = (props) => {

  const styleObj ={
    backgroundImage: `url(${props.imgUrl})`
  }

  return(
    <div onClick={() => props.sayCatchPhrase(props.catchPhrase)} style={styleObj} className="superHero-div">
        <h1>{props.name}</h1>
        {/* <p>{props.catchPhrase}</p> */}
    </div>
  )
}

export default SuperHero