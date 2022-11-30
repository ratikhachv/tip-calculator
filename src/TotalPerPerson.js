import React, { useContext } from 'react'
import { Context } from './Context'
import "./totalPerPerson.css"

export default function TotalPerPerson() {
    const context = useContext(Context)
  return (
    <div className='per-person'>
        <p className='tip-total'>Total <br /><span className='person'>\person</span> </p>
        {/* using '+' to turn string into a number */}
        {context.allSelected && context.notZero ? <p  className='nums'>${(((+context.billValue * +context.userChosenTip / 100) + +context.billValue) / +context.numberOfPeople).toFixed(2)}</p> : <p className='nums'>0.00</p> }
    </div>
  )
}
