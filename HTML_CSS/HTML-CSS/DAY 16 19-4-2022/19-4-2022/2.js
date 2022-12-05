// Event Handler & DOM Travser Property

document.querySelector('.heading').onclick = function(){
    // alert()
    // console.log(this);   //h1 tag
    // console.log( this.nextElementSibling );
    // var ans = this.nextElementSibling.style.display;
    // console.log(ans);

    // if(ans=='none'){
    //     this.nextElementSibling.style.display= 'block';
    // }
    // else{
    //     this.nextElementSibling.style.display ='none';
    // }

    // (condition)?true statements:false statement
    this.nextElementSibling.style.display = (this.nextElementSibling.style.display=='none')?'block':'none';
}