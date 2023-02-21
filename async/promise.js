//promise는 자바스크립트 내장오브젝트로 콩백함수대신에 생각할수있는것.
// state : promise가 만들어져서 진행될때에는 pending, 성공했을대는 fulfilled, 실패시 rejected
//원하는 기능을 수행해서 해당하는 데이터를 만들어내는 Producer or 원하는 데이터를 소비하는 Consumer

//1.Producer
//새로운 프로미스가 만들어질때 전달한 콜백 함수가 실행된다.
let promise = new Promise((resolve,reject)=>{
    //단순히 생각하면 성공,실폐를 판정하는 기계
    //resolve,reject파라미터가 꼭 있어야함.
    //시간이 오래걸리는 작업을 주로 함.
    ///네트워크 통신, 파일을 불러오는것
    //프로미스가 만들어지는 순간 동작이 실행된다.
    console.log('doing something...')
    setTimeout(()=>{
        resolve('simbaa!'); //성공했을때의 값
        reject(new Error('no netwotk'));
    },2000)
}); 

//2.Consumer :then, catch, finally
promise
.then(value=>{console.log(value)})
//then은 프로미스가 성공되서 출력되는것
.catch(error =>{
    console.log(error);
    //프로미스가 실패했을때 출력하는것. 
})
.finally(()=>{console.log('finally!')});
 //성공,실패 여부와 상관없이 
 //호출된 promise가 끝났을때 출력되는것. 인수를 받지않는다.    

//3.promise chaining

const fatchNumber = new Promise((resolve, reject) => {
    setTimeout(()=>{resolve(1)},2000)
});
fatchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{resolve(num-1)},1000)
    })
})
.then(console.log(num=>console.log(num)))
//then은 값을 바로 전달할수도 있고 새로운 promise를 전달할수도 있다.
//여러가지 비동기을 연결하여 실행할수 있다.

//4.Error hendling

const getHen = () => 
    new Promise((resolve, reject) => {
        setTimeout(()=>{resolve('🐔'),1000})
    });
const getEgg = (hen)=> new Promise((resolve, reject) => {setTimeout(()=>{resolve(`${hen} => 🥚`)})});
const cook = (egg)=> new Promise((resolve, reject) => {setTimeout(()=>{resolve(`${egg} => 🍳`)})});

getHen()
.then( hen => getEgg(hen))
.then( egg => cook(egg))
//.then( meel => console.log(meal));

//promise 복습
// 1.가독성이 좋음.
// 2.성공,실패했을때 가능

const promise4 =new Promise((resolve, reject)=>{
    let calculation = 3*25;
    resolve(calculation); //성공했을때 값, 파라미터값이 then에 전달된
    //reject(); 실패했을때 값
})

promise4
.then((result)=>{
    console.log(result);
    console.log('성공했다.');
})
.catch(()=>{console.log('실패했다!')})
.finally(()=>{console.log('끝났다.')})

//promise 복습2

 const promise5 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve();
    },1000)
 })

 promise5
 .then(()=>{
    console.log('1초가 지났고,성공했습니다.')
})
.catch(()=>{
    console.log('실패했다.')
})
.finally(()=>{
    console.log('프로미스5 끝났습니다.')
})
//프로미스는 3가지 상태가있음. 
//성공했을때 resolved, 찬정대기중이면 panding, 실패했을땐 rejected로 상태가 변함
//프로미스 상태에 따라 then, catch 가 실행된다.
//프로미스를 쓰는 이유. 콜백함수의 가독성을 높이기위해 사용하는거. 
//비동기처리함수를 안에다가 쓸수 있지만, 비동기랑 상관없음.

//fetch()함수를 실행하고 나면 그 결과값으로 promise값이 남기때문에
//then, catch등을 쓸수있다.



