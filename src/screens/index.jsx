import React from 'react'
import {Component} from '../component/component.jsx'
import { useState } from 'react'
import array from './array.jsx'



export function Index() {

  //1.UPPERCASE

  const [name, setName] = useState('')
  const [resultName, setResultName] = useState('')

  const handleChangeName = (e) => {
    setName(e.target.value)
  
  }

  const handleClickName = () => {
    setResultName(name.toUpperCase())
  }

  //2.LOWERCASE

  const [user, setUser] = useState('')
  const [lowName, setLowName] = useState ('')

  const handleSetUser = (e) => {
    setUser(e.target.value)
  }

  const handleLowName = () => {
    setLowName(user.toLowerCase())
  }

  //3.REPEAT

  const [repName, setRepname] = useState('')
  const [output, setOutput] = useState('')

  const handleRepName = (e) => {
    setRepname(e.target.value)
  }

  const handleSetOutput = () => {
    setOutput(repName.repeat(2))
  }


  //4.REPLACE

  const [replName, setReplName] = useState('')
  const [outputRepl, setOutputRepl] = useState('')

  const handleReplName = (e) => {
    setReplName(e.target.value)
  }

  const handleSetOutputRepl = () => {
    setOutputRepl(replName.replaceAll('a', 'b'))
  }


  //5.SUB STRING

  const [subStringName, setSubStringName] = useState('')
  const [outputSubString, setOutputSubString] = useState('')

  const handleSubStringName = (e) => {
    setSubStringName(e.target.value)
  }

  const handleSetOutputSubStringName = () => {
    setOutputSubString(subStringName.substring(2))
  }


  //6.CODE POINT AT

  const [cpaName, setCpaName] = useState('')
  const [outputCpa, setOutputCpa] = useState('')

  const handleCpaName = (e) => {
    setCpaName(e.target.value)
  }

  const handleSetOutputCpaName = () => {
    setOutputCpa(cpaName.codePointAt(2))
  }

  //7. CONCAT

  const [conName, setConName] = useState('')
  const [outputCon, setOutputCon] = useState('')
  const variable = "kamu nanya?"

  const handleConName = (e) => {
    setConName(e.target.value)
  }

  const handleSetOutputConName = () => {
    setOutputCon(conName.concat('', variable))
  }


  // 8. AT 

  const [atName, setAtName] = useState('')
  const [outputAt, setOutputAt] = useState('')
  const index = 5;

  const handleAtName = (e) => {
    setAtName(e.target.value)
  }

  const handleSetOutputAtName = () => {
    setOutputAt(atName.at(index))
  }

  // 9. Includes 

  const [incName, setIncName] = useState('')
  const [outputInc, setOutputInc] = useState('')
  const word = "hello";

  const handleIncName = (e) => {
    setIncName(e.target.value)
  }

  const handleSetOutputIncName = () => {
     setOutputInc(`The word "${word}" ${incName.includes(word) ? 'is' : 'is not'} in the text`)
  }

  // 10. prototype.padEnd

  const [padName, setPadName] = useState('')
  const [outputPad, setOutputPad] = useState('')

  const handlePadName = (e) => {
    setPadName(e.target.value)
  }

  const handleSetOutputPadName = () => {
    setOutputPad(padName.padEnd(20, '*'))
  }

  return (

  <div className='logic-string'>
      
     <h3>LOGIC STATEMENT STRING</h3>
      
    <div className='string'>
    <Component label="name uppercase" value={name} handleChange={handleChangeName} handleClick={handleClickName} result={resultName} />
    <Component label="name lowercase" value={user} handleChange={handleSetUser} handleClick={handleLowName} result={lowName} />
    <Component label="name repeat" value={repName} handleChange={handleRepName} handleClick={handleSetOutput} result={output} />
    <Component label="name replace" value={replName} handleChange={handleReplName} handleClick={handleSetOutputRepl} result={outputRepl} />
    <Component label="name substring" value={subStringName} handleChange={handleSubStringName} handleClick={handleSetOutputSubStringName} result={outputSubString} />
    <Component label="name code point at" value={cpaName} handleChange={handleCpaName} handleClick={handleSetOutputCpaName} result={outputCpa} />
    <Component label="name concat" value={conName} handleChange={handleConName} handleClick={handleSetOutputConName} result={outputCon} />
    <Component label="name at" value={atName} handleChange={handleAtName} handleClick={handleSetOutputAtName} result={outputAt} />
    <Component label="name Includes" value={incName} handleChange={handleIncName} handleClick={handleSetOutputIncName} result={outputInc} />
    <Component label="name PadEnd" value={padName} handleChange={handlePadName} handleClick={handleSetOutputPadName} result={outputPad} />
    </div>

      
  </div>
  )
}