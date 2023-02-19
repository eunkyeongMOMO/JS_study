const TabBtn = document.querySelectorAll('.tab');
const Detail = document.querySelectorAll('.detail');


for(let i =0; i<=TabBtn.length; i++){
    TabBtn[i].addEventListener('mouseover',function(){
        Detail.forEach((item)=>{item.classList.remove('on')})
        Detail[i].classList.add('on');
    })
}

// for문으로 최대한 간결하게짜야하고, 확장성을 생각해서 짜야한다. 
// querySelectorAll에는 classList.remove() 사용하면 에러나니까 for문안에
// for문, 혹은 forEach문써서 해결해야함.



const btn =document.querySelector('.reasonBtn');
const reason=document.querySelector('.reason');
const reason_bg=document.querySelector('.reason_bg');
const reason_close=document.querySelector('.reason_close');

let show_reason = ()=>{
    reason.classList.add('active');
    reason_bg.classList.add('active');
}
let close_reason = ()=>{
    reason.classList.remove('active');
    reason_bg.classList.remove('active');
}

btn.addEventListener('click',show_reason);
reason_bg.addEventListener('click',close_reason);
reason_close.addEventListener('click',close_reason);