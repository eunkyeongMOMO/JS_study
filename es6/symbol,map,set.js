let symbol= Symbol('설명');

//오브젝트 자료형의 비밀스런 key값으로 사용
//import해온파일 손상안가게 내용추가하고싶을때사용
let weight = Symbol('내몸무게는?');
let height = Symbol('내키는?');
//전역심볼
let global=Symbol.for('설명설명');
//전역심볼과 같은 설명을 가진 심볼이 생기면 전역심볼로 대체된다.

let person = { name : 'momo'}
person[weight] =46;
person[height]=157;
console.log(person);
//직접출력하면 심볼도 나옴
for(let key in person){
    console.log(person[key])
    //반복문으로 돌렸을때 심볼로 저장한 값은 출력되지 않음
}


//map 자료간의 연관성을 표현하기 위해 쓰는것
//키애 아무 자료형이나 사용가능
let person2 =new Map();
person2.set('name','momo');
person2.set('age',33);
person2.set('height',157);

person2.get('name');
//맵에 저장된 자료 가져오는 방법
person2.delete('age');
//맵에 저장된 자료 삭제하는 방법
console.log(person2.size);
//맵에 저장된 자료 갯수세는 방법

for (let key of person2.keys()){
    console.log(key)
}

//맵 자료형 직접 넣을때

let pet =new Map([
    ['name','simba'],
    ['color','beige'],
    ['age','5']
])
for(let key of pet.keys()){
    console.log(key);
}


//set자료형

let attendance =['rani','ming','momo','ming'];

let attendance2 = new Set(['rani','ming','momo','ming']);
//중복을 허용하지 않음, 중복되는 값 자동으로 삭제

attendance2.add('hyeon');
//값을추가할때
attendance2.delete('momo');
//값없앴때
console.log(attendance2.has('ming'));
//값의 유무
console.log(attendance2.size);
//값의 갯수

//set->array 변환
attendance=[...attendance2];
