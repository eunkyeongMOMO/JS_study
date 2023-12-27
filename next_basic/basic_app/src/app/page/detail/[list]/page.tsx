import { connectDB  } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Detail(){
    const _db= (await connectDB ).db("ToDoApp")
    const dataList= await _db.collection('post').findOne({_id:1});
    console.log(dataList);
    return(
        <div>
            <h4>title :{dataList.goal} <span>day : {dataList.dueDate}</span> </h4>
            <p>subject :{dataList.TodoList} </p>
        </div>
    )

}