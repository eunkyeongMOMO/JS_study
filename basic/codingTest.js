
//문제1. html 생성후 데이터바인딩
const CardWrap = document.querySelector('.cardWrap');
const MoreBtn =document.querySelector('.more');
const products = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' }
  ];

//     products.forEach((data, index)=>{
//     CardWrap.innerHTML+=`   
//     <div class="card">
//     <img src="https://via.placeholder.com/600">
//     <div class="card-body">
//       <h5 class="title">${data.title}</h5>
//       <p class="price">가격 : ${data.price}</p>
//       <button class="btn">주문하기</button>
//     </div>`
// })


const cardInner=(data)=>{
    for(let i=0; i<data.length; i++){
        CardWrap.innerHTML+=`
        <div class="card">
            <img src="https://via.placeholder.com/600">
            <div class="card-body">
            <h5 class="title">${data[i].title}</h5>
            <p class="price">가격 : ${data[i].price}</p>
            <button class="btn">주문하기</button>
         </div>`
         
    }
}
cardInner(products);

//문제2 더보기 버튼 클릭시 ajax로 가져온 상품 보여주기
//문제3 한번더 눌렀을때 다른상품 또보여주고 버튼없애기
let count =0;
let More =()=>{
if(count==0){
fetch("https://codingapple1.github.io/js/more1.json")
.then(res => res.json()) //받아온 json파일을 object형식으로 바꿔주는것
.then(data => {
  //  console.log(data);
  cardInner(data);
  count++;
})
.catch(error =>{console.log(error)})
} else if(count==1){
fetch("https://codingapple1.github.io/js/more2.json")
.then(res => res.json()) //받아온 json파일을 object형식으로 바꿔주는것
.then(data2 => {
  console.log(data2);
  cardInner(data2);
   MoreBtn.style.display='none'
})
.catch(error =>{console.log(error)})
} 
}
MoreBtn.addEventListener('click',More);