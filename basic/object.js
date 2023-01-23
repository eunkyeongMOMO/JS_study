const Car = [
    {
        name:'Audi',
        price:[60000,70000,80000]
    },
    {
        name:'Rolls Royce',
        price:[3000,5000000,600000]
    },
    {
        name:'Maserati',
        price: [150000, 20000, 40000]
    }
]
const card1Name = document.querySelectorAll('.carName')[0];
const card2Name = document.querySelectorAll('.carName')[1];
const card3Name = document.querySelectorAll('.carName')[2];
const NameList =[card1Name,card2Name,card3Name];
const card1Price = document.querySelectorAll('.carPrice')[0];
const card2Price = document.querySelectorAll('.carPrice')[1];
const card3Price = document.querySelectorAll('.carPrice')[2];
const PriceList=[card1Price,card2Price,card3Price];
//NameList[0].innerHTML+='Name : '+ Car[0].name;

// for(let i=0; i<=NameList.length; i++){
//     NameList[i].innerHTML='Name : '+Car[i].name;
//     PriceList[i].innerHTML='Price :' +Car[i].price[0];
// }

//데이터 바인딩 문제2


const products = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' }
  ];
const title1 =document.querySelectorAll('.title')[0];
const title2 =document.querySelectorAll('.title')[1];
const title3 =document.querySelectorAll('.title')[2];
const titleList=[title1,title2,title3];
const price1 =document.querySelectorAll('.price')[0];
const price2 =document.querySelectorAll('.price')[1];
const price3 =document.querySelectorAll('.price')[2];
const priceList =[price1,price2,price3];
//titleList[0].innerHTML=products[0].title;
for(let j=0; j<=titleList.length; j++){
    titleList[j].innerHTML=products[j].title;
    priceList[j].innerHTML='가격 : '+products[j].price;
}