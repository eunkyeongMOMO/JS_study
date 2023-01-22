
const tabManu0 = document.querySelectorAll('.tabButton')[0];
const tabManu1 = document.querySelectorAll('.tabButton')[1];
const tabManu2 = document.querySelectorAll('.tabButton')[2];
const tabContent0 = document.querySelectorAll('.tabContent')[0];
const tabContent1 = document.querySelectorAll('.tabContent')[1];
const tabContent2 = document.querySelectorAll('.tabContent')[2];
const tabManu=[tabManu0,tabManu1,tabContent2];

for(let i=0; i<tabManu.length; i++){
tabManu+i.addEventListener('click',()=>{
    tabManu0.classList.remove('active');
    tabManu1.classList.remove('active');
    tabManu2.classList.remove('active');
    tabManu+i.classList.add('active');
    tabContent0.classList.remove('show');
    tabContent1.classList.remove('show');
    tabContent2.classList.remove('show');
    tabContent+i.classList.add('show');}
)}