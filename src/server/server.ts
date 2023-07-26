import cors from "cors";
import express, { Request, Response } from "express";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

type Post = {
    id:number,
    content: string
}

let postArr: Post[] = [];
let currentId=1;

const getAll=(req: Request,res:Response)=>{
    res.json({postArr});
}

const create=(req:Request,res:Response)=>{
    let value = req.body.value;
    postArr.push({
        id: currentId,
        content:value,
    })
    currentId = currentId+1;
    res.json({status:"OK", list:{postArr}})
};

const updateById = (req:Request, res:Response)=>{
    const id=req.params;
    const value=req.body;
    for (let index = 0; index < postArr.length; index++) {
        if(postArr[index].id==Number(id)){
        postArr[index].content = value;
        }     
    }
    res.json({status:"ok", list:{postArr}})
}

const deleteById=(req:Request,res:Response)=>{
    const id=req.params;
    const value=req.body;
    postArr.filter((items)=>items.id!==Number(id));
    res.json({status:"ok", list:{postArr}})
}


app.post("/api/posts", create)

app.get("/api/post", getAll)

app.put("/api/post/:id", updateById);

app.delete("/api/post/:id", deleteById)


app.listen(port, () => {
  console.log("Server started on port", port);
});

