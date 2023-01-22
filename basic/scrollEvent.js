const Logo = document.querySelector('.logo');
const Members = document.querySelector('.members');
const AlertBox =document.querySelector('.alertBox');
window.addEventListener('scroll',()=>{
    if(window.scrollY>=100){
        Logo.classList.add('scrollLogo');
    }else{
        Logo.classList.remove('scrollLogo');
    }
})

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