import React, { useContext } from 'react'
import { Context } from './Context'

export default function ResetBtn() {
    
    const context = useContext(Context)
  return (
    <button className='reset-btn' id={context.somethingToReset() ? "activateReset" : ""} onClick={context.resetAll}>Reset</button  >
  )
}
