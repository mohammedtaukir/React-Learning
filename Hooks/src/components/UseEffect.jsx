import React from "react";
import { useState, useEffect } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);
  const [name, setName]= useState('');
  useEffect(()=>{
    console.log('useeffect updating title')
    document.title=`you clicked ${count} times`
    // console.log(count)
  },[count])
  return (
    <div>
        <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
      <button onClick={() => setCount(count + 1)}>Click {count}  times</button>
    </div>
  );
}

export default UseEffect;
