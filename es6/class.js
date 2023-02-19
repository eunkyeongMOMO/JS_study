//es6 문법으로 constructor 만듣는법

class parents {
    constructor(name){ //여기에 적으면 다 상속됨
        this.name =name;
        this.sayHi = function(){
            console.log('안녕하세요, 저는 '+ name+'입니다')
        } 
    }
    //여기에 적은 함수, 변수는 상속되지 않음. 부모의 prototype애 속해있음.
}

let child = new parents();

child.__proto__ // 부모요소 출력
Object.getPrototypeOf(child);//부모요소 출력

//객체지향 문법을 왜 쓰냐면, 오브젝트를 쉽고 간단하게 여러가지 만들고싶을때                                                                                                                                                                                                                                                             
//extends
class Grandfather {
    constructor(name){
        this.gender = 'M';
        this.name = name;
    }
    sayHi(){
        console.log('안녕하세요 할마버지입니다.')
    }
}
class father extends Grandfather{
    constructor(name,age){//파라미터 확인해야함. 꼭..
        super(name); //부모요소 그래도 가려오는것.
        this.age=age;
        //extends로 만듣 class에서 this를 쓸때에는 반드시 상위에 super()써야함
    }
    sayHi(){
        console.log('안녕하세요 아버지 '+this.name+'입니다.');
        super.sayHi(); //constructor 밖에서 부모 요소를 가져올때 쓰는문법
    }
   
}
let father1 = new father('돈준',30);
let father2 = new father('아부지',60);

console.log(father1,father2); //안녕하세요. 아버지입니다 출력
father1.sayHi();

//getter, setter

let People = {
    name:'lee', 
    age: 20,
    get nextAge(){
        return this.age+1;
    },
    //함수를 만들어 object 데이터를 다루는 이유
    //1. 자료가 복잡할때 보다 간단하게 다룰수있음.
    //2. object자료 수정시 유용함. 
    set setAge(age){
       this.age=parseInt(age);
    }//데이터 변경시 다른 타입으로 값을 입력해도 필터로 걸러서 오류없이 관리할수있음
}

//People.setAge(33);

//set 데이터를 변경하는 함수->반드시 파라미터를 가지고있어야한다. 
//수험함수에 set을 붙이면 ()없이 기본 대입하듯이 대입할수있음 es5문법임. 크로스브라우징 확인해야함
People.setAge=20;
console.log(People);

//get 데이터를 꺼내쓰는함수 ->반드시 return 을해줘야한다.
//console.log(People.nextAge());
console.log(People.nextAge);

class People2 {
    constructor(){
        this.name ='lee';
        this.age =30;
    }   
    get getAge(){
        return this.age +2;
    }
    set setAge(age){
        console.log(age);
    }
}
let People3 = new People2();
console.log(People3.getAge);
People3.setAge=35;

//문제1.

class Dog{
    constructor(type, color){
        this.type=type;
        this.color = color;
    }
}
let dog01 = new Dog('포메라니안','brown');
let dog02 = new Dog('말티즈','white');
console.log(dog01, dog02);
//문제2

class Cat extends Dog{
    constructor(type,color){
        super(type,color);
    }
}
let cat01 = new Cat('러시안블루','gray');
let cat02 = new Cat('듀이','white');
console.log(cat01, cat02);


//문제3

class Unit{
    constructor(){
        this.strength = 100;
        this.offensive = 5;
    }
    get battlePoint (){
        return this.strength + this.offensive;
    }
    set heal(strength){
       this.strength + strength;
    }
}

let unit01 = new Unit();
console.log(unit01.battlePoint);
console.log(unit01.heal = 50);

