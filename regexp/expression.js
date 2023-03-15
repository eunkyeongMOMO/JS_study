//서버세팅
//npm init -y 
//npm i parcel-bundler -D => 서버사용
//package.json  script 부분 test 적혀있는거 지우고 
//'dev':'parcel [서버에 띄울 파일명]' , 'build':'parcel build [파일명]'


//정규표현식 시작

let str =`
010-2566-7420
eunkyeong01234@gmail.com
https://www.wavve.com/player/vod?programid=PRG_S01_P460810577&page=1
Lorem Ipsum is simply dummy text of 
the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
abbcccdddd.
`;

//const regexp = new RegExp('the','g');


const regexp = /\.$/gim;

console.log(regexp.test(str));
console.log(str.replace(regexp, 'THE'));
console.log(str);
//str = str.replace(regexp, 'THE')
//console.log(str);

console.log(str.match(regexp));