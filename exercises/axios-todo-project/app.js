
const todoListContainer = document.getElementById("todolist-container")
const todoForm = document.addToForm

function getData(){
axios.get('https://api.vschool.io/vicsumner/todo/').then(response => {
  const todos = response.data
  listTodos(todos)

}).catch(err => console.log(err))
}

function listTodos(todosArr){
  //Make 1 todo show up, then reuse that code to make all todos show up (unused direction)
  
  // console.log(firstTodo)

  for(let i =0 ; i < todosArr.length; i++){

//   //Make it show on the DOM
//   // Create Elements
      const todoContainer = document.createElement('div')
      const title = document.createElement('h1')
      const imgUrl = document.createElement('img')

      //Edit the element / Give it content
      todoContainer.classList.add('todo-container')
      title.textContent = todosArr[i].title
      imgUrl.setAttribute("src", todosArr[i].imgUrl)
     
      if(todosArr[i].completed){
        title.style.textDecoration = "line-through"
      }

    // Append it to the DOM
      todoContainer.appendChild(title)
      todoContainer.appendChild(imgUrl)
      todoListContainer.appendChild(todoContainer)

  }
}
todoForm.addEventListener("submit", (e) => {
  e.preventDefault()
    const newTodo = {
      title: todoForm.title.value

    }

    todoForm.title.value = ""

  axios.post('https://api.vschool.io/vicsumner/todo/', newTodo).then(response => {
    todoListContainer.innerHTML = ""
    getData()
  }).catch(err => console.log(err))
})

getData()

