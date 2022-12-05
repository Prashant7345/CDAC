

document.querySelector('#btn1').onclick=function()
{
    var FisrtName=document.querySelector('#txt1').value;
    console.log(FisrtName);
    var LastName=document.querySelector('#txt2').value;

    var Address=document.querySelector('#txt3').value;
    var Email=document.querySelector('#txt4').value;
    var Mobile=document.querySelector('#txt5').value;
    var Age=document.querySelector('#txt6').value;



         trTag=document.createElement('tr');
        var tdTag1=document.createElement('td');
        var tdTag2=document.createElement('td');
        var tdTag3=document.createElement('td');
        var tdTag4=document.createElement('td');
        var tdTag5=document.createElement('td');
        var tdTag6=document.createElement('td');


        tdTag1.innerHTML=FisrtName;
        tdTag2.innerHTML=LastName;
        tdTag3.innerHTML=Email;
        tdTag4.innerHTML=Mobile;
        tdTag5.innerHTML=Address;
        tdTag6.innerHTML=Age;

        trTag.appendChild(tdTag1);
        trTag.appendChild(tdTag2);
        trTag.appendChild(tdTag3);
        trTag.appendChild(tdTag4);
        trTag.appendChild(tdTag5);
        trTag.appendChild(tdTag6);


        
}

document.querySelector('#btn2').onclick=function()
{
    document.querySelector('#result').appendChild(trTag);
}