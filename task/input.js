
const infoActive= (obj)=>{
     document.querySelector('.'+obj).classList.add('active');
}
const Name = document.querySelector('#name');
const NameCheck = document.querySelector('#nameCheck');
const Phone = document.querySelector('#phone');
const PhoneCheck = document.querySelector('#phoneCheck');


const formClick = ()=>{
    let clickCount =0;
    if(clickCount==0){
        document.querySelector('.formWrap').classList.add('active');
        clickCount++;
    }else if(clickCount==1){
        document.querySelector('.formWrap').classList.add('active');
        if(Name.value == ''){
            NameCheck.innerHTML='아이디를 입력하세요'
            Name.focus();
            return false;
        }
        if(Phone.value == ''){
            PhoneCheck.innerHTML='전화번호를 입력하세요.'
            Phone.focus();
            return false;
        }

        // document.eventForm.submit();
    }
}
// 유효성검사/ajax이용은 집에가서/