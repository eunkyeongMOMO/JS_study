
//iframe으로 가져올 페이지 안에 넣는코드
function heightSend(){
window.addEventListener('load', function() {
  const _height = {height: document.body.scrollHeight};	
  window.top.postMessage(_height, "*");
});}


//iframe 넣을 페이지에 넣는 코드
function iframe_height(_iframe){
    //_iframe = 높이 가져올 iframe id혹은 class, 작성시 '#id명' '.클래스명' 으로 적어야함
        const targetIframe = document.querySelector(_iframe);
        window.addEventListener('message', function(e) {
        const t_height = e.data;
        targetIframe.style.height = t_height.height + "px";
    } , false);
    }

