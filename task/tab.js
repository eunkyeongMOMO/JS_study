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
