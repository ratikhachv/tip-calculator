import React, { useContext } from 'react'
import { Context } from './Context'
import "./totalPerPerson.css"

export default function TipPerPesron() {
    const context = useContext(Context)
  return (
    <div className='per-person'>
        <p className='tip-total'>Tip Amount <br /><span className='person'>\person</span> </p>
        {context.allSelected && context.notZero ? <p className='nums'>${((+context.billValue * +context.userChosenTip / 100) / +context.numberOfPeople).toFixed(2)}</p> : <p className='nums'>0.00</p>}
    </div>
  )
}
