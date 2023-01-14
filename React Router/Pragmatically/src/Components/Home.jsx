import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navi=useNavigate();
    const goDash=()=>{
        navi("/dash")
    }
  return (
    <>
    <div>Home</div>
    <button type='button' onClick={goDash}>Dash</button>
    </>
  )
}

export default Home