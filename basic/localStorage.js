
//localStorage(브라우저를 꺼도 남아있음), sessionStorage(브라우저끄면 날아감) -> key:value 형태로 저장가능
//5mb, 문자 숫자만 가능함

localStorage.setItem('name','simba');//데이터 저장하기
localStorage.getItem('name');//저장된 데이터 가져오기
localStorage.removeItem('name') //저장된 데이터 지우기 

//array, object -> JSON으로 바꾸면 저장가능하다

let array=[1,4,5,6,7,110];
let newArray = JSON.stringify(array);
//이렇게 하면 JSON형태로 저장가능

localStorage.setItem('number',newArray);
//저장

let getArray = localStorage.getItem('number');
// 이렇게 가져오면 문자로 가져와짐 array아님

JSON.parse(getArray);
//다시 array형식으로 바꿔줘야함!

