import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './Auth'

export const Login = () => {
    const [user, setUser]= useState('')
    const auth=useAuth()
    const navigate=useNavigate()
    const handleLogin=()=>{
        auth.Login(user)
        navigate('/')
    }
  return (
    <div>
        <label>
            Username: <input type="text" onChange={e=>(e.target.value)}/>
        </label>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}
