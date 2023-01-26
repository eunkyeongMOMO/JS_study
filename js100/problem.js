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
//82가 나온다고 생각함 script는 코드를 위에서 아래로 읽어내리기 때문에 아래에 위치한 값이 나옴

//9.concat을 활용한 출력 방법
let year ='2023';
let month ='01';
let day ='18';
let hour ='14';
let minute ='34';
let second ='27';

let result =year.concat("/"+month+"/"+day+" "+hour+":"+minute+":"+second);

console.log(result);

