
let saleAlert = document.querySelector('.saleAlert');
let alertNone = (alertBox) =>{
    alertBox.style.display='none';
}
// setTimeout(function(){
//     saleAlert.style.display='none';
// },5000);

setTimeout(alertNone,5000,saleAlert);
//파라미터를 ms뒤에 써야함.

// let setDiv =document.querySelector('.set');
// setInterval(() => {
//     setDiv.innerHTML+='<p class="new">20초마다 새로운 텍스트박스 생성</p>'
// }, 20000);

//1초마다 54321 숫자 변경 후 0 되었을땐 박스안보이게
let secSpan = document.querySelector('.sec');
let set = 5;

setInterval(()=>{
    set--;
    if(set>=0){
    secSpan.innerHTML=set;}
} ,1000);
if(set==0){
    saleAlert.style.display='none';
}

