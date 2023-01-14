// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import './App.css'

// import Auth from "./Dashboard/Auth";
import { HomePage } from "./HomePage";
import { Route, Routes } from "react-router-dom";
import { NoMatch } from "./NoMatch";
import { Dashboard } from "./Dashboard/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        ></Route>
        <Route
          path="dashboard"
          element={<Dashboard />}
        ></Route>
        <Route path="*" element={<NoMatch/>}>

        </Route>
      </Routes>
    </>
  );
}

export default App;
