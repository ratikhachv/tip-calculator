import React, { useContext } from 'react'
import { Context } from './Context'
import "./activeButton.css"

export default function TipAmount(props) {
  const context = useContext(Context)
  return (
    <>{(typeof(props.amount) === 'number') ? <button id={props.id} className='tip-amount' onClick={()=>{context.checkTip(); 
    context.chooseTip(props.amount)}} >{props.amount}%</button>
     : <input  type="number" value={context.userChosenTip}  className='tip-amount' button id="custom" onChange={(e)=>{context.selectCustomTip(e); context.checkTip()}} placeholder="custom"/>}
    </>
  )
}
{/* <button id="custom" className='tip-amount' onChange={(e)=>context.selectCustomTip(e)} value={context.customTip}>{context.customTip} </button>} */}