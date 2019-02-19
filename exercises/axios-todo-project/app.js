
const todoListContainer = document.getElementById("todolist-container")
const todoForm = document.addToForm

function getData(){
axios.get('https://api.vschool.io/vicsumner/todo/').then(response => {
  const todos = response.data
  // console.log(todos)
  listTodos(todos)

}).catch(err => console.log(err))
}

function listTodos(todosArr){
  //Make 1 todo show up, then reuse that code to make all todos show up (unused direction)
  // console.log(firstTodo)
  for(let i = 0 ; i < todosArr.length; i++){
//   //Make it show on the DOM
//   // First Create Elements
      const todoContainer = document.createElement('div')
      
      const checkbox = document.createElement('input')
      const imgUrl = document.createElement('img') 
      const deleteBtn = document.createElement('button')
      const title = document.createElement('p')
      const price = document.createElement('p')
      const description = document.createElement('p')
      
      

//2nd Edit the element / Give it content
      todoContainer.classList.add('todo-container')
      
      checkbox.checked =todosArr[i].completed
      checkbox.type = 'checkbox'
      imgUrl.setAttribute("src", todosArr[i].imgUrl) 
      todoContainer["data-todoID"] = todosArr[i]._id
      deleteBtn.textContent = "x"
      title.textContent = todosArr[i].title
      price.textContent = todosArr[i].price
      description.textContent = todosArr[i].description
      
      
      

    checkbox.addEventListener("change", function (e) {
      const ID = e.target.parentNode["data-todoID"]
      const updates = { completed: e.target.checked }

      axios.put(`https://api.vschool.io/vicsumner/todo/${ID}`, updates).then(response => { 
        todoListContainer.innerHTML = ""
        getData()
       })
    })

    // delete each todo
    deleteBtn.addEventListener("click", function(e){
      const ID = e.target.parentNode["data-todoID"]
      axios.delete(`https://api.vschool.io/vicsumner/todo/${ID}`).then(response =>{
        e.target.parentNode.remove()
      })
    })

      if (checkbox.checked) {
        title.style.textDecoration = "line-through"
        price.style.textDecoration = "line-through"
        description.style.textDecoration = "line-through"
      }
  
      
// 3rd Append it to the DOM
    
    todoContainer.appendChild(checkbox)
    todoContainer.appendChild(imgUrl)
    todoContainer.appendChild(title)
    todoContainer.appendChild(price)
    todoContainer.appendChild(description) 
    todoContainer.appendChild(deleteBtn)
    todoListContainer.appendChild(todoContainer)

  }
} 

    
//submit event for form
todoForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const newTodo = {
    title: todoForm.title.value,
    price: todoForm.price.value,
    description: todoForm.description.value,
    imgUrl: todoForm.imgUrl.value
  }

  /// clear out data in input
  todoForm.title.value = ""
  todoForm.price.value = ""
  todoForm.description.value = ""
  todoForm.imgUrl.value = ""
console.log(newTodo)

  axios.post('https://api.vschool.io/vicsumner/todo/', newTodo).then(response => {
    todoListContainer.innerHTML = ""
    getData()
  })

})

getData()

  
