//js문법으로 구현할수있는 브라우저 기능

class customInput extends HTMLElement{
    connectedCallback(){
        //랜더링속도가 더빠름
        // let label = document.createElement('label');
        // this.appendChild(label);
        // let input = document.createElement('input');
        // this.appendChild(input);
        let name = this.getAttribute('name');
        this.innerHTML = 
        `<label>${name}INPUT</label></label></label><input></input>`
    }
    static get observedAttributes(){
        return['name']
    }
    //해당 attribute가 바뀔때마다 아래 함수 실행
    attributeChangedCallback(){
        this.innerHTML = `<label>${name}INPUT</label></label></label><input></input>`
    }
    //vue, react 처럼 값이 바뀔때마다 재랜더림됨. ->걍 react, vue쓰자...
}

customElements.define('custom-input',customInput);

//shadowDOM

const Shadow = document.querySelector('.shadow').attachShadow({ mode:'open' });
document.querySelector('.shadow').shadowRoot.innerHTML=
`<p>개발자도구에서 어떻게볼까?</p>`

//쉐도우 돔에 넣으면 외부에 영행 안남.

class shadowInput extends HTMLElement{
    connectedCallback(){
        this.attachShadow({mode:'open'});
        this.shadowRoot.innerHTML=
        `<label>ShadowDOM</label><input></input>
        <style>label{color:blue}</style>`
        //html이렇게 쓰면 길고 가독성이 떨어지니까 template태그이용해서 넣는게 좋음
    }
}
customElements.define('shadow-input',shadowInput)
//모듈화하여, 사용가능하고 다른것에 영향주지 않음

class templateUl extends HTMLElement{
    connectedCallback(){
        this.attachShadow({mode:'open'});
        this.shadowRoot.append(todoTem.content.cloneNode(true))
    }
}
customElements.define('todo-ul',templateUl)