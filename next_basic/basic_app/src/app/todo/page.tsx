import { MongoClient } from "mongodb";
import { connectDB } from "../../../util/database";

async function Todo() {
    const _db= (await connectDB).db("ToDoApp")
    const dataList= await _db.collection('post').find().toArray();
    console.log(dataList);
    let TodoList =['스트레칭하기','심바산책하기','청소하기','리액트 다까자뿌따']
    return(
        <section className="todoListWrap">
            <h2>오늘의 투두리스트 보여줄거임</h2>
            <ul>
              {
                TodoList.map((item,index)=>{
                    return(
                        <li key={index}>
                            <input type="checkbox" name="" id={`todayTodo${index}`} />
                            <label htmlFor={`todayTodo${index}`} >0{(index+1)}.{item}</label> </li>
                    )
                })
              }
            </ul>
        </section>
    )
}

export default Todo