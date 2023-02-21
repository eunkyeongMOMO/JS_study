// 1. 배열의 삭제 400,500을 삭제하는 code를 입력하세요
let nums = [100, 200, 300, 400, 500];
nums.splice(3,2); //잘라낼 첫번째 인덱스, 삭제할 배열갯수

console.log(nums);
let nums2 = [100, 200, 300, 400, 500];
nums2.pop(); //맨뒤에 배열 1개삭제
nums2.pop();
console.log(nums2);

//2. 배열의 내장함수
//배열 내장함수를 이용하여 코드를 입력하고 다음과 같이 출력되게 하세요

let arr = [200, 100, 300];
arr.splice(2, 0, 1000);
console.log(arr);
//[200,100,10000,300] 이 출력되야한다

//3. 변수의 타입
let =[100,200,300];
console.log(typeof(arr));
//object 
//array는 object이다.

//4.변수의 타입2
//다음 변수 a 를 typeof(a)로 넣었을때 출력될 값과의 연결이 알맞지 않은것음?
let typeA = 10 //number
let typeB = 2.22 // boolean 이 아니라 number임
let typeC = 'p' //string
let typeD = a =[1,2,3] //object

console.log( 'a:' + typeof(typeA));
console.log( 'b:' + typeof(typeB));
console.log( 'c:' + typeof(typeC));
console.log( 'd:' + typeof(typeD));

//문제 for문 계산
let num1 =10;
let num2 =2;

for (let i=1; i<5; i+=2){ num1 += i;}
console.log(num1+num2);

//6. false 값이 아닌것
//1.NaN 2.1 3."" 4.0 5.undefined -> 2 숫자 1은 true을 반환한다.

//7.변수명 변수명으로 사용할수 없는것 두개를 고르시오
//1.age 2.&age 3. let 4. _age 5. 1age => let, 1age 은 변수명으로 사용하지 못한다.

//8. 객체의 키 이름 중복

let obj ={
    "height":100, 
    "weight":78, 
    "weight":82, 
    "temperature":36, 
    "eyesight":1
};

console.log(obj['weight']);
//82가 나온다고 생각함 script는 코드를 위에서 아래로 읽어내리기 때문에 
//아래에 위치한 값이 나옴

//9.concat을 활용한 출력 방법
let year ='2023';
let month ='01';
let day ='18';
let hour ='14';
let minute ='34';
let second ='27';

let result =year.concat("/"+month+"/"+day+" "+hour+":"+minute+":"+second);

console.log(result);
//내장함수 concat()은 문자열, 배열을 하나로 합쳐주는 함수로, 
//기존의 값을 변경하지 않고 새로운 문자열, 배열로 반환합니다.

let oddNumber=[1,3,5,7,9];
let evenNumber=[2,4,6,8];

let number = oddNumber.concat(evenNumber);
console.log(number);
let sortNumber =()=>{
let sort= [...number].sort();
console.log(sort);
}
sortNumber();
//펼침연사자와 concat()함수의 차이?
//검색해도 안나옴...왜?

//문제 1~100까지 더하는거 for문 코드 짜기

let num5 = 0;

for(let i=1; i<=100; i++){
    num5 = num5+i;
}
console.log(num5);

//문제12 게임 캐릭터 클래스 만들기 주어진 코드 수정 안됨

class Wizard {
    constructor(health, mana, armor){
        this.health = health;
        this.mana = mana;
        this.armor = armor;
     
    }   
    attack= function(){
        console.log('power')};
}


const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();


//문제13 행성출력 
const Inner = document.querySelector('.inner');

const Space = (number)=>{
    let star=['Mercury','Venus','Earth','Mars','Jupiter','Saturn','Uranus','Neptune']
    for(let i=0; i<=star.length; i++){
        if(number==i){
          Inner.innerHTML=`<p>${star[i-1]}</p>`;
        }
    }
}
Space(1);

//문제14 369게임
let game369 = (num)=>{
    if(num % 3 == 0){
        console.log('clap')
    }else(console.log(num))
}

game369(3);
game369(2)
game369(9)

//문제15 자기소개

let selfIntrd=(name)=>{
    Inner.innerHTML+=`<p>hello! i'm ${name}!</p>`
}
selfIntrd('Simba');

//문제16 문자열 꺼꾸로 출력하기
// let upsdText=(text)=>{
//    let final ='';
//     for(let i =text.lebgth-1; i >= 0; i--){
//         final += text[i]}
//     return final;
// }

// console.log(upsdText('hello'));


let reversed = (upsdText) =>{
    let reversText = upsdText.split('').reverse().join('');
    console.log(reversText);
} 

//split('') -> 글자 배열로 바꿔주는 내장함수
//reverse() -> 배열 순서 거꾸로 바꿔주는 내장함수
//join('') -> 배열 다시 문자열로 바꿔주는 내장함수
reversed('hello World');


