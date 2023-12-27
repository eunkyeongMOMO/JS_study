import { connectDB } from "@/util/database";
import {Link} from 'next/link';
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
                                <h4>{item._id}</h4>
                                <Link preFetch={false} href={`/dedail/${item.id}`}><h4>{item.goal}</h4></Link>
                                {/* prefetch 기능은 개발단계에선 확인불가능*/}

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
//dynamic route -> [폴더명]
export default Todo