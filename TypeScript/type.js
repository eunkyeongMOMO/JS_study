//Node.js 설치 -> sudo npm install -g typescript
//tsconfig.json 파일 생성 후 해당파일에 옵션값 입력
//TS파일은 브라우저가 인식하지못하기때문에 JS파일로 변환한다음사용
//터미널에 tsc -w 입력하면 자동변환됨 
//----> 자동으로 안되면 tsc 파일명.ts 치면 됨
var Name = 'simba';
var person = { name: 'momo' };
//?를 넣으면 옵션속성이 된다 (입력될수도 있고 입력 안될수도 있는 키)
var age = 33;
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
//변수문법
