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
var project = {
    member: ['ming', 'momo'],
    days: 22,
    started: false,
};
//타입을 미리정하기 애매할때?
var age = 33;
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
var married = false;
var simba = [User1, user_age, married];
//문제3
var shcool = {
    score: [77, 88, 100],
    teacher: 'phil',
    ftiend: 'john'
};
shcool.score[4] = false;
shcool.ftiend = ['lee', shcool.teacher];
//함수에 타입 지정하는법, vuoid타입
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
var person = { name: 'momo' };
//타입이 길다면? -> 타입을 변수로 지정해서 사용
var time = "11시";
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
