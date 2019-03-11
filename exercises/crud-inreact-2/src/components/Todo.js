import React from 'react'

const Todo = (props) => {
  
  const {title, description, imgUrl, price, completed} = props
  
  return(
    <div style={{backgroundImage:`url(${imgUrl})`}}>
        <h1>{title}</h1>
        <h3>{description}</h3>
        <p>Price:{price}</p>
        <input type="checkbox" defaultChecked={completed}></input>
    </div>
  )

}

export default Todo