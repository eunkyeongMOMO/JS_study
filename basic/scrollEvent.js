const Logo = document.querySelector('.logo');
const Members = document.querySelector('.members');
const AlertBox =document.querySelector('.alertBox');
const ScrollInfo =document.querySelector('.scrollInfo');
//문제 1
window.addEventListener('scroll',()=>{
    if(window.scrollY>=100){
        Logo.classList.add('scrollLogo');
    }else{
        Logo.classList.remove('scrollLogo');
    }
})
//문제 2
Members.addEventListener('scroll',()=>{
    let userScroll = Members.scrollTop;
    //유저가 스크롤한 값
    let scrollHeight = Members.clientHeight;
    //눈에 보이는 div 높이값을 구해준다.
    let membersHeight =Members.scrollHeight;
    //실제높이를 구할수 있음.
    
    if((userScroll+scrollHeight+10)>=membersHeight){
        AlertBox.style.display='block';
    }

})
// document.documentElement = document.querySelector('html');

//문제3 스크롤 상태바 만들기.

window.addEventListener('scroll',()=>{
    const scrollTop = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
    const scrollwidth =(scrollTop/height) *100;
    ScrollInfo.style.width=scrollwidth+'%';
})