const express = require('express');
const bodyParser = require('body-parser');
const Database = require('./database');
const app = express();
const User =require('./Models/user.model')
app.use(bodyParser.json());
 
// app.get("/User",async (req,res)=>{
//     const {id , name , winRecord} = req.body;
//     await Database.instance.createUser(new User(id , name , winRecord));
//     res.send({message :`Create [${id}]`});
// });
app.post("/user",async (req,res)=>{
    const {id , name , winRecord} = req.body;
    await Database.instance.createUser(new User(id , name , winRecord));
    res.send({message :`Create [${id}]`});
});
app.get("/getuser", async (req,res)=>{
    let user = await Database.instance.getAllUser();
    res.send({user:user});
})

module.exports = app;