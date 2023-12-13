import { connectDB } from "../../../../util/database";
export default function Detail(){
    const _db= (await connectDB).db("ToDoApp")
    const dataList= await _db.collection('post').findOen({_id:2});
    console.log(dataList);
    return(
        <div>
            <h4>title</h4>
            <p>subject</p>
        </div>
    )

}