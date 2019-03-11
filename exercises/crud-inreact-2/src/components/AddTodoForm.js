import React from "react"


const AddTodoForm = (props) =>{
  const {title, description, price, imgUrl, handleChange, handleSubmit} = props
  return(
    <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            name="title" 
            value={title} 
            onChange={handleChange}
            placeholder="Title"/>
        <input 
            type="text" 
            name="description" 
            value={description} 
            onChange={handleChange}
            placeholder="Description"/>
        <input 
            type="text" 
            name="price" 
            value={price} 
            onChange={handleChange}
            placeholder="Price"/>
        <input
          type="text"
          name="imgUrl"
          value={imgUrl}
          onChange={handleChange}
          placeholder="Image Url" />    
        <button>Add Todo</button>


    </form>
  )

}

export default AddTodoForm