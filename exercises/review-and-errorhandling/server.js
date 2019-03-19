const express = require('express')
const app = express()
const morgan = require ('morgan')
const mongoose = require ('mongoose')
const PORT = process.env.PORT || 7000

//Middlewares
app.use(express.json())
app.use(morgan('dev'))


//DB connection
mongoose.connect('mongoose://localhost:27017/happiest-hours', {userNewUrlParser:true}, () => {
  console.log(`[o] Connected to the DB`)
})

//Routes
app.use("/happyhour", require("./routes/locationRoutes.js"))

//Global error Handler
app.use((err, req, res, next) =>{
  console.log(err)
  return res. send ({err.Msg})
})

//Listen
app.listen(PORT, () =>{
  console.log(`[+] Server is running on POrt ${PORT}`)
})