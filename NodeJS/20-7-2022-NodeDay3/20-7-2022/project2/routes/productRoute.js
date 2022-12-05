const express = require('express');

const router = express.Router();

// import {addProductPage,showProductPage} from '../controllers/productController';

const productC = require('../controllers/productController');
// const productC1 = require('../controllers/productController/addProductPage');
// const productC2 = require('../controllers/productController/showProductPage');

// console.log(productC1);
// console.log(productC2);
// 
// router
// .get('/',(req,res)=>{
//     res.send({msg:'Route Called'})
// })
// .get("/xyz" , (req,res)=>{
//     res.send({msg:'XYZ CALLED'})
// })

//http://localhost:4500/products/add
//http://localhost:4500/products/show
router
.get('/',productC.showproduct)
.post('/',productC.addproduct)
.delete('/',productC.deleteproduct)
.put('/',productC.updateproduct)
.get('/add' , productC.addProductPage)
.get('/show', productC.showProductPage)


module.exports = router;