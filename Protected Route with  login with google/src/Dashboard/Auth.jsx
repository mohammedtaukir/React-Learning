import { useState } from "react";
import { Suspense } from "react";
// import reactLogo from './assets/react.svg'
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
// import "./style.css"
function Auth() {
  const [detial, setDetail] = useState([]);
  const [verfiy, Setverfiy] = useState(false);
  const handleLogout = () => {
    console.clear();
    setDetail("");
  };
  const login = useGoogleLogin({
    onSuccess: async (respose) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${respose.access_token}`,
            },
          }
        );
        Setverfiy(true);
        setDetail([...detial, res.data]);
      } catch (err) {
        console.log(err);
      }
    },
  });
  console.log(detial, "show me");
  // const logout
  return (
    <div>
      {detial.length === 0 ? (
        <button onClick={login}>Google Login</button>
      ) : (
        detial.map((e) => (
          <div>
            
            <img
              src={e.picture}
              alt=""
            />

            <p style={{ color: "red" }}>{e.name}</p>
            <p>{e.email}</p>
            <p>{e.given_name}</p>

            <button
              onClick={handleLogout}
              
            >
              logout
            </button>
          </div>
        ))
      )}

      
    </div>
  );
}

export default Auth;
