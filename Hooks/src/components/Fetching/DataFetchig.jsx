import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function DataFetchig() {
  const [post, setPost] = useState({});
  const [id,setId]=useState(1)
  const [idFromButtonClick, setIdFromButtonClcik]= useState(1)
  const handleClick = ()=>{
    setIdFromButtonClcik(id)
  }
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((res) => {
        console.log(res);
        setPost(res.data); // used the state change
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromButtonClick]);
  return (
    <div>
        <input type="text" value={id} onChange={e=>setId(e.target.value)}/>
        <button type="button" onClick={handleClick}>Fetch Post</button>
        <div>{post.title}</div>
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default DataFetchig;
