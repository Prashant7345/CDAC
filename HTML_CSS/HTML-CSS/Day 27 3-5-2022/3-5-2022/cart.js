// jquery is loaded
// console.log($);

// ans=JSON.stringify([20,30])
// console.log(ans);

//check the page is loaded
$(document).ready(function(){
    // defined products array
    var products = [
        {name:"Product 1",price:1000,path:'images/product1.jpg',id:1},
        {name:"Product 2",price:2000,path:'images/product2.jpg',id:2},
        {name:"Product 3",price:3000,path:'images/product3.jpg',id:3},
        {name:"Product 4",price:4000,path:'images/product4.jpg',id:4},
        {name:"Product 5",price:5000,path:'images/product5.jpg',id:5},
        {name:"Product 6",price:6000,path:'images/product6.jpg',id:6}
    ];
    // console.log(products);

    //lets iterate all products from an array (products)

    var result = ``;
    $.each(products , function(i,val){
        // console.log(i , val);
        //create  a grid 
        result = result + `
            <div class='col-xl-3 text-center'>
                <img src='${val.path}' class='img-fluid'/>
                <h2>${val.price}</h2>
                <p>${val.name}</p>
                
                <p><button class='btn btn-dark btn-cart' for='${val.id}'>Add To Cart</button></p>
            </div>
        `;
    });
    // console.log(result);
    $('.all_products').html(result);


    var productsArr = [];

    // lets have a click on products
    $('.btn-cart').click(function(){
        // console.log('CLICK EVENT')
        var ans = $(this).attr("for");
        console.log(ans ,"Product id");
        // localstorage.getItem('cartData') ===> [2,4,3,1,5,...]

        //lets see data from localstorage
        var ans_storage = localStorage.getItem('cartData');
        console.log(ans_storage); //null

        if(ans_storage === null){
            console.log('Add First Product');
            productsArr.push(ans);
            console.log(productsArr);
            var dataToStora = JSON.stringify(productsArr);
            console.log(dataToStora);

            localStorage.setItem('cartData',dataToStora);
            alert('Product Added In Cart');

            window.location.href='show-cart.html';
        }
        else{
            console.log('2nd product onward');
            var arr_storage = JSON.parse(ans_storage);
            console.log(arr_storage); //['4']

            //check product in array is exist or not
            var ans_exist = arr_storage.indexOf(ans)
            console.log(ans_exist); //-1 or index number
            if(ans_exist!=-1){
                alert('product Exist in Cart');
            }
            else{
                console.log('add 2nd product onwards');
                arr_storage.push(ans);
                console.log(arr_storage);
                var finalProduct = JSON.stringify(arr_storage);
                console.log(finalProduct);

                localStorage.setItem('cartData',finalProduct);
                alert('Product Updated In Cart');
                window.location.href='show-cart.html';
            }
        }
    })
});