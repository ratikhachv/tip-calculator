import React, { useContext } from 'react'
import Bill from './Bill'
import { Context } from './Context'
import "./functional.css"
import NumberOfPeople from './NumberOfPeople'
import ResetBtn from './ResetBtn'
import SelectTip from './SelectTip'
import TipPerPesron from './TipPerPesron'
import TotalPerPerson from './TotalPerPerson'

export default function Functional() {
    const context = useContext(Context)
  return (
    <div className='functional'>
        <div className='left-side'> 
            <Bill/>
            <SelectTip/>
            <NumberOfPeople/>
        </div>
        <div className='right-side'>
          <div>
            <TipPerPesron/>
            <TotalPerPerson/>
          </div>
            <ResetBtn/>
        </div>
    </div>
  )
}
