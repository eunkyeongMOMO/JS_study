//'use strict';
//strict mode -> 좀더 엄격하게 사용할 수 있음

console.log(this);
//this -> window

function myFuncttion(){
    console.log(this);
}
myFuncttion()
//일반 함수안에 this -> window
//strict mode -> undefined로 뜸


let object ={
    data : 'javascript',
    day: 230130,
    name: 'simba',
    function2: function(){
        console.log(this);
    }
}
object.function2();
//object 안에 함수에서 this를 쓰면 함수를 가지고 있는 object를 말함

let object2 ={
    data:{
        function1:function(){
            console.log(this);
        },
        function3:()=>{
            console.log(this);
        }
    }
}
object2.data.function1();
//data가 나옴 

object2.data.function3();
//()=>{}의 경우, this값을 함수밖에 있던거 그대로 상속받아씀. this-> window로 나옴
//함수나 변수를 전역공간에서 만들면 글로벌 오브젝트인 {window}에 보관됨.


//constructor

function constructorFunction(){
    this.name = 'kim' 
    //instance
    
}

let object4 = new constructorFunction();

console.log(object4); //name:kim으로 출력됨


const button = document.querySelector('#button');
button.addEventListener('click', function(){
    this; 
    //e.currentTarget이랑 같은 의미로 사용가능함
    //이벤트리스너에 사용시 지금 이벤트가 일어난 노드를 가르킨다.

    let array = [3,66,78,40];
    array.forEach(function(a){
        console.log(this);//window로 출력됨
    })
    //함수가 쓰인 위치에 따라 this겂아 버뀜.
})

const object12 = {
    names:['kim','lee','park'],
    myfunction2: function(){
        console.log(this);//함수를 가지고 있는 오브젝트
       object12.names.forEach(()=>{
        console.log(this);
       })//arrow function을 쓰면 this값은 상위에 this 값을 상속받아 오브젝트임
       object12.names.forEach(function(){
        console.log(this);
       })//오브젝트 내에서 콜백함수를 쓰면? window가 됩니다.

    }
}

object12.myfunction2();