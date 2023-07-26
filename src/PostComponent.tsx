type PostCompType = {
        content: string,
        id:number,
        toGet:Function,
        postArr:[]
    }
    
    export default function PostComp({postArr, id, content}:PostCompType){

    const API_URL="http://localhost:3001/api/posts";

    const toUpdate=async({content, id, toGet})=>{
        const response = await fetch(API_URL + "/" + id, {
          method: "PUT",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text: content}),
        });
        toGet();
      }

    const toDelete=async({id, toGet})=>{
        const response = await fetch(API_URL + "/" + id, {
            method: "DELETE",
            mode: "cors",
          });
      toGet()
    }

    return(
    <div>{content}
    <button onClick={()=>{
        toDelete(id)}}>Delete</button>
    <button onClick={()=>{
        toUpdate(id)}}>Update</button>
  </div>
  )
}