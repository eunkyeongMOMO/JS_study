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