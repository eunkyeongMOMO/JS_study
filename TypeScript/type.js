//Node.js 설치 -> sudo npm install -g typescript
//tsconfig.json 파일 생성 후 해당파일에 옵션값 입력
//TS파일은 브라우저가 인식하지못하기때문에 JS파일로 변환한다음사용
//터미널에 tsc -w 입력하면 자동변환됨 
//----> 자동으로 안되면 tsc 파일명.ts 치면 됨
//변수설정
var Name = 'simba';
var birthYear = 20019;
var my_pet = ["nana", "momo", "simba"];
var my_pets = { name: 'nana', age: 12 };
//타입 지정 원래 자동으로 되기 때문에 생략가능하다.
//문제1
var my_name = 'eunkyeong';
var my_age = 33;
var my_plcBrt = 'seoul';
//문제2
var favoriteSinger = { '가수': '종현', '노래': '환상통' };
var project01 = {
    member: ['ming', 'momo'],
    days: 22,
    started: false,
};
//타입을 미리정하기 애매할때?
var age01 = 33;
//UnionType 문자or숫자들어오는 변수일때 ->할당된 값에따라 가변적으로변함
var members = ['4', 3];
var newMembers = { name: 'simba', new: false };
//anyType -> 모든 자료형을 허용해주는것 -> 타입 해제하는 문법
//unkuow -> any랑 같은 역할, 근데 좀더 안전함 
//타입이 맞아야 사칙연산도가능함 -> 안맞으면 에러남.
//문제1
var age2;
//age2+1 ->에러남, 에러나는이유는 
//문자에서 +는 문자를 함쳐주는 용도이고 number는 사칙연산인데 나이값이 정의되지않았음
//문제2 변수타입지정
var User1 = 'lee';
var user_age = 31;
var married01 = false;
var simba = [User1, user_age, married];
//문제3
var shcoolName = {
    score: [77, 88, 100],
    teacher: 'phil',
    ftiend: 'john'
};
shcoolName.score[4] = false;
shcoolName.ftiend = ['lee', shcool.teacher];
var person = { name: 'momo' };
//?를 넣으면 옵션속성이 된다 (입력될수도 있고 입력 안될수도 있는 키)
//함수에 타입 지정하는법, vuoid타입
//subject_return
var my_function2 = function (num) {
    return num * 5;
};
//return 값이 없을때 or return하고 싶지 않을때 ---> void
var my_function3 = function (name) {
};
//파라미터가 입려되지 않으면 에러가 나는데 이렇때 ?를 쓰면 에러가안남
//변수?:string -> 변수:string|undefined 인 uniontype임
//문제 1. 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고
//아무것도 파라미터로 입력하지 않고 함수를 사용하면 "이름이 없습니다" 를 출력하는 함수를 만들어봅시다.
//파라미터와 return 타입지정도 잘 해봅시다. 
var NamePrint = function (name) {
    if (name !== undefined) {
        console.log("\uC548\uB155\uD558\uC138\uC694! \uC81C \uC774\uB984\uC740 ".concat(name, "\uC785\uB2C8\uB2E4."));
    }
    else {
        console.log('이름이없어용');
    }
};
NamePrint('은경');
NamePrint();
//문제2함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어보십시오.
var Number_length = function (number) {
    var numberTostring = number.toString();
    var numlength = Number(numberTostring.length);
    console.log("\uC785\uB825\uD55C \uC22B\uC790\uB294 ".concat(number, "\uC774\uBA70, \uC790\uB9BF\uC218\uB294 ").concat(numlength, "\uC785\uB2C8\uB2E4."));
};
Number_length(2536897);
//문제3 결혼 가능 확률을 알려주는 함수를 만들어봅시다. 
//월소득(만원단위), 집보유여부(t/f), 매력점수 상중하->상일때만 100점;
var marriage = function (salary, aprtm, charm) {
    var total = 0;
    var aprtmScore = 0;
    var charmScore = 0;
    if (aprtm === true) {
        aprtmScore = 500;
    }
    else
        (aprtmScore = 0);
    if (charm === '상') {
        charmScore = 100;
    }
    else {
        charmScore = 0;
    }
    total = salary + aprtmScore + charmScore;
    if (total > 600) {
        console.log("\uB2F9\uC2E0\uC758 \uCD1D\uC810\uC740 ".concat(total, "\uC810 \uC73C\uB85C \uACB0\uD63C \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."));
    }
    else {
        console.log("\uB2F9\uC2E0\uC758 \uCD1D\uC810\uC740 ".concat(total, "\uC810 \uC73C\uB85C \uACB0\uD63C \uBABB\uD574!\uBABB\uD574!"));
    }
};
marriage(300, false, '상');
marriage(250, true, '하');
//Narrowing -> type이 아직 하나로 확정되지 않았을경우
//어떤 변수가 타입이 아직 불확실하면 if문등으로 narrowing해줘야 조작가능
var narrowing = function (x) {
    // if(typeof x ==='string'){ //typeof를 쓰면 변수타입을 *문자열로 반환해줌
    //      return x+'1'; }
    //    else{return x+1;}
    var array = [];
    if (typeof x === 'number') {
        array[0] = x;
    }
    //typeof / 속성명 in 오브젝트 / 인스턴스 instanceof 부모 <- 해당 문법들로 narrowing가능
};
var function4 = function (animal) {
    if ('swim' in animal) {
        //Fish type인지 아닌지 구분할수 있음, 단 중복되지 않은 유니크한 속성이있어야만 가능함.
    }
};
//object type이 비슷할경우 강제로 literal type 강제로 만들어두면 됨
var function7 = function (x) {
    if (x.wheel === '4개') {
        console.log('x는 Car타입입니다.');
    }
};
// assertion 타입덮어쓰는 문법
var assertion = function (x) {
    var array = [];
    array[0] = x;
    //변수 x를 number타입으로 덮어줌
    //옛날 문법 <number>변수
    //1. unionType 인 변수만!!!! narrowing할때 씁니다.
    //2.무슨 타입이 들어올지 100%확실할때 쓰세요.(굳이 쓸필요없음. 버그 추적못함...!)
};
/**
문제1  숫자여러개를 array 자료에 저장해놨는데
가끔 '4', '5' 이런 식의 문자타입의 숫자가 발견되고 있습니다.
이걸 클리닝해주는 함수가 필요합니다.
클리닝함수( ['1', 2, '3'] ) 이렇게 숫자와 문자가 섞인 array를 입력하면
[1,2,3] 이렇게 숫자로 깔끔하게 변환되어 나오는 클리닝함수를 만들어오고 타입지정까지 확실히 해보십시오
*/
var array_cleaning = function (array) {
    var new_array = [];
    array.forEach(function (number) {
        if (typeof number === 'string') {
            new_array.push(Number(number));
        }
        else {
            new_array.push(number);
        }
    });
    console.log("claening after : ".concat(new_array, ", ").concat(typeof new_array[2]));
};
array_cleaning([1, 3, '33', 44, 5, 7, 8, '98']);
//왜 for문은 안대? 돼야지?
// const array_cleaning02 = (array:(number|string)[])=>{
//     let new_array:number[] =[];
//     for(let i=0; i<=array.length; i++){
//         if(typeof array[i]==='string'){
//             new_array.push(Number(array[i]))
//         }else if (typeof array[i] ==='number')
//         {new_array.push(array[i])
//         }
//     }
//     console.log(`claening after : ${new_array}, ${typeof new_array[2]}`);
// }
// array_cleaning02([1,3,'33',44,5,7,8,'98']);
/**
그 선생님이 가르치고 있는 과목중 맨 뒤의 1개를 return 해주는 함수를 만들어봅시다.
 */
var teacher01 = { subject: 'math' };
var teacher02 = { subject: ['science', 'english'] };
var teacher03 = { subject: ['science', 'art', 'korean'] };
var subject_return = function (teacher) {
    if (typeof teacher.subject === 'string') {
        console.log("\uC120\uC0DD\uB2D8\uC774 \uAC00\uB974\uCE58\uB294 \uACFC\uBAA9\uC740 ".concat(teacher.subject));
    }
    else if (Array.isArray(teacher.subject)) {
        console.log("\uC120\uC0DD\uB2D8\uC774 \uAC00\uB974\uCE58\uB294\uACFC\uBAA9\uC740 ".concat(teacher.subject.length, "\uAC1C \uC774\uACE0,\n             \uADF8\uC911 \uB9C8\uC9C0\uB9C9 \uACFC\uBAA9\uC740 ").concat(teacher.subject[teacher.subject.length - 1], "\uC785\uB2C8\uB2E4."));
    }
};
subject_return(teacher01);
subject_return(teacher02);
subject_return(teacher03);
//타입이 길다면? -> 타입을 변수로 지정해서 사용
var time = "11시";
var animal = 'dog';
var animal2 = { name: 'SIMBAA', age: 5 };
var friend = {
    name: 'rani'
};
var myPet = { name: '은경', age: 33, color: 'warmTone' };
var test = { size: 22, position: [22, 55, 66] };
var user_info = { name: 'lee', phone: 1255553, emall: 'simba@momo.com', adult: true };
//LiteralTypes -사전에 지정한 가뵤만 들어올수 있게 하는것.
var MyPet;
//MyPet='nana' 에러나는대 너무 슬프자나...
var function5 = function (a) {
    return 1;
};
//파라미터에 무조건 'hello'만 가능, 리턴값으로 1혹은 0만 가능
var function10 = function (a) {
    return ['Paper', 'Scissors'];
};
//LiteralTypes 의 문제점
var data = { name: 'simba' };
//as const
// !!!!object value값을 그대로 타입으로 지정해줌!!!
//name type = 'simba'가 되는거임
//object속성을 모두 readonly로 바꿔줌! -> 속성값 변경 불가
var my_function5 = function (a) {
    return a;
};
//type이 'simba'인것만 쓸수있음
my_function5(data.name);
var my_function10 = function (a) {
    return a + 5;
};
//함수표현식에만 함수type타입지정
var UserInfo = {
    name: 'simba',
    age: 2,
    //changeName: (name:string)=> void,
    nextAge: function (age) { return age + 1; },
};
var cutZero = function (string) {
    var stringArray = string.split('');
    if (stringArray[0] === '0') {
        stringArray.shift();
    }
    var filterString = stringArray.join('');
    // return `입력한 값 ${string} 첫 글자0일 경우 제거한 값${filterString}`;
    return filterString;
};
console.log(cutZero('09897'));
console.log(cutZero('0777797'));
var removeDash = function (phoneNumber) {
    var stringArray = phoneNumber.split('');
    console.log(stringArray);
    var filterArray = stringArray.filter(function (element) { return element !== '-'; });
    //filter 함수쓸때 꼭 return 써줘야함.
    var joinArray = filterArray.join('');
    var numberChange = Number(joinArray);
    return numberChange;
};
console.log(removeDash('---2555-7890'));
var NewFunction = function (phone, func1, func2) {
    var result = func1(phone);
    var result2 = func2(result);
    console.log(result2);
};
NewFunction('010-9955-0543', cutZero, removeDash);
function my_function(num) {
    return num * 5;
    //파라미터, 리턴값 둘다 number타입만 가능하다.
}
var john = [30405, true, 'simba'];
//속성이 문자면 값도 문자타입이어야한다. 
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
//class의 경우 먼저 변수를만들어서 타입을 지절한 다음 사용해야함
//typescript로 html조작할때 주의점.
//셀렉터로 찾은 html요소는 element|null 인 union type입니다.
var Title = document.getElementById('title');
//type narrowing해줘야함
if (Title !== null) {
    Title.innerHTML = 'Hi MOMO!';
}
//instanceof 연산자사용해서 narrowing하는 방법
if (Title instanceof Element) {
    Title.innerHTML += '<br>집 가고 싶어';
}
//가장많이 사용하는 방법
var Title2 = document.getElementById('title2');
//비상시, 100%확신할때쓴다. 잘안쓰는게 좋음
Title2.innerHTML = '내일 또 출근인데!';
if (Title2 === null || Title2 === void 0 ? void 0 : Title2.innerHTML) {
    Title2.innerHTML += '<br>언제 집에가지..?';
}
//?.붙이면 Title2안에 innerHtml속성이 있는지? 없으면 undefined반환
//a tag href속성 바꾸기
var Link = document.querySelector('.link');
if (Link instanceof HTMLAnchorElement) {
    Link.href = 'https://kakao.com';
}
//a태그의 경우 엘레먼트타입을 정확하게 기입해야함
var Button = document.querySelector('#button');
var ButtonBox = document.querySelector('.buttonBox');
var ShowBox = function () {
    if (ButtonBox instanceof Element) {
        ButtonBox.classList.toggle('active');
    }
};
Button === null || Button === void 0 ? void 0 : Button.addEventListener('click', ShowBox);
//문제1 ->버튼 누르면 이미지 바꾸기
var ImgButton = document.querySelector('.change');
var Image1 = document.querySelector('.image');
var imgChange = function () {
    if (Image1 instanceof HTMLImageElement) {
        if (Image1.src === './change.webp') {
            Image1.src = './test.webp';
        }
        else {
            Image1.src = './change.webp';
        }
    }
};
ImgButton === null || ImgButton === void 0 ? void 0 : ImgButton.addEventListener('click', imgChange);
//문제2
var NaverLink = document.querySelectorAll('.naver');
NaverLink.forEach(function (a) {
    if (a instanceof HTMLAnchorElement) {
        a.href = 'https://kakao.com';
    }
});
//------class문법 type정하기
var PersonClass = /** @class */ (function () {
    //타입스크립트 costructor쓸 변수는 반드시 위에서 필드값을 적어줘야함.+타입지정도 같이해줌
    function PersonClass(name, age) {
        var _this = this;
        this.data = 0;
        this.nextAge = function () {
            console.log(_this.age + 1);
        };
        this.name = name;
        this.age = age;
    }
    return PersonClass;
}());
var person22 = new PersonClass('eunkyeong', 33);
var person32 = new PersonClass('jun', 30);
person22.nextAge();
person32.nextAge();
console.log(person22.data);
//문제1 Car class 생성
/**
 1. model, price를 가진 오브젝트
 2.tax 함수-> price의 10%를 출력
 3. model, price,tax return Type지정
 */
var Car = /** @class */ (function () {
    function Car(model, price) {
        var _this = this;
        this.tax = function () {
            var CarTax = _this.price * 0.1;
            console.log("\uC774 \uCC28\uB294 ".concat(_this.model, "\uC774\uBA70, \uAC00\uACA9\uC740 ").concat(_this.price, ", \uBD80\uAC00\uC138\uB294 ").concat(CarTax, " \uCD1D\uD569").concat(_this.price + CarTax, "\uC785\uB2C8\uB2E4."));
            return CarTax;
        };
        this.model = model;
        this.price = price;
    }
    return Car;
}());
var Audi = new Car('audi R8', 8700);
var LandRove = new Car('Range Rover', 7500);
Audi.tax();
LandRove.tax();
//문제2. class인데 파라미터가 잔뜩들어가있는 classWord
/**
 1. obj 만들때 파라미터로 숫자 혹은 문자를 입력하면
 각각 타입에 맞는 배열안에 담기
 2.타입지정
 */
var NumOrStr = /** @class */ (function () {
    function NumOrStr() {
        //레스트파라미터는 배열이라 꼭 []타입으로 타입지정해줘야함. 안그러면 에러남
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        var numArray = [];
        var strArray = [];
        param.forEach(function (a) {
            if (typeof a === 'number') {
                numArray.push(a);
            }
            else if (typeof a === 'string') {
                strArray.push(a);
            }
        });
        this.num = numArray;
        this.str = strArray;
    }
    return NumOrStr;
}());
var object = new NumOrStr('simba', 3, 4, 6, 'nana', 'momo', 'rani');
console.log(object.num);
console.log(object.str);
var square = { color: 'blue', width: 200 };
//interface도 &기호 뒤에 붙여서 사용 할 수 있음
var student = { name: 'lee' };
var teacher = { name: 'nam', age: 50 };
var product = { brand: 'samsung', serialNumber: 1360, model: ['TV', 'phone'] };
var cart = [{ product: '청소기', price: 60000 }, { product: '휴지', price: 9000 }];
var card = { product: '청소기', price: 60000, card: false };
var calculator = {
    plus: function (a, b) { return a + b; },
    minus: function (a, b) { return a - b; }
};
console.log(calculator.plus(5, 6));
console.log(calculator.minus(10, 3));
//rest, destucturing
var restFunction = function () {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    console.log(a);
};
restFunction(1, 2, 5, 5, 8, 9, 10);
var _a = ['hello', 'simba'], vrbl1 = _a[0], vrbl2 = _a[1];
var object2 = { student: true, age: 23 };
var obj = function (_a) {
    var student = _a.student, age = _a.age;
    console.log(student, age);
};
obj(object2);
//함수 파라미터 작명할때 destructuring쓰묜 object 넣기쉬워짐!
/**숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다.
최댓값(6,3,7,2) 이렇게 쓰면 7이 return 되어야합니다.
(조건1) 넣을 수 있는 숫자 갯수는 제한없음, 0 이상의 정수만 가능합니다.
(조건2) Math.max() 사용금지 */
var maxValue = function () {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    var max = num[0];
    for (var i = 0; i <= num.length; i++) {
        if (max < num[i]) {
            max = num[i];
        }
    }
    console.log("\uC785\uB825\uD55C ".concat(num, "\uC911\uC5D0 \uC81C\uC77C \uD070 \uAC12\uC740 ").concat(max));
};
maxValue(2, 8, 6, 9, 7, 5, 12);
var maxValue2 = function () {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    var sortNum = num.sort(function (a, b) { return a - b; });
    console.log("\uC785\uB825\uD55C ".concat(num, "\uC911\uC5D0 \uC81C\uC77C \uD070 \uAC12\uC740 ").concat(sortNum[0]));
};
;
var obj2 = { user: 'kim', comment: [3, 5, 4], admin: false };
var TsFunction = function (_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    console.log(user, comment, admin);
};
TsFunction(obj2);
var arr32 = [40, 'wine', false];
var TsFunction2 = function (_a) {
    var level = _a[0], favorite = _a[1], work = _a[2];
    console.log(level, favorite, work);
};
TsFunction2(arr32);
//함수에서 쓰는 never type
//const function12 = ():never=>{
//return값이 없어야 사용가능함. endpoint가 없어야함.
// while(ture){
//     내부코드가 무한대로 돈다아~}}
//사실상 쓸일이 없음; -> 근데 코드이상하게 짜면 나옴
var function12 = function (parameter) {
    if (typeof parameter == 'string') {
        console.log(parameter);
    }
    else {
        parameter;
    } //이경우 never타입이 됨. 말이안될때 나오니까 디버깅할때 씀
};
//객체지향 문법에 도움이되는 문법
var User01 = /** @class */ (function () {
    function User01(name, age) {
        //punlic붙으면 모든 자식들이 이용가능함 -> 기본값이기 때문에 설정안해도 됨
        this.familyName = 'lee';
        this.name = this.familyName + name;
        this.age = age;
        //파라미터 입력이됨으로 costructor씀
    }
    User01.prototype.nameChnge = function (name) {
        this.familyName = name;
    };
    return User01;
}());
var user05 = new User01('simba', 5);
user05.nameChnge('Gang');
//private 수정하려면 미리 클래스 내부에 설정해둔 함수를 호출
console.log(user05);
