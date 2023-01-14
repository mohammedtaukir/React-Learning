import React from 'react'
import { useNavigate } from 'react-router-dom'

export const OrderSummary = () => {
    const naviaget=useNavigate()
  return (
    <>
    <div>Order Confirmed!</div>
    <button onClick={()=>naviaget(-1)}>back</button> 
    </>
    
  )
}
