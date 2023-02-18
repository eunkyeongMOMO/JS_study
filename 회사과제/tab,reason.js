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