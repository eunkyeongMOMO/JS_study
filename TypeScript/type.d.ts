declare let Name: string;
declare let birthYear: number;
declare let my_pet: string[];
declare let my_pets: {
    name: string;
    age: number;
};
declare let my_name: string;
declare let my_age: number;
declare let my_plcBrt: string;
declare let favoriteSinger: {
    [key: string]: string;
};
type Project = {
    member: string[];
    days: number;
    started: boolean;
};
declare let project01: Project;
declare let age01: string | number;
declare let members: (number | string)[];
declare let newMembers: {
    new: boolean | number;
    name: string;
};
declare let age2: string | number;
declare let User1: string;
declare let user_age: undefined | number;
declare let married01: boolean;
declare let simba: (string | number | undefined | boolean)[];
declare let shcoolName: {
    score: (boolean | number)[];
    teacher: string;
    ftiend: string | string[];
};
declare let person: {
    name?: string;
};
declare const my_function2: (num: number) => number;
declare const my_function3: (name?: string) => void;
declare const NamePrint: (name?: string) => void;
declare const Number_length: (number: number) => void;
declare const marriage: (salary: number, aprtm: boolean, charm: string) => void;
declare const narrowing: (x: number | string) => void;
type Fish = {
    swim: string;
};
type Bird = {
    fly: string;
};
declare const function4: (animal: Fish | Bird) => void;
type Car1 = {
    wheel: '4개';
    color: string;
};
type Bike = {
    wheel: '2개';
    color: string;
};
declare const function7: (x: Car1 | Bike) => void;
declare const assertion: (x: number | string) => void;
/**
문제1  숫자여러개를 array 자료에 저장해놨는데
가끔 '4', '5' 이런 식의 문자타입의 숫자가 발견되고 있습니다.
이걸 클리닝해주는 함수가 필요합니다.
클리닝함수( ['1', 2, '3'] ) 이렇게 숫자와 문자가 섞인 array를 입력하면
[1,2,3] 이렇게 숫자로 깔끔하게 변환되어 나오는 클리닝함수를 만들어오고 타입지정까지 확실히 해보십시오
*/
declare const array_cleaning: (array: (number | string)[]) => void;
/**
그 선생님이 가르치고 있는 과목중 맨 뒤의 1개를 return 해주는 함수를 만들어봅시다.
 */
declare let teacher01: {
    subject: string;
};
declare let teacher02: {
    subject: string[];
};
declare let teacher03: {
    subject: string[];
};
declare const subject_return: (teacher: {
    subject: string | string[];
}) => void;
type TypeSN = string | number;
declare let time: TypeSN;
type Animal = string | number | undefined;
declare let animal: Animal;
type Animal2 = {
    name: string;
    age: number;
};
declare let animal2: Animal2;
type Friend = {
    readonly name: string;
    age?: number;
};
declare const friend: Friend;
type Name = string;
type Age = number;
type Person = Name | Age;
type PositionX = {
    x: number;
};
type PositionY = {
    y: number;
};
type NewType = PositionX & PositionY;
type Person1 = {
    name: string;
    age: number;
};
type Pet = {
    age: number;
    color: string;
};
type NewType2 = Person1 & Pet;
declare let myPet: NewType2;
type Shirts = {
    color?: string;
    size: number;
    readonly position: number[];
};
declare const test: Shirts;
type UserInfo = {
    name: string;
    phone: number;
    emall: string;
    adult: boolean;
};
declare let user_info: UserInfo;
declare let MyPet: 'simba' | 'momo';
declare const function5: (a: 'hello') => 1 | 0;
declare const function10: (a: 'rock' | 'Paper' | 'Scissors') => ('rock' | 'Paper' | 'Scissors')[];
declare let data: {
    readonly name: "simba";
};
declare const my_function5: (a: 'simba') => "simba";
type Member = [number, boolean, string];
declare let john: Member;
type ArrayTuple = [number, string, boolean];
declare const function05: (rest_0: number, rest_1: string, rest_2: boolean) => void;
type Food = [string, Number, boolean];
declare let food: Food;
declare let food02: [string, number, ...boolean[]];
type FuncType = [string, number, ...(number | string)[]];
declare const tunle01: (rest_0: string, rest_1: number, ...rest_2: (string | number)[]) => void;
declare const clsfc: (...rest: (number | string)[]) => void;
declare let arr01: number[];
declare let arr02: [number, number, ...number[]];
type FunctionType = (a: number) => number;
declare const my_function10: FunctionType;
declare let UserInfo: {
    name: string;
    age: number;
    nextAge: (age: number) => number;
};
type FunctionType2 = (x: string) => string;
declare const cutZero: FunctionType2;
type RemoveType = (a: string) => number;
declare const removeDash: RemoveType;
declare const NewFunction: (phone: string, func1: FunctionType2, func2: RemoveType) => void;
declare function my_function(num: number): number;
type Today = {
    [key: string]: string;
};
declare class User {
    name: String;
    constructor(name: string);
}
declare const Title: HTMLElement | null;
declare const Title2: Element;
declare const Link: Element | null;
declare const Button: Element | null;
declare const ButtonBox: Element | null;
declare const ShowBox: () => void;
declare const ImgButton: Element | null;
declare const Image1: Element | null;
declare const imgChange: () => void;
declare const NaverLink: NodeListOf<Element>;
declare class PersonClass {
    data: number;
    name: string;
    age: number;
    constructor(name: string, age: number);
    nextAge: () => void;
}
declare let person22: PersonClass;
declare let person32: PersonClass;
/**
 1. model, price를 가진 오브젝트
 2.tax 함수-> price의 10%를 출력
 3. model, price,tax return Type지정
 */
declare class Car {
    model: string;
    price: number;
    constructor(model: string, price: number);
    tax: () => number;
}
declare let Audi: Car;
declare let LandRove: Car;
/**
 1. obj 만들때 파라미터로 숫자 혹은 문자를 입력하면
 각각 타입에 맞는 배열안에 담기
 2.타입지정
 */
declare class NumOrStr {
    num: number[];
    str: string[];
    constructor(...param: (string | number)[]);
}
declare let object: NumOrStr;
interface Squere {
    color: string;
    width: number;
}
declare let square: Squere;
interface Student {
    name: string;
}
interface Teacher extends Student {
    age: number;
}
type Animal3 = {
    name: string;
};
type Cat = {
    age: number;
} & Student;
declare let student: Student;
declare let teacher: Teacher;
interface Product {
    brand: string;
    serialNumber: number;
    model: string[];
}
declare let product: Product;
interface Cart {
    product: string;
    price: number;
}
declare let cart: Cart[];
interface Card extends Cart {
    card: boolean;
}
declare let card: Card;
interface Calculator {
    plus: (a: number, b: number) => number;
    minus: (a: number, b: number) => number;
}
declare let calculator: Calculator;
declare const restFunction: (...a: number[]) => void;
interface Object2 {
    student: boolean;
    age: number;
}
declare let vrbl1: string, vrbl2: string;
declare let object2: {
    student: boolean;
    age: number;
};
declare let obj: ({ student, age }: Object2) => void;
/**숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다.
최댓값(6,3,7,2) 이렇게 쓰면 7이 return 되어야합니다.
(조건1) 넣을 수 있는 숫자 갯수는 제한없음, 0 이상의 정수만 가능합니다.
(조건2) Math.max() 사용금지 */
declare const maxValue: (...num: number[]) => void;
declare const maxValue2: (...num: number[]) => void;
interface Object3 {
    user: string;
    comment: number[];
    admin: boolean;
}
declare let obj2: Object3;
declare const TsFunction: ({ user, comment, admin }: Object3) => void;
type Array32 = [number, string, boolean];
declare let arr32: Array32;
declare const TsFunction2: ([level, favorite, work]: Array32) => void;
declare const function12: (parameter: string) => void;
/**객체지향 문법에 도움이되는 문법
public - 기본값, constructor(여기 변수 만들때 pulic변수명으로 만들면 따로 피드, this키워드 안써도됨)
private - 부모 class만 수정, 이용할수 있는 값
protected - 확장성이 더 있음 extends한 class에서 사용가능 /부모 class만 수정, 이용할수 있는 값
static -부모클래스만가지고 있는 속성, extends됨. 다른 키워드랑 같이 사용가능
*/
declare class User01 {
    name: string;
    private familyName;
    age: number;
    constructor(name: string, age: number);
    nameChnge(name: string): void;
}
declare let user05: User01;
declare class Person01 {
    name: string;
    age: number;
    static x: number;
    protected korean: boolean;
    constructor(name: string, age: number);
}
declare let person02: Person01;
declare class officeWorkers extends Person01 {
    NotKorean(): void;
}
declare let worker: officeWorkers;
declare class Dream {
    static skill: string;
    intro: string;
}
declare let dreamer01: Dream;
declare let dreamer02: Dream;
declare class UserCopy {
    private static number01;
    static umber02: number;
    protected number03: number;
}
declare class CopyCat extends UserCopy {
}
declare let user02: UserCopy;
declare class Increase {
    private static number01;
    static umber02: number;
    static addOne(x: number): void;
    static PrintAdd(): void;
}
declare const SquareBox: Element | null;
declare class Square {
    width: number;
    height: number;
    color: string;
    constructor(width: number, height: number, color: string);
    draw(): void;
}
declare let Box: Square;
declare let Box02: Square;
declare let Box03: Square;
