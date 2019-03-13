const express = require('express')
const app = express()


//Middleware
app.use(express.json())

//Routes
app.use('/bounties', require('./routes/bounties.js'))






app.listen(6100, () =>{
    console.log("Server is running on port 6100")
})

//Steps: TO SET UP server.js file
//1. npm init -y
//2. npm i express
//3. Create server.js
//4. require express
//5. Create Server Object
//6. LISTEN
