window.addEventListener('scroll',()=>{
    let scroll = window.scrollY;
    console.log(scroll);
    let y = (-1/500)* scroll +(115/50);
    let z = (-1/5000)* scroll + 565/500;
    document.querySelectorAll('.contentBox')[0].style.opacity=y;
    document.querySelectorAll('.contentBox')[0].style.transform=`scale(${z})`
})