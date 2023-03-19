## ScrollEvent

메소드 | 기능 | 문법
--|--|--
scrollY | scroll 된 Y 값을 알려주는 것 | `window.scrollY()`
scrollTo | 설정한 좌표값으로 강제로 스크롤 | `window.scrollTo(x,y)`
scrollBy | 현재 위치에서 설정한 좌표값으로 강제로 스크롤 | `window.scrollBy(x,y)`
scollIntoView |원하는 위치로 강제로 스크롤이동|`element.scrollIntoView() //true는 요소의 상단기준 false는 요소의 하단기준`
innerHeight | 뷰포트의 세로사이즈 알려주는것 | `window.inneHeight()`
innerWidth | 뷰포트의 가로사이즈 알려주는것 | `window.innerWidth()` offsetTop | 해당 html요소의 Y좌표 값 반환 | `element.offsetTop`


```js
const move_cont = (cont)=>{
    document.querySelector('.'+cont).scrollIntoView(true);
}
```