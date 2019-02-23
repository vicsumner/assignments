import React from 'react'
import Pet from './Pet'

const Friend = props => {
    //props.name props.age props.pets
    const mappedPets = props.pets.map((pet, i) => 
                                              <Pet 
                                              name={pet.name} 
                                              breed={pet.breed}
                                              key={i}
                                              />)
  return(
    <div style={{border:'1px solid blue', margin: 5, padding: 10}}>
        <h1>Name: {props.name}</h1>
        <h3>Age: {props.age}</h3>
        <h3>These are my Pets:</h3>
        <div>
          {mappedPets}
        </div>
    </div>
  )
}

export default Friend;