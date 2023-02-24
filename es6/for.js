//반복문
//1. 코드를 여러번 실행 2. array, obj에서 자료를 꺼내쓸때 

class parents{}
parents.prototype.name='lee';
let me = new parents()
//for in반복문으로 me를 돌렸을때 부모에 프로토타입에 들어있는 lee도 출력됨

let obj ={name:'simba', age:30}
Object.getOwnPropertyDescriptor(obj,'name');
//{value: 'simba', writable: true, enumerable: true, configurable: true}

//enumerable -셀수 있는지 여부, 반복문에서 출력할건지의 여부
//기본값이 ture임


for(let i = 0 ; i <3; i++){}

//s[1,3,4,5].forEach()
//for in - 오브젝트전용 
//for of
for(let key in obj){
    //오브젝트에 있던 값을 전부 하나씩 꺼내 쓸때 enumerable한것만 반복해준다. 
    //오브젝트에 들어있는 키값만큼 반복됨 
        //부모의 prototype도 반복해줌
    if(obj.hasOwnProperty(key)){
    //내가 가지고 있는값만 출력하고싶을때 써줘야함. 부모로부터 상속받은거 출력 X true,false 로 남음
    //그래서 if문 안에 써줘야한다.
    console.log(obj[key]);
}}

let array =[2,3,5,6,8]
for(let value of array){
    //해당 array안에 값들을 반복해서 출력해줌 
    //[문자,aguments,NodeList,map,set]에만 사용가능
    console.log(value);
}

