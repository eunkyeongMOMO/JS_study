<<<<<<< HEAD
const TabBtn = document.querySelectorAll('.tab');
const Detail = document.querySelectorAll('.detail');


for(let i =0; i<=TabBtn.length; i++){
    TabBtn[i].addEventListener('mouseover',function(){
        Detail.forEach((item)=>{item.classList.remove('on')})
        Detail[i].classList.add('on');
    })
}

// for문으로 최대한 간결하게짜야하고, 확장성을 생각해서 짜야한다. 
// querySelectorAll에는 classList.remove() 사용하면 에러나니까 for문안에
// for문, 혹은 forEach문써서 해결해야함.

$("#barGraph").width(Math.ceil(twidth * (remain_time / total_time)) + "px").offset({
    top: origin_pos.left + twidth * ((total_time - remain_time) / total_time),
    top: origin_pos.bottom
});
=======
const TabClick=(tabbtn, tabcont)=>{
    let TabBtn = document.querySelectorAll(tabbtn);
    let TabCont = document.querySelectorAll(tabcont);
    for(let i =0; i<=TabBtn.length; i++){
        TabBtn[i].addEventListener('click',function(){
            TabBtn.forEach((item)=>{item.classList.remove('active')})
            TabBtn[i].classList.add('active');
            TabCont.forEach((item)=>{item.classList.remove('active')})
            TabCont[i].classList.add('active');
        })
    }
}

const TabHover =(tabbtn, tabcont)=>{
    let TabBtn = document.querySelectorAll(tabbtn);
    let TabCont = document.querySelectorAll(tabcont);
    for(let i =0; i<=TabBtn.length; i++){
        TabBtn[i].addEventListener('mouseover',function(){
            TabBtn[i].classList.add('active');
            TabCont.forEach((item)=>{item.classList.remove('active')})
            TabCont[i].classList.add('active');
        })
    }
}
>>>>>>> a6324847660ee532938dc30cb847655cd3e3e8bb
