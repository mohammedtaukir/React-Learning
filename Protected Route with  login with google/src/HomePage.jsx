import React from "react";
import Auth from "./Dashboard/Auth";
import { Dashboard } from "./Dashboard/Dashboard";
import './style.css'
import { useNavigate } from "react-router-dom";
// import { GoogleLogin } from "@react-oauth/google";
// import axios from "axios";

export const HomePage = () => {
  const navigate = useNavigate();
  const goToDashboard=()=>{

    let verify = {'token':false}
    return(
        verify.token ? <Outlet/> : <Navigate to="/login"/>
    )
    navigate("dashboard")
  }

  return (
    <>
      <div className="home">HomePage</div>
      <section className="Auth">
        <button onClick={()=>goToDashboard()}>Dashboard</button>
       
       {/* Auth includes login and logout */}
       <Auth/> 
      </section>
     
    </>
  );
};
