const Car = [
    {
        name:'Audi',
        price:30000
    },
    {
        name:'Rolls Royce',
        price:200000
    },
    {
        name:'Maserati',
        price: 150000
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

for(let i=0; i<=NameList.length; i++){
    NameList[i].innerHTML+='Name : '+ Car[i].name;
    PriceList[i].innerHTML+='Price :' +Car[i].price;
}
