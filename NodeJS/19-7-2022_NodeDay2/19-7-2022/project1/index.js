require('dotenv').config();
const express = require('express');
// console.log(typeof express);

//Require ur custom Module
const userR = require('./routes/userRoute');
// console.log(userR);

const app = express();
// console.log(app);

//set your custom route here
//http://localhost:4500/users
app.use('/users' , userR);


http:localhost:4500
app.get('/' , (req,res)=>{
    res.send('Hello World');
});
app.get('/welcome' , (req,res)=>{
    res.send('Welcome Page');
});
app.get('/welcome/Prashant' , (req,res)=>{
    res.send('Welcome to MET PRASHANT');
});
app.get('/about' , (req,res)=>{
    res.send('About Page');
});
app.get('/services' , (req,res)=>{
    res.send('ServicePage');
});

app.listen(process.env.PORT , process.env.HOST , ()=>{
    console.log('RUNNING');
})
