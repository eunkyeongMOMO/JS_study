//문제1번 내장함수 안쓰고 하는방법

const Answer1 = document.querySelector('.answer01');

const solution1 = (array, num)=>{
    let cnt=0;
    for(let i=0; i<=array.length; i++){
        if(array[i] === num){cnt++;}
    }
    Answer1.innerHTML = '1. 배열속 두번째 파라미터 N의 갯수는? ' + cnt +'<br>';
}
solution1([3,6,9,7,3,6,5],3);

//문제1번 내장함수 filter 써서 하는 방법

const solution1_1 = (array, num)=>{
    let cnt = array.filter(el => num === el).length;
    let filter = array.filter(el => num === el);
    let nofilter = array.filter(el => num !== el);
    Answer1.innerHTML += `2. 필터된 배열[${filter}], 배열속 두번째 파라미터 N의 갯수${cnt}, N을 뺀 나머지 배열 [${nofilter}]`
}

solution1_1([3,6,9,7,3,6,5],3);

//문제2번 

const Answer2 =document.querySelector('.answer02');

const solution2= (array, height) => {
    let long =0
    for(let i = 0; i<=array.length; i++){
        if(array[i]> height){
            long++
        }
    }
    Answer2.innerHTML = `머쓱이보다 큰 아이는 총 ${long}명입니다.<br>`;
}
solution2([170,130,166,158,197,110],152);

//filter사용해서 걸러내기

const solution2_1 =(array,height)=>{
    let long = array.filter(el=> height< el).length;
    Answer2.innerHTML += `머쓱아 키좀커라 너보다 큰애들이 ${long}명이나 있단다.`
}
solution2_1([170,130,166,158,197,110],152);

//문제3번 더하기, 빼기, 곱하기, +나누기
const Answer3 = document.querySelector('.answer03');
const solution3_1 =(num1,num2)=>{
    return num1 + num2;
}
const solution3_2 =(num1,num2)=>{
    return num1 - num2;
}
const solution3_3 =(num1,num2)=>{
    return num1 * num2;
}

Answer3.innerHTML = `문제1. 100+56= ${solution3_1(100,56)} 
                    <br> 문제2. 56-4= ${solution3_2(56,4)} 
                    <br> 문제3. 77*5= ${solution3_3(77,5)}`
//문제4 forEach사용
const Answer4 = document.querySelector('.answer04');
const solution4 = (array)=>{
   let newArray =[];
   array.forEach((number)=>{newArray.push(number*2)});
   return newArray;
}
Answer4.innerHTML=`배열의 두배 : ${solution4([1,4,5,77,88])}`

//문제 5 
const Answer5 = document.querySelector('.answer05');

const solution5 = (array)=>{
    array.sort((a,b)=>{return a - b});
    return array[Math.floor(array.length/2)]
}

Answer5.innerHTML = solution5([5,7,3,6,8])

//문제6
const Answer6 = document.querySelector('.answer06');

const solution6 = (people) => {
    let pizza = Math.ceil(people / 7) ;
    //round반올림, ceil올링, floor내림
    Answer6.innerHTML=`지금 사람은 ${people}명이고 피자는 7조각씩 오니까 ${pizza}판을 시켜야함`
}
solution6(15);

//문제7
const Answer7 = document.querySelector('.answer07');
const solution7 = (price) =>{
    let finalPrice=0;
    let sale=0;
    if(price > 500000){
        finalPrice = price*0.8;
        sale =20;
    }else if(price > 300000){
        finalPrice = price*0.9;
        sale =10;
    }else if(price > 100000){
        finalPrice = price*0.95;
        sale =5;
    }else if(price < 100000){
        finalPrice = price;
        sale =0;
    }
    Answer7.innerHTML += `지금 구매한 옷의 원래 가격은 ${price}인데 
    ${sale}% 할인해서 최종가격은 ${finalPrice}입니다.<br>`
}
solution7(795000);
solution7(325000);
solution7(129000);
solution7(90000);

//문제8
const Answer8 = document.querySelector('.answer08');
const solution8 = (age) =>{
    let birthYear = 2023 - (age-1);
    Answer8.innerHTML += `지금 나이는 ${age}이고 태어난연도는 ${birthYear}년이다<br>`;
}
solution8(33);
solution8(40);
solution8(22);

//문제9
const Answer9 = document.querySelector('.answer09');
const solution9 = (my_string,num) =>{
    // for(let i=0; i<=my_string.length-1; i++){
    //    for(let j=0; j=num; j++){    
    //       // Answer9.innerHTML+=my_string[i];
    // }}
}
solution9('simba',3);
//리핏함수에서 에러남..왜안되는지 이유를 모르겠음. 머리과부하걸림 짜증남. 

//문제10
const Answer10 = document.querySelector('.answer10');
const solution10 = (my_string) =>{
    const regex = /[^0-9]/g;
    const result =my_string.replace(regex,'');
    const array= [...result].sort((a,b)=>{return a - b}); 
    Answer10.innerHTML= array;
}

solution10('hello920,simbaaa2056');

//문제11


//문제13

const Answer13 = document.querySelector('.answer13');
const solution13 = (my_string)=>{
    const string_array = my_string.split('');
    const reverse_array = string_array.reverse();
    const join_array = reverse_array.join('');
    Answer13.innerHTML+=`글자를 뒤집으면 ${join_array}<br>`;
}
solution13('simbaaaa');
solution13('nemuinanoni..');
