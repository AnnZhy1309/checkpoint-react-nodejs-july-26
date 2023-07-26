import cors from "cors";
import express, { Request, Response } from "express";
import {getAll, updateById, deleteById, create} from "./controllers.js"

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


app.post("/api/posts", create)

app.get("/api/post", getAll)

app.put("/api/post/:id", updateById);

app.delete("/api/post/:id", deleteById)

app.listen(port, () => {
  console.log("Server started on port", port);
});

