import { connectDB } from "../../../util/database";

async function Todo() {
 
    const _db= (await connectDB).db("ToDoApp")
    const dataList= await _db.collection('post').find().toArray();
    console.log(dataList);
    //db입출력코드는 server component안에서만 씁니다.
    return(
        <section className="todoListWrap">
            <h2>오늘의 투두리스트 보여줄거임</h2>
            <ul>
                {
                    dataList.map((item,i:number)=>{
                        return(
                              <li key={i} className="listItem">
                                <p>{item.goal}</p>
                                <p className="day">{item.dueDate}</p>
                                <p>{item.TodoList}</p>
                            </li>
                        )

                    })
                }
              
            </ul>
        </section>
    )
}

export default Todo