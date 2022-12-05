// lets apply events through javascript using Event Handler
var liTag=document.querySelector('.xyz')
// console.log(liTag);

//Event Handling Via JS
liTag.onclick = function(){
    // console.log('TEST');
    console.log(this);
    this.style.background = '#ccc';

    this.nextElementSibling.style.background = '#567';
    this.previousElementSibling.style.background = '#234';

    this.parentNode.style.border = '3px solid red';
}

var btnTag = document.querySelector('button');
// console.log(btnTag);
//Event Handler (DOM)
btnTag.onclick = function(){
    var ulTag = document.querySelector('ul');
    console.log(ulTag);

    ulTag.firstElementChild.style.background='#456'
    ulTag.lastElementChild.style.background='#456'

    ulTag.children[1].style.background = '#999'

}