

//프로미스 대신 쓸수있는 문법 -> ES8 (2017)

const calculation =(callback)=>{ 
    1 + 1
    callback() 
}
//콜백함수로 쓸수 있지만 지져분해지니까 대신 프로미스

const plus = async (num)=>{
    let val = num +5;
    console.log('값은' + val)
    return val;} //연산결과를 넘겨서 출력할 수 있다.
//async를 함수앞에 붙이면 함수 실행 후에 promise 오브젝트가 남음
plus(5)
.then((val)=>{
    console.log(val);
})

//단점은 성공한 경우만 사용가능

//await 프로미스가 해결될때까지 기다려주세여

async function Plus2(){
    let promise = new Promise((resolve,reject)=>{
        let calculation = 1+3;
        resolve(calculation);
    })

   // try {이거해보고 안되면} catch{ 이거 실행해 주세요}
   //awiat만 쓰면 실패시 오류가나기때문에 사전에 에러 처리하는방식


try{
let result = await promise; 
//async 안에서만 사용가능함, await는 프로미스가 실패시 멈춰서 오류가난다. 
console,log(result+'에러가안났을때 출력');
} catch{console.log('프로미스 연산이 잘안되었군여')}
}


//문제 버튼 누르면 성공하는 promise 생성 -> 성공했어요 출력

const Button = document.querySelector('.btn');

async function btnClick(){
    let promise = new Promise((resolve, reject)=>{
        Button.addEventListener('click', ()=>{
            resolve('성공했어요');
        })
    })
    let result = await promise; 
    console.log(result)
}

btnClick();