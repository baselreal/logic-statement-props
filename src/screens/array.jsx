import React, { useState } from 'react'
import {Component} from '../component/component.jsx'

function LogicArray() {

  //MAPS

  const [maps, setMaps] = useState ()
  const [handleMap, setHandleMap] = useState ()
  
  const handleChangeMaps = (e) => {
      setMaps(e.target.value)
  }

  const handleClickMaps = () => {
    const breaker = maps?.split(' ')
    const wordBreak = breaker?.map(x => x = ' berhasil')
    setHandleMap(wordBreak)
  } 

  //CONCAT
  const [con, setCon] = useState ()
  const [handleCon, setHandleCon] = useState ()
  const word = [' array concat berhasil']

  const handleChangeCon = (e) => {
   setCon(e.target.value)
  }

  const handleClickCon = () => {
    const breaker = con?.split(' ')
    const wordBreak2 = breaker?.concat(word)
    setHandleCon(wordBreak2)
  } 


  // FILTER

  const [fil, setFil] = useState ()
  const [handleFil, setHandleFil] = useState ()

  const handleChangeFil = (e) => {
   setFil(e.target.value)
  }

  const handleClickFil = () => {
    const breaker = fil?.split(' ')
    const wordBreak3 = breaker?.filter(val => val?.length === 3)
    setHandleFil(wordBreak3[0])
  } 

  //FIND 

  const [find, setFind] = useState ()
  const [handleFind, setHandleFind] = useState ()

  const handleChangeFind = (e) => {
   setFind(e.target.value)
  }

  const handleClickFind = () => {
    const breaker = find?.split(' ')
    const wordBreak4 = breaker?.find(x => x > 10)
    setHandleFind(wordBreak4)
  } 

  // INCLUDES

  const [inc, setInc] = useState ()
  const [handleInc, setHandleInc] = useState ()


  const handleChangeInc = (e) => {
   setInc(e.target.value)
  }

  const handleClickInc = () => {
    const breaker = inc?.split(' ')
    const wordBreak5 = breaker?.includes()
    console.log(wordBreak5)
    setHandleInc(wordBreak5[0])
  }  
  
  
  // JOIN 
  
  const [join, setJoin] = useState ([])
  const [handleJoin, setHandleJoin] = useState ()


  const handleChangeJoin = (e) => {
   setJoin(e.target.value)
  }

  const handleClickJoin = () => {
    const breaker = join?.split(' ')
    const wordBreak6 = breaker?.join(['-'])
    setHandleJoin(wordBreak6)
  } 

  // PUSH

  const [push, setPush] = useState ([])
  const [handlePush, setHandlePush] = useState ()


  const handleChangePush = (e) => {
   setPush(e.target.value)
  }

  const handleClickPush = () => {
    const breaker = push?.split(' ')
    const wordBreak7 = breaker?.push(['ayam'])
    setHandlePush(wordBreak7)
  } 


  // REDUCE
  const [reduce, setReduce] = useState ([])
  const [handleReduce, setHandleReduce] = useState ()
  const number = 200


  const handleChangeReduce = (e) => {
    setReduce(e.target.value)
  }

  const handleClickReduce = () => {
    const breaker = reduce?.split(' ')
    const wordBreak8 = breaker?.reduce((accumulator, currentValue)=>accumulator + currentValue, number)
    setHandleReduce(wordBreak8)
  } 


  // REVERSE

  const [reverse, setReverse] = useState ([])
  const [handleReverse, setHandleReverse] = useState ()


  const handleChangeReverse = (e) => {
    setReverse(e.target.value)
  }

  const handleClickReverse = () => {
    const breaker = reverse?.split(' ')
    const wordBreak9 = breaker?.reverse()
    setHandleReverse(wordBreak9)
  } 


  // SORT 

  const [sort, setSort] = useState ([])
  const [handleSort, setHandleSort] = useState ()


  const handleChangeSort = (e) => {
    setSort(e.target.value)
  }

  const handleClickSort = () => {
    const breaker = sort?.split(' ')
    const wordBreak10 = breaker?.sort()
    setHandleSort(wordBreak10)
  } 




  
  return (
    <div className='array'>
        <h3>LOGIC STATEMENT ARRAY</h3>

        <div className="component-array">
        <Component label="name map" value={maps} handleChange={handleChangeMaps} handleClick={handleClickMaps} result={handleMap} />
        <Component label="name concat" value={con} handleChange={handleChangeCon} handleClick={handleClickCon} result={handleCon} />
        <Component label="name filter" value={fil} handleChange={handleChangeFil} handleClick={handleClickFil} result={handleFil} />
        <Component label="name find" value={find} handleChange={handleChangeFind} handleClick={handleClickFind} result={handleFind} />
        <Component label="name includes" value={inc} handleChange={handleChangeInc} handleClick={handleClickInc} result={handleInc} />
        <Component label="name join" value={join} handleChange={handleChangeJoin} handleClick={handleClickJoin} result={handleJoin} />
        <Component label="name push" value={push} handleChange={handleChangePush} handleClick={handleClickPush} result={handlePush} />
        <Component label="name reduce" value={reduce} handleChange={handleChangeReduce} handleClick={handleClickReduce} result={handleReduce} />
        <Component label="name reverse" value={reverse} handleChange={handleChangeReverse} handleClick={handleClickReverse} result={handleReverse} />
        <Component label="name sort" value={sort} handleChange={handleChangeSort} handleClick={handleClickSort} result={handleSort} />
        </div>
    </div>
  )
}

export default LogicArray