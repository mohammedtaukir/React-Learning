import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Dash from './Components/dash'
import Home from './Components/Home'

function App() {
  

  return (
    <>
   <Routes>
    <Route path='/' element={<Home></Home>}>

    </Route>
        <Route
          path="/dash"
          element={<Dash/>} 
        ></Route>
   </Routes>
    </>
  )
}

export default App
