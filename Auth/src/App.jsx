import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Preferences from "./components/Preferences/Preferences";
import { NoMatch } from "./NoMatch";
function App() {
  return (
    <>
      <div className="wrapper">
        <h1>Application</h1>
        <BrowserRouter>
          <Routes>
            <Route
              path="/dashboard"
              element={<Dashboard />}
            ></Route>

            <Route
              path="/preferences"
              element={<Preferences />}
            ></Route>
            {/* <Route
            path="*"
            element={<NoMatch />}
          /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
