import React from 'react'
import { useState } from 'react'
import EffectHookMouse from './EffectHookMouse'

function MouseContainer() {
    const[display, setDisplay]=useState(true)
  return (
    <div>
        <button onClick={()=>setDisplay(!display)} >Toggle to unmount</button>
        {
            display && <EffectHookMouse/>
        }
    </div>
  )
}

export default MouseContainer