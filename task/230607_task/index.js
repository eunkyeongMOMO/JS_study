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

    let btnClick =false;
    AllBtn.addEventListener('click',()=>{
        AllBtnClick();
    })

    const AllBtnClick = () =>{
        if(btnClick===false){
            console.log('작동되고있단다')
             wordList.map( el => el.classList.add('on'))
             btnClick = true;
        }else{
            console.log('작동되고있단다2222');
             wordList.map( el => el.classList.remove('on'))
            btnClick = false;
        }}
}
const fuc = (solution, solution2) =>{
   return solution[0] > solution2[0] ? 1 : solution[1] > solution2[1] ? 1 : solution[2] > solution2[2] ? 1 :0 
  }
  console.log( fuc([2021,1,3],[2021,3,5]))
  
 