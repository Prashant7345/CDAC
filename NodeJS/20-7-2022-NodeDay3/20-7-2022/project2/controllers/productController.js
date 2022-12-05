//npm i mysql
const db = require('../db/mysqldb');
console.log(db);

const addProductPage = function(req,res){
    // res.send('add 1');
    res.render('AddProductPage');
}
const showProductPage = function(req,res){
    // res.send('show 1');
    // res.render('ShowProductPage');
    db.query('select * from account',function(err,results){
        if(!err){
            // console.log('FROM MYSQL DATABASE');
            // console.log(results);
            //[{},{},{}]
            //https://expressjs.com/en/5x/api.html#res.render
            res.render('ShowProductPage' , {place:'Mumbai' , dbRecord:results});
        }
    });
    // res.send(`
    //     <h1> SHOW ALL PRODUCTS </h1>
    // `)
}


const addproduct = (req,res)=>{
    res.send({msg:'PRO ADD'})
}
const showproduct = (req,res)=>{
    // const productInfo = [
    //     {name:'Product 1',price:1000 , discount:20},
    //     {name:'Product 2',price:2000 , discount:10},
    //     {name:'Product 3',price:3000 , discount:40}
    // ];
    // res.send({msg:productInfo})

    //query() it is from mysql module
    db.query('select * from  account' , function(err,results){
        if(err) {
            throw err;
        }
        else{
            res.send({msg:results});
        }
    });
}
const deleteproduct = (req,res)=>{
    res.send({msg:'PRO DELETE'})
}
const updateproduct = (req,res)=>{
    res.send({msg:'PRO UPDATE'})
}

module.exports = {
    addProductPage,
    showProductPage,
    addproduct,showproduct,deleteproduct,updateproduct
}

/*
    {
        addProductPage:addProductPage,
        showProductPage:showProductPage
    }
*/