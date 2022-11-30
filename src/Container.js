import React from 'react'
import Functional from './Functional'
import splitter from "./imgs/SPLITTER.png"

export default function Container() {
  return (
    <div className='container'>
        <div className="logo"><img src={splitter} alt="" /></div>
        <Functional/>
    </div>
    
  )
}
