import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
  //use navigate hook is used for navigation in pages
  return (
    <>
      <div>Home</div>
      <button onClick={()=>navigate('order-summary', {replace:true})}>Place Order</button> 
      {/* we pass navigate function on click with path name and it gets used by hook */}
     
    </>
  );
};

export default Home;
