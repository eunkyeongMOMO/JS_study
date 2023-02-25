let myPet = {
    name : 'simba', 
    //sage:{value:5},
    dogBreeds:'Pomeranian'
}

//optionalChaining?
//?. 왼쪽에 있는게 null, undefined이면 값을 남기지 않고 undefined남겨줌
//중첩된 obj자료에서 자료를 뽑을때 에러없이 안전하게 뽑을수 있음 ->중첩된 경우에만 사용!!!!!
//에러를 해결하는게 아니라 잠깐 숨카두는거임. 

console.log(myPet?.dogBreeds);
console.log(myPet.age?.value);

 
console.log(undefined ?? '로딩중입니다.')
//왼쪽값이 비어있으면 오른쪽 값을 대신 출력해주는 문법,