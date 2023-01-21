//기본 html 노드 변경

        document.getElementById('hello').innerHTML = "안녕";
        document.getElementById('hello').style.color = "orange";
        document.getElementById('hello').style.fontSize = "16px";
        let text = document.getElementById('hi');
        let textChenge =(innertext)=>{
            text.innerHTML=innertext;
        }
        textChenge('이렇게 바뀌면 성공입니다.');


// 변수를 사용한 다크모드 설정
let bgChenge = document.querySelector('.bgChenge');
let bodyD = document.querySelector('body')
let count = 0;


let clickCount = ()=>{
    count++;
    if(count%2==1){
        bgChenge.classList.add('dark');
        bgChenge.innerHTML='<i class="fa-solid fa-moon"></i> Dark Mode';
        bodyD.classList.remove('bgDark');
    }else{
        bgChenge.classList.remove('dark');
        bgChenge.innerHTML='<i class="fa-solid fa-moon"></i> Light Mode';
        bodyD.classList.add('bgDark');
    }
}

bgChenge.addEventListener('click', clickCount);

// let textChenge1 = ()=>{
//     bgChenge.classList.toggle('dark')
// }
// bgChenge.addEventListener('click',textChenge1);


//버튼 클릭시 alret 창 띄우기
let clossButton = document.querySelector('.close');
let alertBox1 =document.querySelector('.alertBox');
let alertBox = (state,innerText,color) =>{
    alertBox1.style.display=state;
    alertBox1.style.background=color;
    document.querySelector('.innerText').innerHTML=innerText;
}
let close = () =>{
    document.querySelector('.alertBox').style.display="none";
}
//콜백함수 -> 순차적으로 실행하고싶을때 사용
clossButton.addEventListener("click",close)





//파라미터 예시2
let p = document.querySelector('.parameter');

let plus = (a, b) => {
    let c = a*b;
    p.innerHTML += '</br>'+ c;
}
plus(12, 3);
plus(9, 6);

//토굴메뉴 만들기 classList add,remove

let ul = document.querySelector('.navbar');
let navbarShow =()=>{
 ul.classList.toggle('showNav');}
ul.addEventListener('click',navbarShow);

//로그인 모달 띄우고 유효성검사하기

let loginButton = document.querySelector('.login');
let modalBg = document.querySelector('.black_bg');
let modalClose = document.querySelector('.modalClose');
let modal= document.querySelector('.white_bg');
// let modalState =(state)=>{
//     modal.style.display=state;
//     modalBg.style.display=state;
// }

// loginButton.addEventListener('click', ()=>modalState('block'))
// modalBg.addEventListener('click',()=>modalState('none'));
// modalClose.addEventListener('click',()=>modalState('none'));
let modalShow=()=>{
    modalBg.classList.add('showModal');
    modal.classList.add('showModal');
}
let modalHide =()=>{
    modalBg.classList.remove('showModal')
    modal.classList.remove('showModal')
}
loginButton.addEventListener('click',modalShow);
//modalBg.addEventListener('click',modalHide);
modalClose.addEventListener('click',modalHide);

//submit 막기
let loginForm = document.querySelector('.loginForm');
let idBox =document.querySelector('#idBox');
let fwBox =document.querySelector('#fwBox');
let loginBtn = document.querySelector('.loginBtn');

loginForm.addEventListener('submit',function(e){
    e.preventDefault();
    if( idBox.value == ''){
        alert('ID를 입력하세요');
       idBox.focus();
    } else if ( fwBox.value == '') {
        alert('FW를 입력하세요');
       fwBox.focus();
    } else if(fwBox.value.length <= 6){
        alert('FW는 6자리 이상입력해주세요.')
    }
    else{
        alert('로그인되었습니다.');
    }
})

//input / change input은 값이 바뀌는 즉각즉각 코드가실행되고 
//change는 입력한 값이 바뀌고 포커스를 잃었을때 발생함


//function, if, 연산자 복습문제

let print = document.querySelector('.print');
let game369 = (n) =>{
    if(n%9==0){print.innerHTML +='박수!박수!!<br/>'}
    else if(n%3==0){
        print.innerHTML +='박수!<br/>'
    }else{print.innerHTML += '통과</br>'}
}
game369(3)
game369(6)
game369(11)
game369(9)
game369(12)
game369(44)
game369(18)

let pass = document.querySelector('.passPrint');

let passNonpass = (point1, point2) => {

  if((point1 >= 40 && point2 >=40) && (point1+point2 >= 120)){
        pass.innerHTML +='합격입니다.</br>';
    } else{
        pass.innerHTML +='불합격입니다.</br>';
    } }
  
passNonpass(70, 70); 
passNonpass(30, 100); 
passNonpass(50, 50); 
passNonpass(0, 120); 

//연산자 변수 문제

//1. 나이와 출신지역을 변수에 저장

let age = 33;
const homeTown ='경상남도 거창군';

//2. 다음변수가 작동하지 않는 이유를 서술하시오

let name ='park';
let id=0;

let showName = ()=>{
    let name ='kim';
    let id=1;
    console.log(name);
}
showName(); //'kim' 이 풀력됨
console.log(id); // 0이 출력됨

/**
 var-function scope, let, const-block scope를 가지기때문에 
{}안에서 선언된 변수는 {}밖에서 할당,사용,접근이 불가하다. 
전역변수로 선언된 변수는 {}안에서도 사용하능하다.
*/

//3. 이자율 계산하기
/** 철수는 은향애 예금을 하러갔는데 예금금액에 따라 이자율이 변경됨
    첫 예금액이 5만원 미만이면 이율이 연 15%
    첫 예금액이 5만원 아상이면 이율이 연 20%
    그래서 민준이는 
    1. 변수에 예금금액을 넣으면 
    2. 2년후에 총 예금액을 자동으로 출력해주는 기능을 스크립트로 짜려고하는데 
    어떻게짜야함?
 */



   let interest = (deposit)=>{
    let newDeposit =0;
    if(deposit>=50000){
    newDeposit = deposit *1.20 *1.20;}
    else{newDeposit = deposit *1.15 *1.15;}
    console.log(newDeposit);
   }

   interest(60000);
   interest(10000);

//방금 마신 커피의 양의 2/3만 리필 해주는곳이 있습니다. 총 2번 리필이 가능하며,
//예를들어 첫 주문이 90인경우 첫 리필은 60, 두번째 리필은 40을 해줍니다.
//처음마신 커피의 양의 따라 최대한 마실수 있는 커피의 양을 계산해주는 코드를 작성해봅시다.



let refill = (first) =>{
    let total = first + first * 2/3 +first * 2/3 * 2/3;
    console.log(Math.floor(total));
}
refill(90);
refill(360);

//퀴즈 ui 만들기 정답을 맞추면 정답 3번이상 못맞추면 멍청아 출력

let answer = document.querySelector('#answer');
let sendButton = document.querySelector('#sendAnswer');

let buttonCount= 0;

    sendButton.addEventListener('click', function(){
    buttonCount++;
    if(answer.value=='1335'){
    alert('정답입니다');
    }else if(answer.value!='1335'&&buttonCount>=3){
    alert('야이멍청아!')
    }
})

