# JS_study

## vanillaJS 
모던 자바스크립트 DEEP Dive 책 정리



### DOM 
HTML 문서의 계층적 구조와 정보를 표현하며, 이를 제어할수 있는 API, 즉 프로퍼티와 메서드를 제공하는 트리 자료구조이다.

HTML요소는 파싱되어 DOM을 구성하는 요소노드 객체로 변환된다. 이때 HTML 요소의 어트리뷰트는 어트리뷰트 노트로, HTML요소의 텍스는 콘텐츠는 텍스트 노드로 변환된다.

`<div class="text">'hellow!'</div>`


DIV -> 요소노드 CLASS-> 어트리뷰트 노드 hellow! -> 텍스트 노드

HTML 문서는 HTML 요소들의 집합으로 이뤄지며, HTML요소는 중첩관계를 갖는다. 즉 HTML 요소의 콘텐츠 영역 (시작태그와 종료태그 사이) 에는 텍스트뿐아니라 다른 HTML 요소도 포함할수 있다. [무조건 되는것은 아님으로 표준화에따라 맞게 사용해야한다.]

이때 HTML요소간에는 중첩관계에 의한 계층적인 부자관계가 형성되고 이런 요소같의 부자관계를 반영하여 HTML 문서의 구성요소인 HTML요소를 객체화한 모든 노드 객체들을 트리자료구조로 구성한다.

**트리 자료구조**

트리 자료구조는 노드들의 계층 구조로 이뤄진다. 즉, 트리 자료구조는 부모노드와 자식노드로 구성되어 노드간의 계층적 구조 (부자, 형제관계를 표현하는 비선형 자료 구조를 말함

트리구조는 하나의 최상단 노드에서 시작한다. 최상단 노는는 ROOT 라고 하며 0개이상의 자식 노드를 갖는다.
*자식 노드가 없는 노드를 리프노드라고 한다.*

이런 노드 객체들로 구성된 트리 자료구조를 DOM이라고 한다. [DOM트리라고 부르기도 한다.]

<hr/>

### 노드

**문서노드(document node)**
DOM트리 최상단에 존재하는 루트 노드로서 DODUMENT 객체를 가르킨다. DOCUMENT객체는 브라우저가 랜더링한 HTML 문서 전체를 가리키는 객체,
전역 객체 WINDOW의 DOSUMENT 프로퍼티에 바인딩되어 있다. 따라서 문서노드는 window.document / document로 참조할 수있다.

DOM트리의 루트노드이므로 DOM트리의 노드들에 접근하기 위한 집입점, 
요소, 어트리뷰티, 텍스트노드에 접근하려면 문서 노드를 통해야한다.

**요소노드(element node)**
HTML TAG를 가리키는 객체이다. 요소노드는 HTML요소간의 중첩에 의해 부자관계를 가지며, 이 부자 관계를 통해 정보를 구조화한다. 따라아서 요소노드는 문서의 구조를 표현한다고 할수 있다.

**어트리뷰티 노드(attribute node)**
html 요소의 속성(어트리뷰티)를 가리키는 객체, 어트리뷰트 노드는 어트리뷰티가 지정된 요소노드와 얀걀되어 있다. 
단, 요소노드는 부모노드와 연결되어있지만 어트리뷰트노드는 부모 노드와 연결되어 있지 않고 요소노드에만 연결되어 있다.
>어트리뷰트 노드는 부모녿드가 없으므로 요소노드의 형제노드는 아님.
>어트리뷰트 노드에 접근하여 참조하거나 변경하려면 먼저 요소노드에 접근해야한다.

**텍스트 노드 (text node)**
html 요소의 텍스트를 가리키는 객체, 요소노드가 문서의 구조를 표현한다면 **텍스트 노드는 문서의 정보를 표현**
>텍스트 노드는 요소노드의 자식 노드이며, 자식 노드를 가질수 없는 리프노드로 DOM트리의 최종단.
>텍스트 노드에 접근하려면 부모노드인 요소노드에 접근해야한다.




#### 리플로우와 리페인트

자바스크립트 코드에 DOM이나 CSSOM을 변경하는 DPM API가 사용된 경우, DOM이나 CSSOM이 변경된다. 이때 변경된 DOM, CSSOM은 다시 랜더트리로 결합, 변경된 렌더트리를 기반으로 레이앗과 레인트 과정을 거쳐 브라우저화면에 다시 랜더링 한다. 이것을 리플로우, 리페인팅이라고 한다.

**리플로우**

리플로우는 레이아웃 계산을 다시하는것을 말하며, 노드 추가/삭제, 요소의 크기/위치변경, 윈도우 리사이징들 레이아웃에 영향을 주는 변경이 발생한 경우에 한하여 실행된다.

**리페인트**

리페인트는 재결합된 랜더트리를 기반으로 다시 페인트 ㅎ하는것을 말한다. 따라서 리플로우->리페인트가 반드시 순차적으로 동시에 싱행되는것은 아니다. 레이아웃에 영향이 없는 변경은 리플로우 없이 리페인트만 실행된다.



### DOM과 Virtual DOM
DOM(document object model)
웹페이지나 웹앱에 있는 html요소들을 구조적으로 표현한 것

DOM은 애플리케이션의 전체UI를 나타내며 데이터 구조로 표현된다. script를 통해 콘텐츠를 수정하고 이벤트를 추가할수있기때문에 매우 유용하다. 또한 구조화된 형식으로 되어 있어서 특정 노드를 선택할수 있다.

DOM 문제점?
 1. 노드가 많아질수록 속도가 느려지고 DOM업데이트에 잦은 오류를 발생시킬수 있다.
 2. 최근 모던 웹은 SPA을 사용하는데, 여러 동적인 기능이 들어가기 때문에 안그래도 리소스가 모두 합쳐진 무거운 HTML 문서를 지속적으로 재랜더링 해줘야함.
 
 Virtual DOM
 DOM을 가볍게 만든 script 표현이라고 할 수 있고 주로 React, vue에 사용된다. 가상 DOM은 실제로 스크린데 랜더링 하는것이 아니기때문에 DOM을 직접 업데이트 하는것보다 상대적으로 빠르다.
 
 가상DOM은 실제 DOM에ㅔ서 처리하는 방식이 아닌 Virtual DOM과 메모리에서 미리 처리하고 저장한 후 실제 DOM과 동기화 하는 프로게이밍 개념.
 
구분 | DOM | Virtual DOM
--|--|--
업데이트 | 느리다 | 빠르다
HTML업데이트 방식 | 새로운  element가 업데이트된 경우 새로운 DOM생성| 새로운element가 업데이트 된 경우 새로운 가상 DOM 생성 후 이전 DOM과 비교 후 차이나는 DOM만 업데이트
메모리 | 메모리 낭비가 심함 | 메모리 낭비가 덜함




### 변수

**변수 선언**
> 변수를 생성하는 것을 일컷는다. 값을 저장하기 위한 메모리 공간을 확보하고 변수명과 메모리공간의 주소를 연결해서 값을 저장할 수 있게 준비하는것. 
> 변수를 사용하려면 반드시 선언이 필요하며, 선언시 var, let, const 키워드를 사용한다. 
>> var를 이용하여 선언할 경우 초기화 단계에서 아무런 값을 할당하지 않으면 unfined값이 할당된다.

**변수 호이스팅**
>변수선언 런타임(소스코드가 한줄씩 실행되는 시점)이 아니라 그 이전 단계, 소스코드 평가 과정에서 
>자바스크립트 엔진은 변수 선언을 포함한 모든 선언문을 소스코드에서 찾아내 먼저 실행 시킨다. 선언문 소스코드 실행 이후 선언문을 제외한 소스코드를 한줄씩 순차적으로 실행한다.
>이 처럼 선언문이 코드의 선두로 끌어 올려진 것처럼 동작하는 자바스크립트 고유의 특징을 변수 호이스팅이라고 한다.

**값 할당**

>변수에 값을 할당(대입, 저장) 할 때는 할당연산자[대입연산자] '='를 사용한다. 할당연산자는 우변의 값을 좌변의 변수에 할당한다.
>>*주의점*
>>변수 선언의 경우 호이스팅되어 런타임 이전에 선언되지만 값의 할당은 소스코드가 순차적으로 실행되는 시점인 런타임에 실행된다.
>>변수선언과 값의 할당을 각각 나누어 실행한다. 따라서 변수선언시 초기값으로 undfined가 할당되었던 것은 변함이 없다.

**값의 재할당**

> 재할당? 변수에 새로운 값을 할당하는것, [var, let 키워드로 생성된 변수만 재할당이 가능하다.]
> 변수에 값을 재할당 하면, 변수는 새로운 값으로 변경된다. 하지만 이전 값이 들어있는 메모리 공간을 지우고 새로 할당한 값을 저장하는것이 아닌 새로운 메모리 공간을 확보하고 그 메모리 공간에 재할당 된 값을 저장한다.
>> 재할당 할수없어 변수의 값이 변경될 수 없다면 변수가 아니라 상수라 한다. 상수는 한번 정해지면 변하지 않는값을 의미한다.[const 키워드를 이용해 선언한 변수는 상수로, 추후 재할당이 불가하다.]

*가비지 콜렉터*
? 변수에 값이 재할당되어 더이상 사용하지 않는 불필요한 값들은 가비지 콜렉터에 의해 메모리에서 자동 해체된다. 단 메모리에서 언제 해체될지는 예측할수 없다.
>>가비지 콜렉터는 애플리케이션이 할당한 ㅁ








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
