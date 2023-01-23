
const tabList =document.querySelector('.list');
const tabMenu0 = document.querySelectorAll('.tabButton')[0];
const tabMenu1 = document.querySelectorAll('.tabButton')[1];
const tabMenu2 = document.querySelectorAll('.tabButton')[2];
const tabContent0 = document.querySelectorAll('.tabContent')[0];
const tabContent1 = document.querySelectorAll('.tabContent')[1];
const tabContent2 = document.querySelectorAll('.tabContent')[2];
const TabMenu=[tabMenu0,tabMenu1,tabMenu2];
const TabContent=[tabContent0,tabContent1,tabContent2];

let tabOpen=(index)=>{
    tabMenu0.classList.remove('active');
    tabMenu1.classList.remove('active');
    tabMenu2.classList.remove('active');
    TabMenu[index].classList.add('active');
    tabContent0.classList.remove('show');
    tabContent1.classList.remove('show');
    tabContent2.classList.remove('show');
    TabContent[index].classList.add('show');
}

// for(let i=0; i<TabMenu.length; i++){
// TabMenu[i].addEventListener('click',()=>tabOpen(i)
// )}

//이벤트 버블링 +data이욜해서 이벤트리스너 최소한으로 사용하기

tabList.addEventListener('click',(e)=>{
    tabOpen(Number(e.target.dataset.index));
})