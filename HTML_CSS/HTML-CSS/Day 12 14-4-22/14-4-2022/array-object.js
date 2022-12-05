console.log(typeof document);
console.log(document);


var allProducts = [
    {
        name:"Product 1",
        path:"images/product1.jpg"
    },
    {
        name:"Product 2",
        path:"images/product2.jpg"
    },
    {
        name:"Product 3",
        path:"images/product3.jpg"
    },
    {
        name:"Product 4",
        path:"images/product4.jpg"
    }
]

console.log(allProducts);

if(allProducts.length>0){
    document.write(`<div class='container'> `);
    document.write(`<div class='row'> `);

    for(var result in allProducts){
        console.log(result, allProducts[result]);
        document.write(`
            <div class='col-xl-3 text-center'>
                <img src='${allProducts[result]['path']}' class='img-fluid'/>
                <h2>${allProducts[result]['name']}</h2>
            </div>
        `)
    }
    
    document.write(`</div>`);
    document.write(`</div>`);
}

/*
printf("") //Function Without Object

class User{
    name='akshay' //property
    function role(){
        printf("")
    }
}

var user1 = new User()
user1.role(); //Function With Object --Method
document.write();
*/

document.write('<h2>')
document.write('HELLLO')
document.write('</h2>')