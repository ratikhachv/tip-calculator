import React from 'react'
import TipAmount from './TipAmount'
import "./selectTips.css"
import { Context } from './Context'
import { useContext } from 'react'
import TipPerPesron from './TipPerPesron'

export default function () {
    const context = useContext(Context)
    return (
    <div>
        <p>Select Tip %</p>
        <div className='tip-amounts'>
            {context.btnText.map(el=> <TipAmount amount={el} id={context.userChosenTip==el ? "activeButton": ""}/> )}
        </div>
    </div>
  )
}
