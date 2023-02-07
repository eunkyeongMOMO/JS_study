//'use strict';
//strict mode -> 좀더 엄격하게 사용할 수 있음
//var, let, const안쓰고 변수설정불가

console.log(this);
//this -> window

function myFuncttion(){
    console.log(this);
}
myFuncttion();
window.myFuncttion();
//일반 함수안에 this -> window
//strict mode -> undefined로 뜸


let object ={
    data : 'javascript',
    day: 230130,
    name: 'simba',
    function2: function(){
        console.log(this);
    }
}
object.function2();
//object 안에 함수에서 this를 쓰면 함수를 가지고 있는 object를 말함

let object2 ={
    data:{
        function1:function(){
            console.log(this);
        },
        function3:()=>{
            console.log(this);
        }
    }
}
object2.data.function1();
//data가 나옴 

object2.data.function3();
//()=>{}의 경우, this값을 함수밖에 있던거 그대로 상속받아씀. this-> window로 나옴
//함수나 변수를 전역공간에서 만들면 글로벌 오브젝트인 {window}에 보관됨.


//constructor

function ConstructorFunction(){
    this.name = 'kim' 
    //instance
}
let object4 = new ConstructorFunction();

console.log(object4); //name:kim으로 출력됨

const button = document.querySelector('#button');
button.addEventListener('click', function(e){
    console.log(e.currentTarget);
    console.log(this); 
    //e.currentTarget이랑 같은 의미로 사용가능함
    //이벤트리스너에 사용시 지금 이벤트가 일어난 노드를 가르킨다.

    let array = [3,66,78,40];
    array.forEach(function(a){
        console.log(a);
        console.log(this); //window로 출력됨
    })
    //함수가 쓰인 위치에 따라 this겂아 버뀜.
})

const object12 = {
    names:['kim','lee','park'],
    myfunction2: function(){
        console.log(this); //함수를 가지고 있는 오브젝트
       object12.names.forEach(()=>{
        console.log(this);
       })//arrow function을 쓰면 this값은 상위에 this 값을 상속받아 오브젝트임
       object12.names.forEach(function(){
        console.log(this);
       })//오브젝트 내에서 콜백함수를 쓰면? window가 됩니다.

    }
}

object12.myfunction2();

/** function 선언식, 호이스팅됨
let myFunction3 = function(){} 함수표현식
1. 코드들을 기능으로 묶고싶을때
2. 입출력기계를 만들고 싶을때 사용

arrow function 장점
1. 직관적으로 사용가능
2. 파라미터가 1개일때 ()생략가능
3. 코드가 한줄이면 {} 생략가능
*/

let arrowFunc = (a)=> { console.log(a+10);} 
arrowFunc(15);



/**
arrow function 예시

1. forEach 콜백함수
*/
let arr =[1,4,5,6,7];

arr.forEach(a=>console.log(a))

//이벤트리스너

const Button2 = document.querySelector('#button2');

Button2.addEventListener('click', 
(e)=>{
   console.log (this); //this값을 정의해주지 않음. 상위값을 상속받아서 나옴->windoww로나옴
    //e.currentTarget을 this값으로 사용하고싶으면 선언식쓰면됨
console.log(e.currentTarget);
})

let object5 ={
    func3 :()=>{console.log(this)}
}
object5.func3()
//이경우에도 this값은 window로 나옴

//문제 1
const Inner = document.querySelector('.inner'); 
let people = {
    name :'심바아아아',
    sayHi :function(){
        Inner.innerHTML+=`<p>안녕 나는 ${this.name}</p>`
    }
}
people.sayHi();
//문제 2
//data안에 모든 숫자를 더해서 콘솔창에 출력하시오. dataObject 안에 코드작성금지.
let dataObject={
    data:[1,2,3,4,5]
}
dataObject.plus = function(){
    let hap = 0;
    this.data.forEach(
        (a)=>{
            hap+=a;
       
        })
   console.log(hap);
}
dataObject.plus()
//문제3 setTimeout
const Button3 = document.querySelector('.button3');
Button3.addEventListener(
    'click',function(){
        setTimeout(()=>{
            console.log(this.innerHTML)
        },1000)
    }
)

/**변수정리(var. let, const)
        선언    할당    범위
var -> 가능     가능    function
let ->불가능    가능    {}
const ->불가능  불가능  {}

호이스팅 -> 변수의 선언을 변우 범위 맨위로 끌고오는 현상
변수 동시에 여러개 만들기 -> ,로 구문하여 여러개 생성가능
전역변수 -> 모든 곳에서 쓸 수 있는 변수[global]  
        window.변수명 ="값";으로도 전역변수 선언가능[권장하는 방식]
*/
//Object.freeze(ObjectName) -> 오브젝트 안 메소드 값도 변경 절대 불가능함 


//문제1 

if(true){
    let a = 1;
    var b = 2;
    if(true){
        let b =3;
        console.log(b) //3
    }
    console.log(b) // 2
}
//문제2
// myFunction5();

// function myFunction5(){
//     console.log(hi);
//     let hi = hellow;
// } 

//콘솔창에 뭐라고 출력됨? 에러남

//문제3
// myFunction5();

// var myFunction5 = function(){
//     console.log(hi);
//     var hi = hellow;
// } 
// //에러남

//문제4
let a =1;
var func4 =function(){
    a = 2;
}
console.log(a); //1

//문제5
let s = 1
var g = 2;
window.s = 4;
window.g = 3;
console.log(a+b)//7 

//문제6
// for(var i=1; i <= 5; i++ ){
//     setTimeout(()=>{console.log(i)}, i*1000);
// }
//-> 해당코드 출력시 5만 연속하여 출력되는데 해결방법은?

for(let i=1; i <= 5; i++ ){
    setTimeout(()=>{console.log(i)}, i*1000);
}
//var->let으로 바꾸면됨 
//문제7

const modalBox = document.querySelectorAll('.modal');
const modalButton = document.querySelectorAll('.modalButton');

// for(var i=0; i<3; i++){
//     modalButton[i].addEventListener('click', ()=>{
//         modalBox[i].style.display='block';
//     })
// }
//왜실행안되는지 맞춰라

for(let i=0; i<3; i++){  
    modalButton[i].addEventListener('click', ()=>{
        modalBox[i].style.display='block';
    })
}
//var->let으로 바꾸면됨

//template literals ``사용하여 문자열을 표기하는것
//엔터키사용가능, 변수넣기 좋음 

let nyam=['심바','은경이','현이'];

nyam.forEach((a)=>{
    console.log(`안녕 내이름은 ${a}얌!`)
})

//tagged literal

let myPet = 'SIMBA';

function tagged(string,variable){
    console.log(string);
    console.log(variable);
//예시, 글자 순서변경
    console.log(string[1] + string[0])
}


tagged`우리집 강아지 이름은 ${myPet} 이고, 상당히 귀엽습니다`

//`문자`를 해체할수 있음. 단어순서를 변경, 제거하거나 변수의 위치를 옮길수있음
//함수(파라미터1[문자], 파라미터2[변수]))만들고 함수호출시``의 문자열을 넣어주면 문자들은 array로뽑아주고 변수는 따로 출력해줌
//{}기준으로 나눔,


//문제1

let pants =20;
let socks =100;
console.log(`바지 ${pants} 양말 ${socks}`);
//작성했는데 바지랑 양말의 갯수가 반대였다. 
//이때 tagged literal을 이용하여 글자 순서를바꿔라

let tagged2 = (string,...variable)=>{
    console.log(`${string[1]}${variable[0]}  ${string[0]}${variable[1]}`);
}
tagged2`바지 ${pants} 양말${socks}`;

//문제2 
//pants가 0일때 솔드아웃으로 출력하기
let tagged3 = (string,...variable)=>{
    if(variable[0]==0){
       console.log(`Pants SoldOut  ${string[0]}${variable[1]}`)
    }else{ console.log(`${string[1]}${variable[0]}  ${string[0]}${variable[1]}`)}
}
pants=0;
tagged3`바지 ${pants} 양말${socks}`;
pants=2;
tagged3`바지 ${pants} 양말${socks}`;


/**spread operator[펼침연산자] */

//array에 사용시 대괄호 제거

let array3=['hellow','world']
console.log(array3);//['hellow','world']
console.log(...array3);//hellow world

//예시

let m = [1,2,3]
let o = [4,5]
let mo = [...m,...o]
console.log(mo);

//array deep copy시 주로 사용함
let mm = [1,2,3];
let mmoo = [...mm];
mm.push(5,9)
console.log(mm);
console.log(mmoo);
//문자열에 사용시

let string2 ='hello';
console.log(string2);//hello
console.log(...string2); //h e l l o

//object에 사용시

let object77 ={a:1, b:2};
let object88 ={...object77, c:9, d:7};

console.log(object88);//{a: 1, b: 2, c: 9, d: 7}

//값 중복시 ->뒤에 온게 최종값이 됨.

//힘수에 파라미터 넣을때 사용

function plusplus(a,b,c){
    console.log( a+b+c );
}
let num=[10,50,20];
plusplus(...num);
plusplus.apply(undefined, num);

//apply,call-> 함수옮겨오는거 파라미터를 넣읗때 함수.apply/call(적용할 함수명, 파라미터)
//apply array 형대 가능 call은 불가능 

let parson ={
    hi: function(){
        console.log( this.name + 'hi!!!!!hello!');
    }
}
let parson2 ={
    name:'simmbaaaa'
}
parson.hi()
parson.hi.apply(parson2);



//arguments
//단점, 득정 파파미터만 분활하여 출력 불가능
let arg = (a,b,c) => {
    for (let i =0; i<= arguments.length; i++){
        console.iog(arguments[i]);
    }
}

//Rest 파라미터 -> 파라미터들을 모두 []에담아줌
//특정지어서 사용할수있음 [장점]

let rest1 = (a,b,...rest)=>{
    console.log(rest);
}

rest1(1,2,3,4,5,6) // 3,4,5,6만 출력됨
//rest는 맨 마지막에 써야하며 한번만 사용가능하다.
//문제1

let rest2 = (...rest)=>{
    for(let i =0; i<rest.length; i++){
        console.log(rest[i]);
    }
}

rest2(55,66,7,8,09,44,66,34);


//문제2 spread

let aaa =[1,2,3];
let bbb ='이심바';
let ccc =[...aaa, ...bbb]; //출력 결과

// ccc = [1,2,3,'이','심','바'];

//문제3

var a1 =[1,2,3];
var a2 =['you','are'];
var a3 = (a1,a2)=>{
    console.log([[...a1],...[...a2]])
}
a3(a1,a2);
//[1,2,3],'you','are';

//문제4 default

function de(a=5, b= a*2){
    console.log(a+b);
    return 10;
}
de(3);
//9

//문제5 
function hamsu (aa=5, b=aa+1){
    console.log(aa+b);
}
hamsu(undefined,undefined);
// NaN

