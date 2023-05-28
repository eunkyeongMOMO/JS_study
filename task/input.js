
const infoActive= (obj)=>{
     document.querySelector('.'+obj).classList.add('active');
}
const Name = document.querySelector('#name');
const NameCheck = document.querySelector('#nameCheck');
const Phone = document.querySelector('#phone');
const PhoneCheck = document.querySelector('#phoneCheck');

//버튼 한개로 폼 팝업 띄우고 입력값 받은뒤에 폼 전송하기
const formClick = ()=>{
    let popup=false;
    if(!popup){
        popup=true;
        document.querySelector('.formWrap').classList.add('active');
    }
        if(Name.value == ''){
            NameCheck.innerHTML='이름을 입력하세요'
            Name.focus();
            return false;
        }
        if(Phone.value == ''){
            PhoneCheck.innerHTML='전화번호를 입력하세요.'
            Phone.focus();
            return false;
        }

       document.eventForm.submit()
}
// 유효성검사/ajax이용은 집에가서/