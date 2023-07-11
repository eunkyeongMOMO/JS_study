const AddmemoButton = document.getElementById("add-memo"),
  RemoveAllButton = document.getElementById("remove-all"),
  memoList = document.querySelector(".memos");

class Item {
  constructor(memoName) {
    this.newmemo(memoName);
  }

  newmemo(memo) {
    const div = document.createElement("div");
    const Input = document.createElement("input");
    Input.value = memo;
    Input.disabled = true;
    // 수정 버튼
  const EditButton = document.createElement("button");
    EditButton.innerText = "수정";
    let btnClick = 0;  
    EditButton.addEventListener("click",()=>{
        if(btnClick === 0){
        Input.disabled =false;
        Input.focus();
        EditButton.innerText = "수정완료";
        btnClick=1;
       }else{
        Input.disabled=true;
        EditButton.innerText="수정";
       } })
    // 삭제 버튼
    const DeleteButton = document.createElement("button");
    DeleteButton.innerText = "삭제";
    DeleteButton.addEventListener("click", () => memoList.removeChild(div));
    DeleteButton.classList.add("delete-button");

    //라벨추가
    const labelInput = document.createElement("input"),
    labelAdd = document.createElement("button"),
    colorSelect = document.createElement('select'),
    Label = document.createElement("span"); 
    colorSelect.classList.add('colorSelect');
    colorSelect.innerHTML=`
      <option value="">LabelColor</option>
      <option value="blue">blue</option>
      <option value="orange">orange</option>
      <option value="pink">pink</option>
      <option value="yellow">yellow</option>
      <option value="green">green</option>`
    labelInput.style.display= "none"
    labelAdd.innerText="라벨 추가";  
  
    labelAdd.addEventListener("click", ()=>{
      labelInput.style.display= "inline-block";
      labelAdd.after(colorSelect);
      if(labelInput===""){
        alert('라벨에 들어갈 글자를 입력하세요!')
      }else{
      colorSelect.addEventListener("change",(e)=>{
        Label.classList.add(e.target.value);})
       Label.innerText=labelInput.value;
       Input.before(Label);
      }
      })
    //done
    const doneCheck = document.createElement('input');
    doneCheck.type='checkbox';
    if(doneCheck.checked===true){
      div.classList.add('done');
      EditButton.style.display="none";
      labelAdd.style.display="none";
    }
    //우선순위
    const rankingInput = document.createElement('input'),
    rankingSave = document.createElement('button'),
    rankingArr =[];

    if(rankingInput.value!==''){
    
    }
    div.append(Input, EditButton, DeleteButton, labelInput,labelAdd);
    memoList.appendChild(div);
    div.classList.add('add_memo');
  }
}
const checkInput = () => {
  const input = document.getElementById("memo-text");
  if (input.value !== "") {
    new Item(input.value);
  }
  input.value = "";
};
const deletememos = () => {
  while (memoList.hasChildNodes()) {
    memoList.removeChild(memoList.firstChild);
  }
};



RemoveAllButton.addEventListener("click", deletememos);
AddmemoButton.addEventListener("click", checkInput);
