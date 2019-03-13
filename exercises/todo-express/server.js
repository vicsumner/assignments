const express = require('express')
const app = express()
const uuid = require('uuid/v4')

let todos =[
{
  name: "Go to the grocery store",
  description: "The description of the todo",
    imageUrl: "https://previews.123rf.com/images/monticello/monticello1404/monticello140400008/27141804-wicker-basket-with-groceries-isolated-on-white-background.jpg",
  completed: false,
  _id: uuid()
},
  {
    name: "Go to the movies",
    description: "See Goonies",
    imageUrl: "https://s.abcnews.com/images/GMA/150608_gma_watt2_16x9_992.jpg",
    completed: true,
    _id: uuid()
  },
  {
    name: "Go to the mall",
    description: "Go to JCrew",
    imageUrl: "https://media.gq.com/photos/56c1f7c4cb2b642c39f97aaa/master/w_1600,c_limit/jcrew-fall-2016.jpg",
    completed: false,
    _id: uuid()
  },

]
//Middleware

app.use(express.json())

//GET ALL (Collection)
app.get("/todos", (req, res) =>{
  res.send(todos)
})

//GET ONE (Resource)
app.get('/todos/:_id', (req, res) =>{
  const ID = req.params._id

//Find the person object by it's ID in the database
const foundTodo = todos.find(todo => todo._id === ID)

//Send back person Object
res.send(foundTodo)
})

//POST - Add one
app.post('/todos', (req, res)=>{
  req.post._id = uuid()

  todos.push(req.body)

  res.send(req.body)
})
//DELETE-delete one
app.delete("/todos/:_id", (req, res) => {


  const updateTodos = todos.filter(todo => todo._id !== req.params._id)

  todos = updateTodos

  res.send(todos)
})

//PUT -Update one
app.put("/todos/:_id", (req, res) =>{
  const foundTodos = todos.find(todo => todo._id === req.params._id)

  Object.assign(foundTodos, req.body)

  res.send(foundTodos)
})


app.listen(5600, () => {
  console.log("Server is running on port 5600")
})