window.onload = function(){
    


    const wordWrap = document.querySelector('.list_wrap');
    const AllBtn= document.querySelector('.celloPhane');
    const wordList = Array.from(document.querySelectorAll('.list_wrap li'));
    //직접 요소를 건들경우, 에러가나는 경우가 생김으로 array로 변환해서 사용

    window.addEventListener('scroll',(e) => {
        ListOn();
    })
    //  화면 가운데 값 구해서 화면 가운데에 왔을때만 보이게 (근데 이거 아님..ㅠ.ㅠ)
    const ListOn = () => {
        const Mid = this.innerHeight / 2 + this.scrollY;   // 화면의 가운데
        const conMid = wordWrap.offsetTop ; // 컨텐츠의 offsetTop
        const target = Math.floor((Mid - conMid) / wordList[0].clientHeight); // 타겟컨텐츠

        wordList.map( el => el.classList.remove('on'))
        wordList[target].classList.add('on')
    }

    const ListOn2 = () =>{

    } 

    const AllBtnClick = () =>{
        let btnClick = false;
        if(btnClick === false){
            AllBtn.addEventListener('click', ()=>{
             wordList.map( el => el.classList.add('on'))
             btnClick = true;
        })}else{
             AllBtn.addEventListener('click', ()=>{
             wordList.map( el => el.classList.remove('on'))
            btnClick = false;
        })
    }}
    AllBtnClick()
}

