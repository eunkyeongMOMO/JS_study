//promise는 자바스크립트 내장오브젝트로 콩백함수대신에 생각할수있는것.
// state : promise가 만들어져서 진행될때에는 pending, 성공했을대는 fulfilled, 실패시 rejected
//원하는 기능을 수행해서 해당하는 데이터를 만들어내는 Producer or 원하는 데이터를 소비하는 Consumer

//1.Producer
//새로운 프로미스가 만들어징때 전달한 콜백 함수가 실행된다.
const promise = new promise((resolve,reject)=>{
    //시간이 오래걸리는 작업을 주로 함.
    ///네트워크 통신, 파일을 불러오는것
    //프로미스가 만들어지는 순간 동작이 실행된다.
    console.log('doing something...')
    setTimeout(()=>{
       // resolve('simbaa!'); //성공했을때의 값
        reject(new Error('no netwotk'));
    },2000)
}); 

//2.Consumer :then, catch, finally
promise.then(value=>{console.log(value)})
//then은 프로미스가 제대로 수행되어서 tesolve가 value값으로 들ㅇ거ㅏ는것
.catch(error =>{
    console.log(error);
    //프로미스가 실패했을때 출력하는것. 
})
.finally(()=>{console.log('finally!')}); //성공,실패 여부와 상관없이 호출된 promise가 끝났을때 출력되는것. 인수를 받지않는다.    

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
        etTimeout(()=>{resolve('🐔'),1000})
    });
const getEgg = (hen)=> new Promise((resolve, reject) => {setTimeout(()=>{resolve(`${hen} => 🥚`)})});
const cook = (egg)=> new Promise((resolve, reject) => {setTimeout(()=>{resolve(`${egg} => 🍳`)})});

getHen()
.then( hen => getEgg(hen))
.then( egg => cook(egg))
.then( meel => console.log(meal));