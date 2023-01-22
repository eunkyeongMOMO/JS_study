let slideContainer = document.querySelector('.slideContainer');
let button0 =document.querySelector('.button1');
let button1 =document.querySelector('.button2');
let button2 =document.querySelector('.button3');
let next= document.querySelector('.next');
let pre= document.querySelector('.pre');
button0.classList.add('active');
let button1Active = ()=>{
    slideContainer.classList.remove('active1');
    slideContainer.classList.remove('active2');
    button0.classList.add('active');
    button1.classList.remove('active');
    button2.classList.remove('active');
}
let button2Active = ()=>{
 slideContainer.classList.add('active1');
    slideContainer.classList.remove('active2');
    button1.classList.add('active');
    button0.classList.remove('active');
    button2.classList.remove('active');
}
let button3Active = ()=>{
   slideContainer.classList.add('active2');
    slideContainer.classList.remove('active1');
    button2.classList.add('active');
    button1.classList.remove('active');
    button0.classList.remove('active');
}
button0.addEventListener('click',button1Active);
button1.addEventListener('click',button2Active);
button2.addEventListener('click',button3Active);


//const slideClass = slideContainer.classList;

// let nextActive=()=>{
//     button1.classList.add('active');
//     button2.classList.remove('active');
//     button3.classList.remove('active');
//     if(slideClass.contains('active1')){
//    slideContainer.classList.add('active2');
//    slideContainer.classList.remove('active1');
//    button3.classList.add('active');
//    button2.classList.remove('active');
//    button1.classList.remove('active');
//     }
//     else if(slideClass.contains('active2')){
//     slideContainer.classList.remove('active1');
//     slideContainer.classList.remove('active2');
//     button1.classList.add('active');
//     button2.classList.remove('active');
//     button3.classList.remove('active');
//     }else{
//      slideContainer.classList.add('active1');
//      slideContainer.classList.remove('active2');
//      button2.classList.add('active');
//      button3.classList.remove('active');
//      button1.classList.remove('active');
//     }
// }
// let preActive=()=>{
//     button1.classList.remove('active');
//     button2.classList.remove('active');
//     button1.classList.remove('active');
//     if(slideClass.contains('active2')){
//     slideContainer.classList.add('active1');
//     slideContainer.classList.remove('active2');
//     button2.classList.add('active');
//     button3.classList.remove('active');
//     button1.classList.remove('active');
//     }
//     else if(slideClass.contains('active1')){
//     slideContainer.classList.remove('active1');
//     slideContainer.classList.remove('active2');
//     button1.classList.add('active');
//     button2.classList.remove('active');
//     button3.classList.remove('active');
//     }else{
//     slideContainer.classList.add('active2');
//     slideContainer.classList.remove('active1');
//     button3.classList.add('active');
//     button2.classList.remove('active');
//     button1.classList.remove('active');
// }
// }

let count=0;

let nextActive=()=>{
    if(count==0){
        slideContainer.classList.remove('active1');
        slideContainer.classList.remove('active2');
        button0.classList.add('active');
        button1.classList.remove('active');
        button2.classList.remove('active');
        count++
    }else if(count==1){
        slideContainer.classList.add('active'+count);
        slideContainer.classList.remove('active2');
        button1.classList.add('active');
        button0.classList.remove('active');
        button2.classList.remove('active');
        count++
    }else if(count==2){
        slideContainer.classList.add('active'+count);
        slideContainer.classList.remove('active1');
        button2.classList.add('active');
        button0.classList.remove('active');
        button1.classList.remove('active');
        count=0
    }
}
let preActive=()=>{
        button0.classList.remove('active');
        button1.classList.remove('active');
        button2.classList.remove('active');
        if(count==2){
        slideContainer.classList.add('active'+count);
        slideContainer.classList.remove('active1');
        button2.classList.add('active');
        button0.classList.remove('active');
        button1.classList.remove('active');
        count--
        }
        else if(count==1){
        slideContainer.classList.add('active'+count);
        slideContainer.classList.remove('active2');
        button1.classList.add('active');
        button0.classList.remove('active');
        button2.classList.remove('active');
        count--
        }else{
        slideContainer.classList.remove('active2');
        slideContainer.classList.remove('active1');
        button0.classList.add('active');
        button1.classList.remove('active');
        button2.classList.remove('active');
        count=2
    }
    }
next.addEventListener('click',nextActive);
pre.addEventListener('click',preActive);