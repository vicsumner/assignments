const express = require('express')
const todoRouter = express.Router()
const Todo = require('../models/todo.js')

// GET ALL
todoRouter.get("/", (req, res) => {
  Todo.find((err, todos) => {
    if (err){
        //handleError
        res.status(500)
        return res.send(err)
    }
    //Send back response
    return res.status(200).send(todos)
  })
})

//GET ONE
todoRouter.get("/:_id", (req, res) =>{
  Todo.findOne({_id: req.params._id}, (err, foundTodo) =>{
    if(err){
      res.status(500)
      return res.send(err)
    }
    return res.status(200).send(foundTodo)
  })
})

//POST Add One
todoRouter.post("/", (req, res) => {
  const newTodo = new Todo(req.body)
  newTodo.save((err, newTodoObj) => {
      if (err) {
        res.status(500)
        return res.send(err)
      }
      return res.status(201).send(newTodoObj)
  })
})

//DELETE
todoRouter.delete("/:_id", (req, res) =>{
  Todo.findOneAndRemove({_id: req.params._id}, (err, deletedTodo) => {
    if(err){
      res.status(500)
      return res.send(err)
    }
    return res.status(202).send(`Successfully deleted Item with title ${deletedTodo.title}`)
  })
})

//PUT - Updating One
todoRouter.put("/:id", (req, res) => {
  Todo.findOneAndUpdate(
    {_id: req.params._id}, 
    req.body, 
    {new: true}, 
    (err, updatedTodo) =>{
    if(err){
      res.status(500)
      return res.send(err)
    }
    return res.status(201).send (updatedTodo)
  })
})

//
module.exports = todoRouter