import React, { useEffect, useState } from 'react'

export default function EffectHookMouse() 
{
    const [x, setX]= useState(0)
    const [y, setY]=useState(0)
    const logMousePosition=e=>{
        console.log('mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        console.log('useeffect called')
        window.addEventListener('mousemove', logMousePosition)

        return()=>{
            console.log('component unmounting code')
            window.removeEventListener('mousemove',logMousePosition)
            //added things used by effect to unmount
        }
    },[])
  return (
    <div>
        hooks x- {x}
        hooks y-{y}
    </div>
  )
}
