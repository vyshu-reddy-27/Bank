const express = require('express');
const bodyparser = require('body-parser')
const register=require("./ROUTES/userRoutes")

require('dotenv').config();
require('./db');
const app = express()

const port = 6000;
app.use(bodyparser.json())


app.use("/user",register)
app.listen(port,()=>{
    console.log("listening");
})
