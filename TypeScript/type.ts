//Node.js 설치 -> sudo npm install -g typescript
//tsconfig.json 파일 생성 후 해당파일에 옵션값 입력
//TS파일은 브라우저가 인식하지못하기때문에 JS파일로 변환한다음사용
//터미널에 tsc -w 입력하면 자동변환됨 
//----> 자동으로 안되면 tsc 파일명.ts 치면 됨

let Name:string ='simba';

let person:{name?: string} = {name : 'momo'}
//?를 넣으면 옵션속성이 된다 (입력될수도 있고 입력 안될수도 있는 키)

let age:string |number = 33;
//UnionType

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

//변수문법


