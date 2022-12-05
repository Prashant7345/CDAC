require('dotenv').config();
const express = require('express');
// console.log(typeof express);
const productR= require('./routes/productRoute');

const app = express();
// console.log(app);
//npm i ejs
app.set('view engine','ejs'); //all files can be accessed from views folder 

// app.get('/abcd' , (req,res)=>{
//     res.render('AddProductPage')
// })

app.use('/products' , productR);
//http://localhost:4500/products/
//http://localhost:4500/products/xyz

//http://localhost:4500/products/add
//http://localhost:4500/products/show


app.listen(process.env.PORT,()=>{
    console.log('Running');
})


// setTimeout(function(){
//     console.log('TIME OUT CALLED');
// } , 3000);

// function myfunc1(){
//     console.log('TIME OUT CALLED');
// }

// setTimeout(myfunc1 , 3000);