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