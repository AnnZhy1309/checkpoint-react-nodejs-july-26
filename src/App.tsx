import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import PostComp from "./PostComponent";

const API_URL="http://localhost:3001/api/posts";


export function App (postArr) {

const [dataList, setDataList] = useState([]);
const inputRef = useRef;

const toPost = async({content})=>{
  const response = await fetch(API_URL, {
    method: "POST",
    mode: "cors",
    headers: {
    "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: content }),
});
let responseJson = await response.json();
let responseData = responseJson.list;
setDataList(responseData);
}

const toGet = async()=>{
  const response = await fetch(API_URL, {
    method: "GET",
    mode: "cors",
    headers: {
    "Content-Type": "application/json",
    },
});
let responseJson = await response.json();
let responseData = responseJson.list;
setDataList(responseData);
}

useEffect(()=>{
  toGet()
}, [])

  const sort=()=>{
    let arrCopy = [...postArr];
    arrCopy.sort((a, b)=>a.id - b.id);
  }

  const sortReverse=()=>{
    let arrCopy = [...postArr];
    arrCopy.sort((a, b)=>b.id - a.id);
  }

  return <div className="main-content">
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={async()=>{
          const response = await fetch(API_URL, {
            method: "POST",
            mode: "cors",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({ value: text }),
        });
        let responseJson = await response.json();
        let responseData = responseJson.list;
        setDataList(responseData);
        }
      }>Save</button>
    </div>
    <div>
      {dataList.map((item)=>(
      <PostComp postArr={postArr} id={item.id} content={item.content} toGet={toGet}></PostComp>))}
    </div>
    <button onClick={sort}>Sort</button>
    <button onClick={sortReverse}>Reverse sort</button>
  </div>;
}

export default App;
