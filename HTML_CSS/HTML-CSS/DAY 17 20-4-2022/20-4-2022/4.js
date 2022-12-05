//EVENT HANDLING ON ID="add_btn" with ANONYMOUS FUNCTION

document.getElementById("add_btn").onclick=function(){
    // console.log(Math.random());

    var rec1 = document.getElementById('uname').value;
    var rec2 = document.getElementById('uage').value;

    console.log(rec1,rec2);

    if(rec1=='' || rec2==''){
        document.querySelector('.errMsg').innerHTML = 'All Fields are compulsory';
        document.querySelector('.errMsg').style.color = 'red';
    }
    else{
        document.querySelector('.errMsg').innerHTML = '';

        // DOM MNIPULATE 1 tr , 3 td
        var trTag = document.createElement('tr');
        var tdTag1 = document.createElement('td');
        var tdTag2 = document.createElement('td');
        var tdTag3 = document.createElement('td');

        console.log(trTag);
        console.log(tdTag1,tdTag2,tdTag3);

        tdTag1.innerHTML = rec1;
        tdTag2.innerHTML = rec2;

        console.log(tdTag1,tdTag2);

        var btnTag = document.createElement('button');
        btnTag.innerHTML = "X";
        btnTag.className = 'btn btn-danger';
        //event listener on btn tag
        btnTag.addEventListener('click', deleteRow);

        console.log(btnTag,typeof btnTag);

        tdTag3.appendChild(btnTag)
        console.log(tdTag3);

        trTag.appendChild(tdTag1)
        trTag.appendChild(tdTag2)
        trTag.appendChild(tdTag3)

        console.log(trTag);

        document.getElementById('result').appendChild(trTag)
    }
}

function deleteRow(){
    // console.log('FUNCTION WORKING',Math.random());
    console.log(this , "current Button");
    //DOM TRAVERSE PROPERTY
    console.log(this.parentNode.parentNode , "current TR TAG");

    var ans = confirm('Delete????');
    console.log(ans);

    if(ans){
        this.parentNode.parentNode.remove();
    }
}