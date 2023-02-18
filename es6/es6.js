// prototype -> script에만 있는 문법
//constuctor를 만들면 자동으로 만들어지는 공간.
//값을 추가하면 유전자처럼 모든 자식들이 물려받아사용가능
//prototype은 함수에만 생성됩니다.


function MyPet(name, age){
    this.name ='심바';
    this.age =4;
    this.sayHi = function(){
        console.log(`안녕, 내이름은 ${name}이야, 내 나이는 ${age}야`)
    }
    //arrow function쓰면 안되나? -> 응 안됨 오류남
}
MyPet.prototype.walk='집가';
let dog1 =new MyPet('simbaa',5);
let dog2 =new MyPet('nana',12);
console.log(dog1,dog2)

dog1.sayHi();
dog2.sayHi();

console.log(dog1.walk);

//__proto__를 이용해서 부모의 prototype를 알수 있음.

let 부모 ={name:'lee'};
let 자식 ={};

자식.__proto__.부모;
자식.name;
//이렇게 부모자삭 관계를 설정할수도 있음.

//문제1

function Students(name, age){
    this.name= "kim";
    this.age= 22;
    this.sayHi = function(){
        console.log(`HI! i'm${name}!`)
    }
}

let student1 = new Students('sim',23);
let student2 = new Students('lee',23);
student1.sayHi();
student2.sayHi();

//문제2

function Parent(){
    this.name = 'kim';
}
let a = new Parent();
a.__proto__.name = "park";//부모 name= 'park'을추가하는것
console.log(a.name);
//-> 이때 뭐라고 풀력될까? 정답은 kim. 원래가지고 있는걸 먼저 읽음

