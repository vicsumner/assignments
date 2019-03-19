const express = require('express')
const locationRouter = express.Router()
const Location = require('...models/location.js')


//GET All
locationRouter.get('/', (req, res) =>{
  Location.find((err, locations) =>{
    if(err){
      res.status(500)
      return res.send(err)
    }
    return res.status(200).send(location)
  })
  
})

//POST 
locationRouter.post('/', (req, res) =>{
  const newLocation = new Location(req.body)
  newLocation.save((err, savedLocation) => {
    if(err){
      res.status(500)
      return res.send(err)
    }

  }) 

})
module.export= locationRouter