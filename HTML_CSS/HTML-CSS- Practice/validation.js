var txt_uname = document.querySelector('#uname');
console.log(txt_uname);

txt_uname.onkeyup=chk_uname;
txt_uname.onblur=chk_uname;

function chk_uname(){
    // console.log(Math.random());
    var textBoxValue = txt_uname.value ;
    // console.log(Math.random() , textBoxValue);
    var reg_username = /^[a-zA-Z]([a-zA-Z ]+)?[a-zA-Z]$/;
    var result = reg_username.test(textBoxValue);
    // console.log(result);
    if(result){
        txt_uname.nextElementSibling.style.display='none';
        // txt_uname.value = txt_uname.value + "%"
        return true;

    }
    else{
        txt_uname.nextElementSibling.style.display='block';
        return false;
    }
}
///////////////////////////////////////////////

var txt_ulname = document.querySelector('#ulname');
console.log(txt_ulname);

txt_ulname.onkeyup=chk_ulname;
txt_ulname.onblur=chk_ulname;

function chk_ulname(){
    // console.log(Math.random());
    var textBoxValue = txt_ulname.value ;
    // console.log(Math.random() , textBoxValue);
    var reg_username = /^[a-zA-Z]([a-zA-Z ]+)?[a-zA-Z]$/;
    var result = reg_username.test(textBoxValue);
    // console.log(result);
    if(result){
        txt_ulname.nextElementSibling.style.display='none';
        // txt_ulname.value = txt_ulname.value + "%"
        return true;

    }
    else{
        txt_ulname.nextElementSibling.style.display='block';
        return false;
    }
}

var txt_umobile = document.querySelector('#umobile');
console.log(txt_umobile);

txt_umobile.onkeyup=chk_umobile;
txt_umobile.onblur=chk_umobile;

function chk_umobile(){
    // console.log(Math.random());
    var textBoxValue = txt_umobile.value;
    // console.log(Math.random() , textBoxValue);
    var reg_mobile = /^[1-9][0-9]{9}$/;
    var result = reg_mobile.test(textBoxValue);
    // console.log(result);
    if(result){
        txt_umobile.nextElementSibling.style.display='none';
        return true;
    }
    else{
        txt_umobile.nextElementSibling.style.display='block';
        return false;
    }
}
///////////////////////////////////////////////
var txt_uemail = document.querySelector('#uemail');
console.log(txt_uemail);

txt_uemail.onkeyup=chk_uemail;
txt_uemail.onblur=chk_uemail;

function chk_uemail(){
    // console.log(Math.random());
    var textBoxValue = txt_uemail.value;
    // console.log(Math.random() , textBoxValue);
    var reg_email = /^([a-zA-Z0-9]([a-zA-Z0-9_\.]+)?[a-zA-Z0-9])@(([a-zA-Z0-9]([a-zA-Z0-9\-]+)?[a-zA-Z0-9])\.([a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)$/;
    var result = reg_email.test(textBoxValue);
    // console.log(result);
    if(result){
        txt_uemail.nextElementSibling.style.display='none';return true;
    }
    else{
        txt_uemail.nextElementSibling.style.display='block';return false;
    }
}

var txt_uage = document.querySelector('#uage');
console.log(txt_uage);

txt_uage.onkeyup=chk_uage;
txt_uage.onblur=chk_uage;

function chk_uage(){
    // console.log(Math.random());
    var textBoxValue = txt_uage.value;
    // console.log(Math.random() , textBoxValue);
    var reg_mobile = /^[1-9][0-9]?$/;
    var result = reg_mobile.test(textBoxValue);
    // console.log(result);
    if(result){
        txt_uage.nextElementSibling.style.display='none';
        return true;
    }
    else{
        txt_uage.nextElementSibling.style.display='block';
        return false;
    }
}

var txt_uadd = document.querySelector('#uadd');
console.log(txt_uadd);

txt_uadd.onkeyup=chk_uadd;
txt_uadd.onblur=chk_uadd;

function chk_uadd(){
    // console.log(Math.random());
    var textBoxValue = txt_uadd.value ;
    // console.log(Math.random() , textBoxValue);
    var reg_username = /^[a-zA-Z0-9]([a-zA-Z0-9 \/\.\(\)\-]+)?[a-zA-Z0-9 \.]$/;
    var result = reg_username.test(textBoxValue);
    // console.log(result);
    if(result){
        txt_uadd.nextElementSibling.style.display='none';
        // txt_uadd.value = txt_uadd.value + "%"
        return true;

    }
    else{
        txt_uadd.nextElementSibling.style.display='block';
        return false;
    }
}

document.getElementById("btn").onclick = function(){
    // console.log(Math.random());

    console.log(chk_uname());
    console.log(chk_ulname());
    console.log(chk_uemail());
    console.log(chk_umobile());
    console.log(chk_uage());
    console.log(chk_uadd());
   

    if(chk_uname() && chk_ulname() && chk_uemail() && chk_umobile() && chk_uage() && chk_uadd() ){
        alert('Student validated and details added to database')
    }


    var rec1 = document.getElementById('uname').value;
    var rec2 = document.getElementById('ulname').value;
    var rec3 = document.getElementById('uemail').value;
    var rec4 = document.getElementById('umobile').value;
    var rec5 = document.getElementById('uage').value;
    var rec6 = document.getElementById('uadd').value;


    console.log(rec1,rec2,rec3,rec4,rec5,rec6);

    if(rec1=='' || rec2==''|| rec3=='' || rec4==''|| rec5=='' || rec6==''){
        document.querySelector('.errMsg').innerHTML = 'All Fields are compulsory';
        document.querySelector('.errMsg').style.color = 'red';
    }
    else{
        // document.querySelector('.errMsg').innerHTML = '';

        var trTag = document.createElement('tr');
        var tdTag1 = document.createElement('td');
        var tdTag2 = document.createElement('td');
        var tdTag3 = document.createElement('td');
        var tdTag4 = document.createElement('td');
        var tdTag5 = document.createElement('td');
        var tdTag6 = document.createElement('td');

        console.log(trTag);
        console.log(tdTag1,tdTag2,tdTag3,tdTag4,tdTag5,tdTag6);

        tdTag1.innerHTML = rec1;
        tdTag2.innerHTML = rec2;
        tdTag3.innerHTML = rec3;
        tdTag4.innerHTML = rec4;
        tdTag5.innerHTML = rec5;
        tdTag6.innerHTML = rec6;
      

        console.log(tdTag1,tdTag2,tdTag3,tdTag4,tdTag5,tdTag6);
        //  var btnTag = document.createElement('button');
        // btnTag.innerHTML = "X";
        // btnTag.className = 'btn btn-danger';
        // //event listener on btn tag
        // btnTag.addEventListener('click', deleteRow);

        // //console.log(btnTag,typeof btnTag);

        // tdTag6.appendChild(btnTag)
        // console.log(tdTag6);

        trTag.appendChild(tdTag1)
        trTag.appendChild(tdTag2)
        trTag.appendChild(tdTag3)
        trTag.appendChild(tdTag4)
        trTag.appendChild(tdTag5)
        trTag.appendChild(tdTag6)


        console.log(trTag);

        document.getElementById('result').appendChild(trTag)
    }

}
// function deleteRow(){
//     // console.log('FUNCTION WORKING',Math.random());
//     console.log(this , "current Button");
//     //DOM TRAVERSE PROPERTY
//     console.log(this.parentNode.parentNode , "current TR TAG");

//     var ans = confirm('Delete????');
//     console.log(ans);

//     if(ans){
//         this.parentNode.parentNode.remove();
//     }
// }