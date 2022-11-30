import React from 'react'
import { Context } from './Context'
import { useContext } from 'react'
import billIcon from "./imgs/bill-icon.png"
import "./bill.css"

export default function Bill() {
    const context = useContext(Context)
  return (
    <div>
        <div className='text-over-input'>
          <p>Bill</p>
          {context.billValue <= 0 ? <p className='zero'>Can't be Zero</p> : ""}
        </div>
        <form action="">
            <img src={billIcon} alt="" />
            <input type="number" value={context.billValue} placeholder="0"  onChange={(e)=>context.changeBill(e)}/>
        </form>
    </div>
  )
}
