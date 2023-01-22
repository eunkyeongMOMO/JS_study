
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


//유효성 email 검사
/**
 '문자'.includes('문자열에 속해있는지 검사할 문자')
 ex) 'eunkyeong'.includes('y')
 결과값은 true, false로 반환됨.
 
 정규식[regular expression]
 /문자열에 속해있는지 검사할 문자/.test('검사할 문자')
 1.범위를 지정할수 있음 
 [a-zA-Z] -영어 알파벳중 하나라도 들어있음 true
 [ㄱ-ㅎ가-힣] - 한글문자 하나라도 들어있으면 true 
 /\s/ - 특수문자 포함아무문자 !1개! 들어있으면 true
/^a/- a로 시작하는 문자열이면 true
/a$/- a로 끝나는 문자열이면 true
/a|b a&b/ and, or기호도 사용가능합니다.

이메일 정규식으로 유효성검사하기
/\s+@\[a-z]+\.\[a-z]+/
.은 정규식에서 특수문자이기때문에 앞에 \붙여줘야한다.



*/

const EmailInput= document.querySelector('#email');
const PasswordInput =document.querySelector('#password');
const FormButton= document.querySelector('.formButton');

let sussess= ()=>{

    if(EmailInput.value=='' && PasswordInput.value==''){
        alert('Email, password를 입력해주세요');
    }else if(/^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(EmailInput.value)==false){
       alert('E-mail 형식에 맞게 입력해주세요.');
    }else{
       alert('E-mail인증해주세요');}
    
    if(/[A-z]/.test(PasswordInput.value)==false){
        alert('대문자를 포함해서 입력해주세요')
    }else{
        alert('완료되었습니다.')
    }
}
FormButton.addEventListener('click',sussess)

//return - 함수 안에 코드실행 끝. return문법 왜쓰나? ->결과값을 반환받을때

//소수점 있는 숫자연산시 주의점 ->  10진법인 수를 입력해도 계산시 2진법으로 변환하여 계산하기때문에 오류가 블상흜 있음
//숫자 소수점반올림하는법

const func = (a)=>{
    let num = (a * 1.4).toFixed(3);
    //toFixed(소숫점 몇자리까지 반올림할지?)메소드는 숫자 뒤에 붙여서 사용가능
    return parseFloat(num);
    //tofixed 사용시 문자로 반환됨 -> 숫자타입으로 바꿔서 출력해줘야함
    //parseInt, parseFloat써서 출력가능
}
console.log(func(7000))

//숙제

//1. 함수에 분과 초를 파레로 마라미터로 입력하면 ms단위로바꿔서 반환 함수

let Calculator=(m,s)=>{
   let ms= m * 1000 * 60 + s * 1000;
    console.log(ms);
}
Calculator(1,30);
Calculator(2,10);


//2. 가격을 파라미터로 입력하면 10%할인가를 뱉는 함수

let Sales =(price, flrst)=>{
let salePrice = 0;
if(flrst==true){
    salePrice = price*0.9 - 1.5;
} else{salePrice = price*0.9;}
return Number(salePrice.toFixed(1));
} 

console.log(Sales(70, false));
console.log(Sales(10, true));
