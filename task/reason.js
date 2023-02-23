
//이벤트 객체
// e.target -> 유저가 실제로 클릭한 html요소
// e.currentTarget -> 이벤트 리스너가 달린 곳. this로 표현가능
// e.preventDefault(); -> 이벤트의 기본동작을 막아주는 것
// e.stopPropagation -> 상위 요소로의 이벤트 버블링 막는 것

const btn =document.querySelector('.reasonBtn');
const reason=document.querySelector('.reason');
const reason_bg=document.querySelector('.reason_bg');
const reason_close=document.querySelector('.reason_close');

let show_reason = ()=>{
    reason.classList.add('active');
    reason_bg.classList.add('active');
}
let close_reason = (e)=>{
    if(e.target == reason_bg || e.target == reason_close){
        reason.classList.remove('active');
        reason_bg.classList.remove('active');
    }  
}

btn.addEventListener('click',show_reason);
reason_bg.addEventListener('click',close_reason);
reason_close.addEventListener('click',close_reason);