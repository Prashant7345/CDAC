$(document).ready(function(){
    var userArr = [];
    $("#button").click(function(){
        var rec1 = $('#txt1').val();
        var rec2 = $('#txt2').val();
        var rec3 = $('#txt3').val();
        var rec4 = $('#txt4').val();

        var obj = {
            name:rec1,
            age:rec2,
            email:rec3,
            pass:rec4
        }

        console.log(obj);

        

        //lets get value from localstorage
        var dataFromStorage = localStorage.getItem('userDetails');
        console.log(dataFromStorage);

        var result = JSON.parse(dataFromStorage)
        console.log(result);;
        result.push(obj)
        console.log(result);

        var fans = JSON.stringify(result);
        console.log(fans);

        localStorage.setItem('userDetails',fans);
        // $('.msg').html('User Added');
        // $('#txt1,#txt2,#txt3,#txt4').val('');
    });
});