import React from 'react'

const CounterControls = props =>{

  return(
    <div>
      <button onClick={props.handleIncrement}>+</button>
    </div>
  )
}

export default CounterControls