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
declare let project: Project;
declare let age: string | number;
declare let members: (number | string)[];
declare let newMembers: {
    new: boolean | number;
    name: string;
};
declare let age2: string | number;
declare let User1: string;
declare let user_age: undefined | number;
declare let married: boolean;
declare let simba: (string | number | undefined | boolean)[];
declare let shcool: {
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
type Member = [number, boolean, string];
declare let john: Member;
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
