
//문제1. html 생성후 데이터바인딩
const CardWrap = document.querySelector('.cardWrap');
const MoreBtn =document.querySelector('.more');
const sortBtn = document.querySelector('.sort');
const fliterBtn = document.querySelector('.filter');
const titleSortBtn = document.querySelector('.sort2');
const products = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' }
  ];



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

//숫자 array정렬

let array =[7,3,5,2,40];

array.sort((a,b)=>{
  return b - a //역순정렬
})
//filter 메소드 사용법 -> 반드시 새로운 변수에 담아 사용해야한다.

let newArray = array.filter((a)=>{
  return a < 5
})
console.log(newArray);
//map을 이용한 array자료 변경

let mapArray = array.map((a)=>{
  return a * 1000
})
console.log(mapArray);

//문제4 sort버튼 누르면 가격낮은순으로 정렬하기
const rowPrice = ()=>{
  products.sort((a, b)=>{
   return a.price - b.price
  });
  CardWrap.innerHTML='';
    for(let i=0; i<products.length; i++){
        CardWrap.innerHTML+=`
        <div class="card">
            <img src="https://via.placeholder.com/600">
            <div class="card-body">
            <h5 class="title">${ products[i].title}</h5>
            <p class="price">가격 : ${ products[i].price}</p>
            <button class="btn">주문하기</button>
         </div>`}
}
//rowPrice();
sortBtn.addEventListener('click',rowPrice);
//문제5 filter 사용해서 6만원이하 상품만 보여게 하기

let priceFilter = () =>{
  let newProduct = products.filter((a)=>{
    return a.price <= 60000 ;
  })
  console.log(newProduct);
  CardWrap.innerHTML='';
  for(let i=0; i<newProduct.length; i++){
    CardWrap.innerHTML+=`
    <div class="card">
        <img src="https://via.placeholder.com/600">
        <div class="card-body">
        <h5 class="title">${ newProduct[i].title}</h5>
        <p class="price">가격 : ${ newProduct[i].price}</p>
        <button class="btn">주문하기</button>
     </div>`}
}

fliterBtn.addEventListener('click', priceFilter);

//문제6 상풍명 다나가순 정렬

let titleReverse=()=>{
  // products.sort((a, b)=>{
  //   const upperCaseA = a.title.toUpperCase();
  //   const upperCaseB = b.title.toUpperCase();
  //객체 값 뒤엔 toUpperCase 적용안댐 왜?와이낫?
  // if (upperCaseA < upperCaseB) return 1;  
  // if (upperCaseA < upperCaseB) return -1;  
  // if (upperCaseA == upperCaseB) return 0;  
  // })
  products.sort((a,b)=>{
    if(a.title < b.title) return 1;
    //리턴값이 양수이면 a 오른쪽으로
    if(a.title > b.title) return -1;
    //리턴값이 음수이면 b 오른쪽으로ㄴ
    if(a.title == b.title) return 0;
  })
  console.log(products);
  CardWrap.innerHTML='';
  for(let i=0; i<products.length; i++){
      CardWrap.innerHTML+=`
      <div class="card">
          <img src="https://via.placeholder.com/600">
          <div class="card-body">
          <h5 class="title">${products[i].title}</h5>
          <p class="price">가격 : ${ products[i].price}</p>
          <button class="btn">주문하기</button>
       </div>`
}}

titleSortBtn.addEventListener('click', titleReverse);