var str=``;
var textBox = document.getElementById('txt');
textBox.value=0;

function myfunc(curTd){
    // console.log(curTd);
    // console.log(curTd.innerText);
    str = str + curTd.innerText;
    console.log(str);
    textBox.value = str;
}

function myfunc2(){
    if(str!=''){
        var ans = eval(str);
        console.log(ans);
        textBox.value = ans;
        str= ans;
    }   
}
function myfunc1(){
    str=``; textBox.value=0; 
}