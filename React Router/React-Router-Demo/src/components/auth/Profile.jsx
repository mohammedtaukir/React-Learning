import React from 'react'
import { useAuth } from './Auth'
import { Navigate, useNavigate } from 'react-router-dom'

const Profile = () => {
    const auth= useAuth()
    const handleLogout=()=>{
        auth.logout()
        Navigate('/')
    }
  return (
    <>
    <div>welcome {auth.user}
    <button onClick={handleLogout}>Logout</button></div>
    </>
  )
}

export default Profile