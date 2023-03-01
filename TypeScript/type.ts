//Node.js 설치 -> sudo npm install -g typescript
//tsconfig.json 파일 생성 후 해당파일에 옵션값 입력
//TS파일은 브라우저가 인식하지못하기때문에 JS파일로 변환한다음사용
//터미널에 tsc -w 입력하면 자동변환됨 
//----> 자동으로 안되면 tsc 파일명.ts 치면 됨

//변수설정
let Name:string ='simba';
let birthYear:number = 20019;
let my_pet:string[] = ["nana","momo","simba"];
let my_pets:{name:string, age:number} = {name:'nana', age:12}

//타입 지정 원래 자동으로 되기 때문에 생략가능하다.

//문제1

let my_name:string ='eunkyeong';
let my_age:number =33;
let my_plcBrt:string ='seoul';
//문제2
let favoriteSinger:{[key:string]:string}={'가수':'종현', '노래':'환상통'}

//문제3
type Project ={member:string[], days:number, started:boolean}

let project:Project ={
    member:['ming','momo'], 
    days:22,
    started:false,
}


//타입을 미리정하기 애매할때?

let age:string |number = 33;
//UnionType 문자or숫자들어오는 변수일때 ->할당된 값에따라 가변적으로변함
let members: (number|string)[]=['4',3];
let newMembers: {new:boolean|number, name:string}={name:'simba',new:false};

//anyType -> 모든 자료형을 허용해주는것 -> 타입 해제하는 문법
//unkuow -> any랑 같은 역할, 근데 좀더 안전함 

//타입이 맞아야 사칙연산도가능함 -> 안맞으면 에러남.


//문제1
let age2 : string|number;
//age2+1 ->에러남, 에러나는이유는 
//문자에서 +는 문자를 함쳐주는 용도이고 number는 사칙연산인데 나이값이 정의되지않았음


//문제2 변수타입지정

let User1:string ='lee';
let user_age:undefined|number = 31;
let married:boolean = false;
let simba : (string|number|undefined|boolean)[] = [User1,user_age,married];


//문제3

let shcool:{score:(boolean|number)[], teacher:string, ftiend:string|string[]} ={
    score:[77,88,100],
    teacher:'phil',
    ftiend:'john'
}
shcool.score[4] =false;
shcool.ftiend=['lee',shcool.teacher];
let person:{name?: string} = {name : 'momo'}
//?를 넣으면 옵션속성이 된다 (입력될수도 있고 입력 안될수도 있는 키)

//함수에 타입 지정하는법, vuoid타입

const my_function2 =(num :number) :number =>{
    return num *5;
}

//return 값이 없을때 or return하고 싶지 않을때 ---> void

const my_function3 =(name?:string) :void=>{
    
}
//파라미터가 입려되지 않으면 에러가 나는데 이렇때 ?를 쓰면 에러가안남
//변수?:string -> 변수:string|undefined 인 uniontype임

//문제 1. 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고
//아무것도 파라미터로 입력하지 않고 함수를 사용하면 "이름이 없습니다" 를 출력하는 함수를 만들어봅시다.
//파라미터와 return 타입지정도 잘 해봅시다. 

const NamePrint = (name?:string)=>{
    if(name!==undefined){
        console.log(`안녕하세요! 제 이름은 ${name}입니다.`);
    }else{console.log('이름이없어용')}
}

NamePrint('은경');
NamePrint();

//문제2함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어보십시오.
const Number_length = (number:number)=>{
    let numberTostring = number.toString();
    let numlength = Number(numberTostring.length);
    console.log(`입력한 숫자는 ${number}이며, 자릿수는 ${numlength}입니다.`);
}

Number_length(2536897);

//문제3 결혼 가능 확률을 알려주는 함수를 만들어봅시다. 
//월소득(만원단위), 집보유여부(t/f), 매력점수 상중하->상일때만 100점;
const marriage = (salary:number, aprtm:boolean, charm:string)=>{
    let total:number =0
    let aprtmScore =0;
    let charmScore =0;
    if(aprtm===true){
        aprtmScore = 500;
    }else(aprtmScore = 0);
    if(charm==='상'){charmScore=100;} else{charmScore=0}
    total=salary+aprtmScore+charmScore;
    if(total>600){
        console.log(`당신의 총점은 ${total}점 으로 결혼 할 수 있습니다.`)
    }else{console.log(`당신의 총점은 ${total}점 으로 결혼 못해!못해!`)}
}

marriage(300, false, '상');
marriage(250, true, '하');


//Narrowing -> type이 아직 하나로 확정되지 않았을경우
//어떤 변수가 타입이 아직 불확실하면 if문등으로 narrowing해줘야 조작가능
const narrowing = (x:number|string)=>{
    // if(typeof x ==='string'){ //typeof를 쓰면 변수타입을 *문자열로 반환해줌
    //      return x+'1'; }
    //    else{return x+1;}
    let array :number[] = [];
    if(typeof x === 'number'){
        array[0] = x;
    } 
    //typeof / 속성명 in 오브젝트 / 인스턴스 instanceof 부모 <- 해당 문법들로 narrowing가능
}

// assertion 타입덮어쓰는 문법

const assertion = (x:number|string)=>{
    let array : number[] =[];
    array[0] = x as number;
    //변수 x를 number타입으로 덮어줌
    //옛날 문법 <number>변수
    //1. unionType 인 변수만!!!! narrowing할때 씁니다.
    //2.무슨 타입이 들어올지 100%확실할때 쓰세요.(굳이 쓸필요없음. 버그 추적못함...!)
}
/** 
문제1  숫자여러개를 array 자료에 저장해놨는데
가끔 '4', '5' 이런 식의 문자타입의 숫자가 발견되고 있습니다.
이걸 클리닝해주는 함수가 필요합니다. 
클리닝함수( ['1', 2, '3'] ) 이렇게 숫자와 문자가 섞인 array를 입력하면
[1,2,3] 이렇게 숫자로 깔끔하게 변환되어 나오는 클리닝함수를 만들어오고 타입지정까지 확실히 해보십시오
*/

const array_cleaning =(array : (number|string)[])=>{
    let new_array: number[] = [];
    array.forEach((number)=>{
        if(typeof number === 'string'){
           new_array.push(Number(number)) ;
        }else {new_array.push(number)}
    })
    console.log(`claening after : ${new_array}, ${typeof new_array[2]}`);
}
array_cleaning([1,3,'33',44,5,7,8,'98']);

//왜 for문은 안대? 돼야지?

// const array_cleaning02 = (array:(number|string)[])=>{
//     let new_array:number[] =[];
//     for(let i=0; i<=array.length; i++){
//         if(typeof array[i]==='string'){
//             new_array.push(Number(array[i]))
//         }else if (typeof array[i] ==='number')
//         {new_array.push(array[i])
//         }
//     }
//     console.log(`claening after : ${new_array}, ${typeof new_array[2]}`);
// }
// array_cleaning02([1,3,'33',44,5,7,8,'98']);

/**
그 선생님이 가르치고 있는 과목중 맨 뒤의 1개를 return 해주는 함수를 만들어봅시다.
 */
let teacher01= { subject : 'math' }
let teacher02= { subject : ['science', 'english'] }
let teacher03= { subject : ['science', 'art', 'korean'] }

const subject_return =(teacher:{subject:string|string[]})=>{
    if(typeof teacher.subject ==='string'){
        console.log(`선생님이 가르치는 과목은 ${teacher.subject}`)}
        else if(Array.isArray(teacher.subject)){
            console.log(`선생님이 가르치는과목은 ${teacher.subject.length}개 이고,
             그중 마지막 과목은 ${teacher.subject[teacher.subject.length-1]}입니다.`)
        }
    }
    subject_return(teacher01);
    subject_return(teacher02);
    subject_return(teacher03);

//-------

type TypeSN = string|number;
//타입이 길다면? -> 타입을 변수로 지정해서 사용
let time:TypeSN ="11시";

type Animal=string|number|undefined ;
let animal:Animal ='dog';

type Animal2 = {name:string, age:number};

let animal2:Animal2 = {name:'SIMBAA', age:5}
//가독성이 좋음, 타입 작명할땐 첫글자는 대문자로 지어야함

//object readonly -> 수정하면 에러남! 하지만 js에선 실행댐;

type Friend = {readonly name:string, age?: number}
const friend:Friend ={
    name:'rani'
}

type Name = string;
type Age = number;
type Person = Name|Age;
//Person은 string, number타입이된다.

type PositionX = {x:number};
type PositionY = {y:number};
//type 변수 extend하기
//&연산자로 object Type extend

type NewType = PositionX & PositionY;

//type은 재정의가 불가능하다.

//문제1  object 타입을 정의한 type alias 두개를 & 기호로 합칠 때 중복된 속성이 있으면 어떻게 될까요?

type Person1 ={name:string , age:number};
type Pet ={age:number, color:string};

type NewType2 = Person1&Pet;

let myPet :NewType2 ={name:'은경',age:33,color:'warmTone'};
//아예 속성명:타입 둘다 같으면 에러안남, 중첩되버림 하나라도 다르면 에러남;


//문제2
type Shirts ={
    color?:string,
    size:number,
    readonly position:number[]
};

const test:Shirts={size:22, position:[22,55,66]};

//문제3 type alias만들기
// { name : 'kim', phone : 123, email : 'abc@naver.com' }

type UserInfo = {name:string, phone:number, emall:string, adult:boolean}

let user_info:UserInfo = { name : 'lee', phone : 1255553, emall:'simba@momo.com', adult:true}


//LiteralTypes -사전에 지정한 가뵤만 들어올수 있게 하는것.

let MyPet :'simba'|'momo';

//MyPet='nana' 에러나는대 너무 슬프자나...

const function5 = (a:'hello'): 1|0 =>{
  return 1;  
}
//파라미터에 무조건 'hello'만 가능, 리턴값으로 1혹은 0만 가능

const function10 = (a: 'rock' | 'Paper' | 'Scissors') :('rock'|'Paper'|'Scissors')[]=>{
return ['Paper','Scissors'];
}

//LiteralTypes 의 문제점

let data = {name:'simba'} as const
//as const
// !!!!object value값을 그대로 타입으로 지정해줌!!!
//name type = 'simba'가 되는거임
//object속성을 모두 readonly로 바꿔줌! -> 속성값 변경 불가

const my_function5 =(a:'simba')=>{
    return a;
}
//type이 'simba'인것만 쓸수있음
my_function5(data.name)
//-------------------

//function Type 저장하는 방법

type FunctionType = (a:number) => number;

const my_function10:FunctionType = (a)=>{
    return a+5;
}
//함수표현식에만 함수type타입지정

let UserInfo ={
    name :'simba',
    age : 2,
    //changeName: (name:string)=> void,
    nextAge:(age:number):number =>{ return age+1;},
}
type FunctionType2 = (x:string)=>string;

const cutZero:FunctionType2=(string)=>{
    const stringArray= string.split('');
    if(stringArray[0]==='0'){
        stringArray.shift();        
    }
    const filterString = stringArray.join('');
   // return `입력한 값 ${string} 첫 글자0일 경우 제거한 값${filterString}`;
    return filterString;
}

console.log(cutZero('09897'));
console.log(cutZero('0777797'));

type RemoveType = (a:string)=> number;

const removeDash:RemoveType = (phoneNumber)=>{
    let stringArray= phoneNumber.split('');
    console.log(stringArray);
    let filterArray = stringArray.filter((element) => { return element !== '-'});
//filter 함수쓸때 꼭 return 써줘야함.
    let joinArray = filterArray.join('');
    let numberChange = Number(joinArray);
    return numberChange;
}
console.log(removeDash('---2555-7890'));

const NewFunction = (phone:string, func1:FunctionType2, func2:RemoveType)=>{
    let result = func1(phone);
    let result2 = func2(result);
    console.log(result2) ;
}
NewFunction('010-9955-0543', cutZero, removeDash)


function my_function (num : number) :number{
    return num *5;
    //파라미터, 리턴값 둘다 number타입만 가능하다.
}

//array에 쓸수있는 tuple 타입 

type Member =[number, boolean, string];
let john:Member =[30405, true, 'simba'];
//첫번째값은 무조건 string, 두번째값은 무조건number...

//object에 속성값 한번에 지정하는방법

type Today = {
    [key:string] : string;
}
//속성이 문자면 값도 문자타입이어야한다. 

class User{
    name:String;
    constructor(name:string){
        this.name = name;
    }
}
//class의 경우 먼저 변수를만들어서 타입을 지절한 다음 사용해야함


//typescript로 html조작할때 주의점.

//셀렉터로 찾은 html요소는 element|null 인 union type입니다.
const Title = document.getElementById('title');
//type narrowing해줘야함
if(Title!==null){Title.innerHTML = 'Hi MOMO!'}

//instanceof 연산자사용해서 narrowing하는 방법

if(Title instanceof Element){
    Title.innerHTML+='<br>집 가고 싶어';
}
//가장많이 사용하는 방법


const Title2 = document.getElementById('title2') as Element;
//비상시, 100%확신할때쓴다. 잘안쓰는게 좋음
Title2.innerHTML = '내일 또 출근인데!';

if(Title2?.innerHTML){
    Title2.innerHTML+='<br>언제 집에가지..?';
}
//?.붙이면 Title2안에 innerHtml속성이 있는지? 없으면 undefined반환

//a tag href속성 바꾸기

const Link = document.querySelector('.link');

if(Link instanceof HTMLAnchorElement){
    Link.href = 'https://kakao.com';
}
//a태그의 경우 엘레먼트타입을 정확하게 기입해야함

const Button = document.querySelector('#button');
const ButtonBox = document.querySelector('.buttonBox');

const ShowBox = ()=>{
    if(ButtonBox instanceof Element){
        ButtonBox.classList.toggle('active');
    }
}

Button?.addEventListener('click', ShowBox)

//문제1 ->버튼 누르면 이미지 바꾸기

const ImgButton = document.querySelector('.change');
const Image1 = document.querySelector('.image');

const imgChange = () => {
    if(Image1 instanceof HTMLImageElement){
        if(Image1.src==='./change.webp'){
            Image1.src='./test.webp';
        }else{Image1.src='./change.webp'}
    }
}
ImgButton?.addEventListener('click', imgChange);

//문제2

const NaverLink = document.querySelectorAll('.naver')

NaverLink.forEach((a)=>{if(a instanceof HTMLAnchorElement){
    a.href='https://kakao.com'
}})


//------class문법 type정하기

class PersonClass{
    data:number = 0;
    name:string;
    age:number;
    //타입스크립트 costructor쓸 변수는 반드시 위에서 필드값을 적어줘야함.+타입지정도 같이해줌
    constructor(name:string, age:number){
        this.name=name;
        this.age=age;
    }
    nextAge = () =>{
        console.log(this.age+1);
    }
}

let person22 = new PersonClass('eunkyeong',33);
let person32 = new PersonClass('jun',30);

person22.nextAge();
person32.nextAge();
console.log(person22.data);


//문제1 Car class 생성
/**
 1. model, price를 가진 오브젝트
 2.tax 함수-> price의 10%를 출력
 3. model, price,tax return Type지정
 */

 class Car {
    model:string;
    price:number;
    constructor(model:string, price:number){
        this.model=model;
        this.price=price;
    }
    tax=():number=>{
        let CarTax= this.price *0.1;
        console.log(`이 차는 ${this.model}이며, 가격은 ${this.price}, 부가세는 ${CarTax} 총합${this.price+CarTax}입니다.`)
        return CarTax;
    }
 }
 let Audi = new Car('audi R8',8700);
 let LandRove = new Car('Range Rover',7500);

 Audi.tax();
 LandRove.tax();

 //문제2. class인데 파라미터가 잔뜩들어가있는 classWord
 /**
  1. obj 만들때 파라미터로 숫자 혹은 문자를 입력하면 
  각각 타입에 맞는 배열안에 담기
  2.타입지정
  */

  class NumOrStr {
    num;
    str;

    constructor(...param:(string|number)[]){
        //레스트파라미터는 배열이라 꼭 []타입으로 타입지정해줘야함. 안그러면 에러남
    
        let numArray:number[]=[];
        let strArray:string[]=[];
        
        param.forEach((a)=>{if(typeof a ==='number'){
            numArray.push(a);
        }else if(typeof a ==='string'){
            strArray.push(a);
        }})
        this.num=numArray;
        this.str=strArray;
    }
  }

  let object = new NumOrStr('simba',3,4,6,'nana','momo','rani');
  console.log(object.num);
  console.log(object.str);


  //--------interface

interface Squere {color:string, width:number}

let square:Squere ={color:'blue', width: 200}

interface Student {name:string}
interface Teacher extends Student {age:number}

//extends가능 -> 복붙하는것

// type & ->두 타입 다 만족하는것 ,중복 발생해도 미리 에러안나서 주의해야함. 사용할때는 에러남.

type Animal3 ={name:string}
type Cat = {age:number} & Student
//interface도 &기호 뒤에 붙여서 사용 할 수 있음

let student:Student = {name:'lee'}
let teacher:Teacher = {name:'nam', age:50}

//!!!!interface 중복선언가능, type 중복선언 불가능!!!!
//외부 라이브러리 같은 경우 interface가 더많음. 더 유연하게 사용가능
//보통 object는 interface로 많이씀, 중복은 에러로잡아줌. 


//문제1 intterface를 이용해서 간단한 타입만들기

interface Product { brand: string, serialNumber:number, model:string[]}
let product:Product = {brand:'samsung', serialNumber:1360, model:['TV','phone']}

//문제2 array 안에 object여러개

interface Cart {product:string, price:number}
let cart:Cart[] = [{product:'청소기', price:60000},{product:'휴지',price:9000}]

interface Card extends Cart {card:boolean}

let card:Card ={product:'청소기', price:60000, card:false}

interface Calculator{
    plus:(a:number, b:number) => number,
    minus:(a:number, b:number) =>number
}
let calculator:Calculator = {
    plus (a, b){return a+b},
    minus (a , b){return a-b}
}

console.log(calculator.plus(5,6));
console.log(calculator.minus(10,3));