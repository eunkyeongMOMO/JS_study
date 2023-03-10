//문제만 정리해놓은 파일 -> 다시 풀어보기

//문제 1. 본인의 이름, 나이, 출생지역 변수로 지정 +타입도 지정
//문제 2. 가장좋아하는 곡과 가수이름을 변수에 object자료형으로 담기
//문제 3. 다음 자료의 타입을 지정
let project = {
    member : ['kim', 'park'],
    days : 30,
    started : true,
  }
//문제 4. 다음코드들은 왜 에러가 나는걸까요? +에러가 나지않게 해결해보시오

let 나이: string|number;
나이 + 1;

let 나이: unknown = 1;
나이 + 1;

//문제 5. 다음 변수 4개의 타입 지정

let user = 'kim';
let age = undefined;
let married = false; 
let 철수 = [user, age, married];

//문제 6. shcool 변수의 타입을 지정해보세요

let shcool = {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John'
}
shcool.score[4] = false;
shcool.friend = ['Lee' , shcool.teacher]


/**문제 7.
이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고
아무것도 파라미터로 입력하지 않고 함수를 사용하면 "이름이 없습니다" 를 출력하는 함수를 만들어봅시다.
파라미터와 return 타입지정도 잘 해봅시다. */


/**문제 8.
함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어보십시오.
예를 들어 '245' 이런 문자를 입력하면 3이 return 되어야합니다.
숫자도 마찬가지로 9567 이런 숫자를 입력하면 4가 return 되어야합니다.
숫자 또는 문자 이외의 자료가 들어오면 안됩니다. 
*/

/**문제 9.
결혼 가능 확률을 알려주는 함수를 만들어봅시다.
1. 함수의 파라미터로 월소득(만원단위), 집보유여부(true/false), 
    매력점수 ('상' or '중' or '하') 를 입력할 수 있어야합니다. 
2. 월소득은 만원 당 1점, 집보유시 500점 & 미보유시 0점, 매력점수는 '상'일 때만 100점으로 계산합니다. 
3. 총 점수가 600점 이상일 경우 "결혼가능"을 return 해줘야합니다. 그 외엔 아무것도 return하지 않습니다. 
*/

/**문제 10.
숫자여러개를 array 자료에 저장해놨는데 가끔 '4', '5' 이런 식의 문자타입의 숫자가 발견되고 있습니다.
이걸 클리닝해주는 함수가 필요합니다. 
클리닝함수( ['1', 2, '3'] ) 이렇게 숫자와 문자가 섞인 array를 입력하면
[1,2,3] 이렇게 숫자로 깔끔하게 변환되어 나오는 클리닝함수를 만들어오고 타입지정까지 확실히 해보십시오.
*/


/**문제 11.
let teacher01 = { subject : 'math' }
let teacher02 = { subject : ['science', 'english'] }
let teacher03 = { subject : ['science', 'art', 'korean'] }
지금 여러 변수에 선생님이 가르치고 있는 과목이 저장이 되어있습니다. 
과목 1개만 가르치는 쌤들은 문자 하나로 과목이 저장이 되어있고
과목 2개 이상 가르치는 쌤들은 array 자료로 과목들이 저장되어있습니다. */

//문제 12. object 타입을 정의한 type alias 두개를 & 기호로 합칠 때 중복된 속성이 있으면 어떻게 될까요?

/**문제 13.
1. 이 타입은 object 자료형이어야합니다.
2. 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야합니다. 
3. 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야합니다.
4. 이 타입은 position 이라는 변경불가능한 속성이 있어야하며 
항상 숫자가 담긴 array 자료가 들어와야합니다. 
---> 해당 조건에 만족하는 type alias를 만드세요 */

/**문제 14.
1. 대충 이렇게 생긴 object 자료를 다룰 일이 많습니다. 
{ name : 'kim', phone : 123, email : 'abc@naver.com' }
2. object 안에 있는 이름, 전화번호, 이메일 속성이 옳은 타입인지 검사하는 type alias를 만들어봅시다.
3. 각 속성이 어떤 타입일지는 자유롭게 정하십시오. */

/**문제 15.
1. 이름, 전화번호, 이메일, 미성년자여부 속성을 옳은 타입인지 검사하는 type alias를 만들어봅시다.
2. 미성년자 여부 속성은 true/false만 들어올 수 있습니다. 
3. 문제 13에서 만들어둔  type alias를 재활용해봅시다.*/


/**문제 16.
- '가위', '바위', '보' 문자들만 파라미터로 입력할 수 있고
- '가위', '바위', '보' 라는 문자들만 담을 수 있는 array 자료만 return 할 수 있습니다.
- 예를 들면 ['가위', '보', '가위'] 이런거 return 가능 / ['가위', '바보'] 이런거 return하면 에러나야함 */

/**문제 17.
코드에서 UserInfo라는 변수에 타입지정 알아서 해보십시오. 
plusOne이라는 속성은 함수여야하고, 숫자를 넣어서 숫자를 뱉는 함수여야합니다.
changeName이라는 속성은 함수여야하고, 아무것도 return하면 안됩니다. 
 */
let userInfo = {
    name : 'kim',
    age : 30,
    plusOne (x){
      return x + 1
    },
    changeName : () => {
      console.log('안녕')
    }
  }
  userInfo.plusOne(1);
  userInfo.changeName();

/**문제 18.
- cutZero()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 맨 앞에 '0' 문자가 있으면 제거하고 문자 type으로 return 해줍니다.
- removeDash()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 대시기호 '-' 가 있으면 전부 제거해주고 그걸 숫자 type으로 return 해줍니다. 
- 함수에 타입지정시 type alias를 꼭 써보도록 합시다. 
 */

/**문제19. 
문제18에서 만든 함수들을 파라미터로 넣을 수 있는 함수를 제작하고 싶은 것입니다. 
이 함수는 파라미터 3개가 들어가는데 첫째는 문자, 둘째는 함수, 셋째는 함수를 집어넣을 수 있습니다. 
이 함수를 실행하면
1. 첫째 파라미터를 둘째 파라미터 (함수)에 파라미터로 집어넣어줍니다.
2. 둘째 파라미터 (함수)에서 return된 결과를 셋째 파라미터(함수)에 집어넣어줍니다.
3. 셋째 파라미터 (함수)에서 return된 결과를 콘솔창에 출력해줍니다. 
이 함수는 어떻게 만들면 될까요?
둘째 파라미터엔 cutZero, 셋째 파라미터엔 removeDash 라는 함수들만 
입력할 수 있게 파라미터의 타입도 지정해봅시다.*/

//문제20. 버튼을 누르면 이미지를 바꿔봅시다.

//문제21. 바꾸고 싶은 html 요소가 많습니다. a tag 여러개의 href값을 전부 바꾸세요

/** 문제22. Car 클래스를 만들고 싶습니다.
1. 대충 { model : '소나타', price : 3000 } 이렇게 생긴 object를 복사해주는 class를 만들어보십시오.
2. 그리고 복사된 object 자료들은 .tax() 라는 함수를 사용가능한데 현재 object에 저장된 price의 10분의1을 출력해주어야합니다. 
3. model과 price 속성의 타입지정도 알아서 잘 해보십시오. tax() 함수의 return 타입도요. 
 */

/** 문제 23.
 class인데 파라미터가 잔뜩 들어가는 class Word를 만들어봅시다.
1. object 만들 때 new Word() 소괄호 안에 숫자 혹은 문자를 입력하면 
2. 숫자는 전부 object 안의  num 속성 안에 array 형태로 저장되고 
3. 문자는 전부 object 안의 str 속성 안에 array 형태로 저장되는 class를 만들어봅시다.
4. class 만들 때 넣을 수 있는 숫자와 문자 갯수는 일단 제한은 없습니다. 그리고 타입 지정도 하십시오*/


//문제24. interface 이용하여 타입을 만들어보세요
let product1 = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone'] }

//문제25 array안에 object 여러개가 필요합니다. 타입지정해보세요

let cart1 = [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ] 

//문제26. 문제 25에서 만든 interface를 extends해서 타입을 지정해보세요.
let card1 ={ product : '청소기', price : 7000, card : false }