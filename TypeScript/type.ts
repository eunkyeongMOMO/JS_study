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


let person:{name?: string} = {name : 'momo'}
//?를 넣으면 옵션속성이 된다 (입력될수도 있고 입력 안될수도 있는 키)



type TypeSN = string|number;
//타입이 길다면? -> 타입을 변수로 지정해서 사용
let time:TypeSN ="11시";


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


