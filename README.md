# JS_study

## vanillaJS 

### 객체와 배열

**Destructuring**

객체에안에 있는 필드 값을 원하는 변수에 대입 할 수 있다.  

```js
const sandwich={
bread :'더치 크런치',
meat:'참치',
cheese: '스위스',
topping:['상추','토마토','스위트어니언']
}
let {bread, meat} = sandwich;

console.log(bread,meat) //더치크런치 참지
```
위 코드는 객체를 분해하여 필드를 같은 이름의 변수에 넣어준다. 
**두변수의 값은 객체에 있는 필드값으로 초기화되지만, 두변수의 값을 재 할당해도 원래의 필드값은 변경되지 않는다.**

객체를 분해하여 함수의 인자로 넘길수도 있다. 

```js
const userName = (regularName) =>{
  console.log(` 유저 이름은! ${regularName.firstName}`)
}

let regularName ={
  firstName ='은경'
  lastName='잉'
}
userName(regularName); // 유저이름은! 은경

```

 객체 필드에 접근하기 위해 .과 필드명을 사용하는 대신에 객체에서 필요한 값을 구조분해로 가져올수 있다
 
 ```js
const userName = ({firstName}) =>{
  console.log(` 유저 이름은! ${regularName.firstName}`)
}

let regularName ={
  firstName ='은경'
  lastName='잉'
}
userName(regularName); // 유저이름은! 은경

```

배열의 구조 분해하기
>배열을 구조분해해서 값을 뽑아낼수도 있다. 

```js
const [pet1,pet2,pet3] = ['심바','모모','나나']

console.log(pet1) //'심바'
```


**객체 리터럴 개선**

>구조분해의 반대되는 개념이라고 할수 있다. 객체 리터럴개선을 사용하면 현재 영역에 변수를 객체의 필드로 묶을수 있다.


```js

const name = '은경';
const age = 33;

const userInfo = {name, age}

console.log(userInfo);// {name :'은경', age: 33}

```

**스프레드 연산자**

1. 스프레드 연산자를 사용해 배열의 내용을 조합할 수 있다. 예를 들어 두배열이 있다면 두 배열의 모두 들어간 새로운 배열을 만들수 있다.

```js
let array = [1,2,3];
let array02 = [4,5,6];
let newArray =[...array,...array02];

console.log(newArray) // [1,2,3,4,5,6]
```






## React

## TypeScript

## Task
