import React from 'react'
import { Context } from './Context'
import { useContext } from 'react'
import billIcon from "./imgs/bill-icon.png"
import "./bill.css"

export default function NumberOfPeople() {
    const context = useContext(Context)
  return (
    <div className='num-people'>
      <div className='text-over-input'>
        <p>Number of People</p>
        {context.numberOfPeople <= 0 ? <p className='zero'>Can't be Zero</p> : ""}
      </div>
        <form action="">
            <img src={billIcon} alt="" />
            <input type="number" value={context.numberOfPeople} placeholder="0"  onChange={(e)=>context.changeNumOfPeople(e)}/>
        </form>
    </div>
  )
}
