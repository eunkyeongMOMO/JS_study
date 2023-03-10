
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

//문제1. 셔츠선택시 서츠 사이즈 셀렉박스 보이고 모자선택시 모자컬러 셀렉박스

let shirts =[95,100,105,110,115];
let pants =[26,27,28,29,30];
let caps =['Red','Yellow','Blue'];
const formWrap = document.querySelector('.formWrap');
const SelectBox = document.querySelector('.selectBox');
const SelectBox2 = document.querySelector('.selectBox2');
const ShirtBox = document.querySelector('.shirtBox');
const capBox = document.querySelector('.capBox');


const selectChange=(select)=>{
        SelectBox2.innerHTML='';
        select.forEach(function(data){
       SelectBox2.innerHTML+=`<option>${data}</option>`})}
let valueChange = () =>{
    let SelectValue =SelectBox.value;
    console.log(SelectValue);
  
    if(SelectValue=='cap'){
        SelectBox2.classList.add('show');
        selectChange(caps);
    }else if(SelectValue=='shirt'){
        SelectBox2.classList.add('show');
        selectChange(shirts);
    }else if(SelectValue=='bottom'){
        SelectBox2.classList.add('show');
        selectChange(pants);
    }else{
        SelectBox2.classList.remove('show');
    }
    // if(SelectValue=='cap'){
    //     SelectBox2.classList.add('show');
    //     SelectBox2.insertAdjacentHTML('beforeend', bottomBox);
    // }else if(SelectValue=='shirt'){
    //     SelectBox2.classList.add('show');
    //     SelectBox2.insertAdjacentHTML('beforeend', bottomBox);
    // }else if(SelectValue=='bottom'){
    //     SelectBox2.classList.add('show');
    //     SelectBox2.insertAdjacentHTML('beforeend', bottomBox);
    // }else{
    //     SelectBox2.classList.remove('show');
    // }
}
SelectBox.addEventListener('input',valueChange)

//문제2 js로 html 노드생성해서 넣긔 위에이미함
//insertAdjacentHTML메소드써서 넣긔


//array, for 문제 1. 출석부에 이름있는지 확인후 있으면 '있어요', 없으면 '없어요' 출력
//find, indexof, filter사용금지

const Attendance =['흥민','영희','철수','재석','심바'];

let Find = (name)=>{
    let count=0;
    Attendance.forEach(
    (findName)=>{if(findName==name){count=1}})
    if(count==1){
    console.log('있어요')}
    else{console.log('없어요')}
}
Find('철수');
Find('아니');
Find('영희');
Find('심바');
   
//문제2.이놈의 구구단출력

for(let i=2; i<=9; i++){
    for(let j = 1; j<=9; j++){
      console.log ( i +'*'+ j +'=' +i*j)
    }
}

//문제3. 기존 평균점수 구하고 기존점수와 이번 모고점수를 비교하여 
//점수차를 표시하고 올랐으면 올랐네요.안올랐음 재수추천해주세요

let test= (array,score)=>{
    let result=0;
    array.forEach((data)=>{
        result= result + data
    });
    if(result / array.length<score){
        console.log('평균이 올랐네요')
    }else{console.log('같거나 떨어졌네요')}

}

test([10,20,30,40,50],40);
test([40,40,40],30);

