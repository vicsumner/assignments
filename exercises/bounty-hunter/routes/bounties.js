const express = require("express")
const bountyRouter = express.Router()
const uuid = require('uuid/v4')

let bounties =[

    {
      firstName:"Sunshine",
      lastName: "Jones",
      living:"false",
      type: "Sith",
      _id: uuid()
    },
    {
      firstName: "Ruddy",
      lastName: "Pine",
      living: "true",
      type: "Sith",
      _id: uuid()

    },
    {
      firstName: "Bill",
      lastName: "Jenkins",
      living: "true",
      type: "Jedi",
      _id: uuid()

    },
    {
      firstName: "Bob",
      lastName: "Rowen",
      living: "false",
      type: "Sith",
      _id: uuid()

    }

]

//GET All
bountyRouter.get("/", (req, res) => {
    res.send(bounties)
})

//GET One
bountyRouter.get("/:_id", (req, res) => {
  const foundBounty = bounties.find(bounty => bounty._id === req.params._id)
  res.send(foundBounty)

})

//Post (Add one)
bountyRouter.post("/", (req, res) => {
    const newBounty = req.body
    newBounty._id = uuid()
    bounties.push(newBounty)
    res.send(newBounty)
})

//DELETE 
bountyRouter.delete("/:_id", (req, res) =>{
  const updatedDB = bounties.filter(bounty => bounty._id !== req.params._id)
  bounties = updatedDB 
  res.send({message: "User successfully deleted"})
})

//PUT 
bountyRouter.put("/:_id", (req, res) => {
  const foundBounty = bounties.find(bounty => bounty._id === req.params._id)
  Object.assign(foundBounty, req.body)
  res.send(foundBounty)
})

module.exports = bountyRouter