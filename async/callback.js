/**java script  -> synchronous. 
 자바스크립트는 동기적으로 작동하는 언어. 
 호이스팅이 된 이후부터 작성된 순서에 따라 코드가 실행됩니다.
 호이스팅 -> 변수, 함수선언들이 가장 위로 올려지는것.

 비동기적 언어 -> Asynchronous. 
 */

 console.log(1);
 setTimeout(()=>console.log(2), 1000);
 console.log(3);
//콜백함수라고 무조건 비동기가 아님
 //synchronous callback[동기적 콜백함수]
 function printImmediately(print){
    print()
 }
 printImmediately(()=>console.log('바로출력하는것'));
 //Asynchronous callback[비동기적 콜백함수]
 function printWithDelay(print, timeout){
    setTimeout(print,timeout);
 }
 printWithDelay(()=>console.log('2초뒤에 출력'),2000);

 //콜백지옥 예제

 class UserStorage{
    loginUser(id, password, onSuccess, onError){
        setTimeout(()=>{
            if(
                (id==='simba' && password==="mydog")||
                (id==='eunkyeong' && password==="momo")
            ){ onSuccess(id);}
            else{onError(new Error('not found'));
            }
        },2000);
    }
    getRoles(user,onSuccess,onError){
        setTimeout(()=>{
            if(user==='simba'){
                onSuccess({name:'simba', role:'admin'});
            }else{onError(new Error('no access'));
        }
        },1000)
    }
 }

 const userStorage = new UserStorage();
 const id =prompt('enter your id');
 const password =prompt('enter your password');
 userStorage.loginUser(
    id,
    password,
    user =>{
        userStorage.getRoles(
            user,
            userWithRole =>{
                alert(`hello, ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            error =>{console.log(Error);}
        );
    },
    error=>{
        console.log(Error);
    }
    );
/**콜백지옥의 문제점?
 1.가독성이 매우매우 떨어진다.[로직 이해하기가 힘듬.]
 2.에러발생, 디버깅시 처리하기 어려움. -> 유지보수가 어려움
*/