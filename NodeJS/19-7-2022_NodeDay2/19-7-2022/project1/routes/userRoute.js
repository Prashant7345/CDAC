const express = require('express');
const router = express.Router();

//https://expressjs.com/en/5x/api.html#app

//http://localhost:4500/users(get)
//http://localhost:4500/users(post)
//http://localhost:4500/users(delete)
//http://localhost:4500/users(update)

// http://expressjs.com/en/guide/routing.html#express-router

router
.get("/" , (req,res)=>{
    res.send('GET ROUTE CALLED');
})
.post("/" , (req,res)=>{
    res.send("POST Route Called");
})
.delete("/" , (req,res)=>{
    res.send("DELETE Route Called");
})
.put("/" , (req,res)=>{
    res.send("PUT Route Called");
});


module.exports = router;