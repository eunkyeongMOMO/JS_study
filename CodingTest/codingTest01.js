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
// const Answer9 = document.querySelector('.answer09');
// const solution9 = (my_string,num) =>{
//     let result=[];
//     let StringArray=my_string.split('');
//     for(let i=0; i=StringArray.length; i++){
//        for(let j=0; j=num; j++){    
//           result.push(StringArray[i]);
//     }}
//     let joinString=result.join();
//     Answer9.innerHTML=`${joinString}`
// }
//solution9('simba',3);
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

//문제12


//문제13

const Answer13 = document.querySelector('.answer13');
const solution13 = (before,after)=>{
    let result=0;
    const string_array = before.split('');
    const reverse_array = string_array.reverse();
    const join_array = reverse_array.join('');
    if(join_array===after){
        result=1;}
    else{result=-1;}
    Answer13.innerHTML+=`글자를 뒤집으면 ${join_array}, 주어진 문자 ${after}, result는 ${result}<br>`;
}
solution13('simba','abmis');
solution13('nemuinanoni..','ieniikiti');

//문제14

//문제15


//문제16
const Answer16 =document.querySelector('.answer16');

const solution16_1 = (my_string) =>{
    let noOverlap = my_string.filter((value,index,array)=>{return array.indexOf(value)===index});

    Answer16.innerHTML += `원래배열은 ${my_string}, 중복값을 제거한 배열은 ${noOverlap}`
}
solution16_1([11,22,55,66,33,11,33,44,33,22]);

//문제17

const Answer17 =document.querySelector('.answer17');

const solution17 = (rsp) => {
    let win ='';
    if(rsp.match(/2{1,}/g)){
        win+='0' 
    }
    if(rsp.match(/5{1,}/g)){
        win+='2' 
    }
    if(rsp.match(/0{1,}/g)){
        win+='5' ;
    }
    
    console.log(rsp.match(/5{1,}/g)+rsp.match(/2{1,}/g));
    console.log(win);
    Answer17.innerHTML += `입력한 ${rsp}를 이기는 거는 ${win}입니다. <br>`
}

solution17('250');
solution17('0');

//문제19

const Answer19 =document.querySelector('.answer19');

const solution19 = (money)=>{
    let cup = Math.floor(money / 5500);
    let changes = money %(cup*5500);

    Answer19.innerHTML = `머쓱이가 가진돈은 단돈 ${money}이고 
    이걸로 사먹을수 있는 아아메는 ${cup}잔, 남은돈은 ${changes}`
}
solution19(15000);

//문제 20
const Answer20 = document.querySelector('.answer20');
const solution20 = (numbers)=>{
    let result= numbers.reduce((prev, cur)=>{return prev+cur},0);
    let division = Math.floor(result/(numbers.length+1));
    Answer20.innerHTML+=`입력한 배열은 ${numbers}, 배열의 총합은 ${result}, 반올림한 평균값은 ${division}입니다.<br>`
}

solution20([2,5,6,8,9,15]);
solution20([7,8,9,45]);

//문제 21

const Answer21 = document.querySelector('.answer21')
const solution21 =(i,j,k)=>{
    let array=[];
    for(let a=i; a<=j ; a++){
        array.push(a);
    }
    let stringK= k.toString();
    let newArray = array.toString();
    let stringArray = newArray.split('');
    let filter = stringArray.filter(el => el == stringK).length
    Answer21.innerHTML=`입력된 ${i}, ${j} 사이에 ${k}는 총 ${filter}개입니다.`
}

solution21(12,20,1);

//문제22

const Answer22 =document.querySelector('.answer22');

const solution22 = (numbers) => {
    const sortNumber = numbers.sort((a,b)=>{return b-a});
    const maximum = sortNumber[0]*sortNumber[1];
    Answer22.innerHTML = `가장 큰수 두개를 곱한 값은? ${maximum}`;
}
solution22([2,5,7,8,9,12]);

const Answer23 =document.querySelector('.answer23');

const solution23 = (numbers, num01, num02) => {
    let arryFilter=[];
    for(let i =num01; i<=num02; i++){
        arryFilter.push(numbers[i]); 
    }
    Answer23.innerHTML=`입혁한 ${numbers}에서 ${num01}부터 ${num02}까지의 수만 출력한 것은 ${arryFilter}`
}
solution23([2,5,7,8,9,12],2,5);


//문제 24
const Answer24 =document.querySelector('.answer24');

const solution24 = (number) =>{
    let oddArray = [];
    for(let i =0; i<=number; i++){
        if(i % 2 === 1){
            oddArray.push(i);
        }
    }
    let sortArray = oddArray.sort((a,b)=>{return a-b});

    Answer24.innerHTML += `입력된 ${number} 보다 작은 홀수의 오름차순 정렬 [${sortArray}]<br>`
}

solution24(23);
solution24(16);
//문제 25
const Answer25 =document.querySelector('.answer25');
const solution25 = (number) =>{
    let evenMax=0;
    for(let i = 0; i<=number; i++){
        if(i%2===0){
            evenMax+=i;
        }
    }
    Answer25.innerHTML+=`입력한 ${number}이하의 짝수의 총합은 ${evenMax}<br>`
    }
solution25(25);
solution25(108);

//문제 26

Answer26 =document.querySelector('.answer26');

const solution26 = (seven) =>{
    let sevenString = seven.toString();
    let splitArray = sevenString.split('');
    console.log(splitArray);
    let sevenArray = splitArray.filter((number)=>number==='7');
    Answer26.innerHTML=`입력한 배열은 ${seven}이고 그중 7의 갯수는 ${sevenArray.length}개임`
}
solution26([7,77,107,7.5]);

//문제27

const Answer27 =document.querySelector('.answer27');

const solution27 = (my_string) =>{
    let stringArray = my_string.split('');
    let newString=[];
    stringArray.forEach((item)=>{
        if(item!=='a' && item!=='e' && item!=='i' && item!=='o' && item!=='u'){
            newString.push(item);
        }
    })
    Answer27.innerHTML+=`입력한 ${my_string}중 모음을 제거한 문자는 ${newString}입니다.<br>`

}
solution27('tomorrow');

//문제 28


const Answer28 =document.querySelector('.answer28');
const solution28 = (k,numbers) =>{
    let stringK=k.toString();
    console.log(stringK);
    let stringNumbers= numbers.toString();
    let stringArray=stringNumbers.split(',')
    let kIndex= stringArray.indexOf(stringK);
    Answer28.innerHTML+=`${numbers}중 k는${kIndex}번째에 있음 *없을경우 -1로표시<br>`
}
solution28(3, [5,6,9,15,3,44,16]);


//문제 29

const Answer29 =document.querySelector('.answer29');

const solution29 = (number, numList) =>{
    let newNumList=[];
    numList.forEach((el)=>{
        if(el % number==0){
            newNumList.push(el);
        }
    })
    Answer29.innerHTML=`입력한 ${numList}중, ${number}의 배수들은 ${newNumList}입니다.`
}
solution29(3, [3,5,6,9,15,44,16]);


//문제33

const Answer33=document.querySelector('.answer33');

const solution33= (angle)=>{
    let result ='';
     if(angle===180){
        result='4.평각'
    }else if(angle===90){
        result='2.직각'}
    else if(0 < angle && angle < 90){
        result='1.예각'
    }else if(90<angle && angle <180){
        result='3.둔각'}
    
   
Answer33.innerHTML+=`입력한 각도는 ${angle}이고, ${result}입니다.<br>`
}
solution33(23);
solution33(160);
solution33(180);


//문제 31

// Answer31 =document.querySelector('.answer31');

// const solution31 = (my_string) =>{
//    let lower= my_string.split(/[a-z]/g);
//    let upper= my_string.split(/[A-Z]/g);
//    let newString=[];
//    lower.forEach((item)=>{if(item!=""){
//     newString.push(item.ToLowerCase())
// }})
//    console.log(lower)
//     Answer31.innerHTML=``
// }
// solution31('ADRheightWidthGG');

//문제35

//문제36

const Answer36=document.querySelector('.answer36');

const solution36= (balls, share)=>{
    const factorial=(number)=>{
       let returnValue =BigInt(1);
       for(let i=number; i>= 2; i--){
         returnValue*=BigInt(i);
       }
       return returnValue;
    } 
    let case02 = factorial(balls)/(factorial((balls-share))*factorial(share));
Answer36.innerHTML+=`머쓱이가 가지고 있는 구슬수는 ${balls}개, 이걸 친구한테 ${share}개 나눠줄때, 경우의 수는 ${case02}개이다`
}
solution36(5,3);

//문제37

const Answer37=document.querySelector('.answer37');

const solution37= (my_string)=>{
    let result=[];
    const StringArray=my_string.split('');
    const filter = StringArray.filter((value, index)=>{
        return StringArray.indexOf(value)===index;
    })
    const filter02 = StringArray.filter((value, index)=>{
        return StringArray.indexOf(value)!==index;
    })
    let sortArray=filter.sort();
    if(filter02.length==0){sortArray='[]'}
Answer37.innerHTML+=`입력된 글자는 ${my_string}이고, 중복을 제외하고 사전순으로 
배열한결과 ${sortArray}<br>`
}
solution37("something you like but shouldn't like");
solution37("simba!");
//문제38



//문제39

const Answer39 = document.querySelector('.answer39');

const solution39 = (my_string) => {
   const regexp = /^[0-9]{4}$|^[0-9]{6}$/
   let result=regexp.test(my_string);
   let resultString='';
   if(result==true){
    resultString='맞음'
   }else{resultString='맞지않음'}
   Answer39.innerHTML+=`입력한 문자는 ${my_string}이고, 해당값은 조건에 ${resultString}<br>`
}
solution39('123544')
solution39('12a')


//문제49

const Answer49 = document.querySelector('.answer49');

const solution49 = (my_string)={

}
