//문제1번 내장함수 안쓰고 하는방법

const Answer1 = document.querySelector('.answer01');

const solution = (array, num)=>{
    let cnt=0;
    for(let i=0; i<=array.length; i++){
        if(array[i] === num){cnt++;}
    }
    Answer1.innerHTML = '1. 배열속 두번째 파라미터 N의 갯수는? ' + cnt +'<br>';
}
solution([3,6,9,7,3,6,5],3);

//문제1번 내장함수 filter 써서 하는 방법

const solution2 = (array, num)=>{
    let cnt = array.filter(el => num === el).length;
    let filter = array.filter(el => num === el);
    let nofilter = array.filter(el => num !== el);
    Answer1.innerHTML += `2. 필터된 배열[${filter}], 배열속 두번째 파라미터 N의 갯수${cnt}, N을 뺀 나머지 배열 [${nofilter}]`
}

solution2([3,6,9,7,3,6,5],3);

































//문제2번 1번과 유사하여 저녁에 위에꺼 안보고 다시 쳐볼것



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