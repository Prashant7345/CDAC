$(document).ready(function(){

    var products = [
        {name:"Product 1",price:1000,path:'images/product1.jpg',id:1},
        {name:"Product 2",price:2000,path:'images/product2.jpg',id:2},
        {name:"Product 3",price:3000,path:'images/product3.jpg',id:3},
        {name:"Product 4",price:4000,path:'images/product4.jpg',id:4},
        {name:"Product 5",price:5000,path:'images/product5.jpg',id:5},
        {name:"Product 6",price:6000,path:'images/product6.jpg',id:6}
    ];

    // console.log('SHOW CART RECORD');
    var ans_storage = localStorage.getItem('cartData');
    console.log(ans_storage);

    if(ans_storage === null){
        $('.all_products').html('No Record Exist').addClass('text-center display-1')
    }
    else{
        var arr_storage = JSON.parse(ans_storage);
        console.log(arr_storage); // ['1','3','4']

        // products.filter(val=>console.log(val, val.id))
        // var result = products.filter(val=> console.log((val.id).toString()))
        var result = products.filter(val=> (arr_storage.indexOf((val.id).toString())!=-1))
        // console.log(result);

        if(result.length>0){
            var fans = ``
            $.each(result , function(i,val_result){
                // console.log(val_result);
                fans = fans + `
                    <div class='col-xl-3 text-center'>
                        <img src='${val_result.path}' class='img-fluid'/>
                        <h2>${val_result.price}</h2>
                        <p>${val_result.name}</p>
                        
                        <p><button class='btn btn-dark btn-delete' for='${val_result.id}'>Delete</button></p>
                    </div>
                `;
            });
            // console.log(fans);
            $('.all_products').html(fans);
        }
    }

    ///  Delete From Cart
    $('.btn-delete').click(function(){
        if( confirm('REMOVE FROM CART ???') ){
            // console.log('test');
            var id_to_delete = $(this).attr('for');
            console.log(id_to_delete);

            var data_storage = localStorage.getItem('cartData');
            console.log(data_storage);

            var arr_data_storage = JSON.parse(data_storage);
            console.log(arr_data_storage);

            var indexno = arr_data_storage.indexOf(id_to_delete)
            console.log(indexno);

            /*
                ['4','6','21']
                21
                index no = 2

                ['4','6','21'].splice(indexno,count)
                ['4','6','21'].splice(2,1) ==> ['4','6']
            */

            arr_data_storage.splice(indexno,1);
            console.log(arr_data_storage);

            var fans = JSON.stringify(arr_data_storage);
            console.log(fans);

            localStorage.setItem('cartData',fans)
            $(this).parent().parent().fadeOut();
        }
    })
})