var text_funame = document.querySelector('#funame');

text_funame.onkeyup=chk_funame;
text_funame.onblur=chk_funame;

function chk_funame(){
    var textbox= text_funame.value;
    var reg_funame= /^[a-zA-z]([a-zA-z]+)?[a-zA-z]$/;
    var result = reg_funame.test(textbox);
    if(result){
        text_funame.nextElementSibling.style.display='none';return true;
    }
    else
    text_funame.nextElementSibling.style.display='block';return false;
}

var text_luname = document.querySelector('#luname');

text_luname.onkeyup=chk_luname;
text_luname.onblur=chk_luname;

function chk_luname(){
    var textbox= text_luname.value;
    var reg_luname= /^[a-zA-z]([a-zA-z]+)?[a-zA-z]$/;
    var result = reg_luname.test(textbox);
    if(result){
        text_luname.nextElementSibling.style.display='none';return true;
    }
    else
    text_luname.nextElementSibling.style.display='block';return false;
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

var txt_address = document.querySelector('#address');
console.log(txt_uemail);

txt_address.onkeyup=chk_address;
txt_address.onblur=chk_address;

function chk_address(){
    // console.log(Math.random());
    var textBoxValue = txt_address.value;
    // console.log(Math.random() , textBoxValue);
    var reg_address = /^[a-zA-Z0-9]([a-zA-Z0-9 ,\.\-]+)?[a-zA-Z0-9\.\-]$/;
    var result = reg_address.test(textBoxValue);
    // console.log(result);
    if(result){
        txt_address.nextElementSibling.style.display='none';return true;
    }
    else{
        txt_address.nextElementSibling.style.display='block';return false;
    }
}

var txt_age = document.querySelector('#age');
console.log(txt_age);

txt_age.onkeyup=chk_age;
txt_age.onblur=chk_age;

function chk_age(){
    // console.log(Math.random());
    var textBoxValue = txt_age.value;
    // console.log(Math.random() , textBoxValue);
    var reg_age = /^[0-9a-zA-z]{1,2}$/;
    var result = reg_age.test(textBoxValue);
    // console.log(result);
    if(result){
        txt_age.nextElementSibling.style.display='none';return true;
    }
    else{
        txt_age.nextElementSibling.style.display='block';return false;
    }
}

document.getElementById('btn').onclick = function(){
    console.log(chk_funame());
    console.log(chk_luname());
    console.log(chk_umobile());
    console.log(chk_uemail());
    console.log(chk_address());
    console.log(chk_age());
 
    if(chk_funame() && chk_luname() && chk_umobile() && chk_uemail() && chk_address() && chk_age){
        confirm('Data Added Successfully');
    }

    var res1 = document.getElementById('funame').value;
    var res2 = document.getElementById('luname').value;
    var res3 = document.getElementById('umobile').value;
    var res4 = document.getElementById('uemail').value;
    var res5 = document.getElementById('address').value;
    var res6 = document.getElementById('age').value;

    console.log(res1,res2,res3,res4,res5,res6);


    if(res1=='' || res2=='' || res3=='' || res4=='' || res5=='' || res6==''){
        document.querySelector('.errMsg').innerHTML= "All Fields are Compulsory";
        document.querySelector('.errMsg').style.coulur= 'red';
    }

    else
    {
        var tag = document.createElement('tr')
        var tag1 = document.createElement('td')
        var tag2 = document.createElement('td')
        var tag3 = document.createElement('td')
        var tag4 = document.createElement('td')
        var tag5 = document.createElement('td')
        var tag6 = document.createElement('td')

        // console.log(tag);
        // console.log(tag1,tag2,tag3,tag4,tag5,tag6);


        tag1.innerHTML = res1;
        tag2.innerHTML = res2;
        tag3.innerHTML = res3;
        tag4.innerHTML = res4;
        tag5.innerHTML = res5;
        tag6.innerHTML = res6;
        
        tag.appendChild(tag1)
        tag.appendChild(tag2)
        tag.appendChild(tag3)
        tag.appendChild(tag4)
        tag.appendChild(tag5)
        tag.appendChild(tag6)

        document.getElementById('result').appendChild(tag)




    }

}


