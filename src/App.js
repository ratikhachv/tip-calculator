
import "./reset.css"
import './App.css';
import { Context } from './Context';
import Container from './Container';
import { useState } from 'react';


function App() {
  const [billValue, setBillValue] = useState("")
  const [numberOfPeople, setNumberOfPeople] = useState("")
  const [userChosenTip, setUserChosenTip] = useState("")
  const [customTip, setCustomTip] = useState("")
  const [billSelected, setBillSelected] = useState(false)
  const [tipSelected, setTipSelected] = useState(false)
  const [numOfPeopleSelected, setNumOfPeopleSelected] = useState(false)

  let btnText= [5, 10, 15, 25, 50, "custom"]

  function changeBill(e){
    let number = e.target.value
    setBillValue(number)
    setBillSelected(true)
  }
  
  function changeNumOfPeople(e){
    let number =e.target.value
    setNumberOfPeople(number)
    setNumOfPeopleSelected(true)
  }
  function checkTip(){
    setTipSelected(true)
  }
  function chooseTip(buttonValue){
    setUserChosenTip(buttonValue)
  }
  function resetAll(){
    setBillValue("")
    setBillSelected(false)
    setNumOfPeopleSelected(false)
    setNumberOfPeople("")
    setTipSelected(false)
    setUserChosenTip("")
  }
  function selectCustomTip(e){
    setUserChosenTip(e.target.value)
  }
  function somethingToReset(){
    if(billSelected || numOfPeopleSelected || tipSelected){
      console.log(billSelected || numOfPeopleSelected || tipSelected);
      return true
    }else{
      return false
    }
  }

 
  
  return (
    <Context.Provider
     value={{billValue:billValue, changeBill:changeBill,  btnText:btnText, 
     numberOfPeople:numberOfPeople, changeNumOfPeople:changeNumOfPeople, 
     checkTip:checkTip, allSelected:billSelected && numOfPeopleSelected && tipSelected, 
     chooseTip:chooseTip, userChosenTip:userChosenTip, resetAll:resetAll,
     customTip:customTip, selectCustomTip:selectCustomTip,  tipSelected:tipSelected,
     somethingToReset:somethingToReset, notZero: billValue > 0 && numberOfPeople > 0, 
     }}>
      <Container/>
    </Context.Provider>
  );
}

export default App;
