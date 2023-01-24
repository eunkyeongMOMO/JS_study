
//문제1. html 생성후 데이터바인딩
const CardWrap = document.querySelector('.cardWrap');
let products = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' }
  ];

//     products.forEach((data, index)=>{
//     CardWrap.innerHTML+=`   
//     <div class="card">
//     <img src="https://via.placeholder.com/600">
//     <div class="card-body">
//       <h5 class="title">${data[index].title}</h5>
//       <p class="price">가격 : ${data[index].price}</p>
//       <button class="btn">주문하기</button>
//     </div>`
// })

let cardInner=()=>{
    for(let i=0; i<=products.length; i++){
        CardWrap.innerHTML+=`
        <div class="card">
            <img src="https://via.placeholder.com/600">
            <div class="card-body">
            <h5 class="title">${products[i].title}</h5>
            <p class="price">가격 : ${products[i].price}</p>
            <button class="btn">주문하기</button>
         </div>`
         
    }
}
cardInner();
