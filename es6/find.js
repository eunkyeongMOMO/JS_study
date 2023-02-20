

//Destructuring
let arr=[12,25,36];

let [a,b,c=13]=[2,3];
//array에 있는 값을 따로 변수에 담고 싶을때 사용, 디폴트 변수 지정 가능
console.log(c);

//obj에도 적용가능

let {name:Name = 'pongpong',age=2}={name:'simba', age: 5}
//obj는 key값이랑 변수 명이랑 동일해야 변수로 선언됨
//디폴트값 지정가능
//변수명 바꿔서도 가능 함 name:Name

//반대로 변수들을 obj에 넣고 싶은경우

let color ='white';
let texture = '변수짖는게 제일어려워';

//let obj1 = {color:color, texture:texture};
// 원래 이렇게 적어야하지만 es6부터 키랑 값이랑 동일한 이름일 경우
let obj1 = {color, texture};//이렇게만 적어도 됨

let print = ({color, texture})=>{
    console.log(color);
    console.log(texture);
} 

//함수 파라미터에도 씀

//문제1 abc와 address와 number라는 변수는 각각 무슨 값을 가지고 있을까요? 

var [number, address] = [ 30, 'seoul' ];
var {address : abc , number = 20 } = { address, number };
//abc, address='seoul' ,number =30

//문제2  키, 몸무게, 상의사이즈, 하의사이즈 정보를 각각 뽑아서 4개의 변수를 만들고 싶습니다.
let 신체정보 = {
    body: {
      height: 190,
      weight: 70
    },
    size: ["상의 Large", "바지 30인치"],
  };
let {body:{height, weight}, 
    size:[topSize, bottomSize]} = 신체정보;

    console.log(height,weight,topSize,bottomSize);
