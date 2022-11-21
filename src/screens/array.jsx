import React, { useState } from "react";
import { Component } from "../component/component.jsx";

function LogicArray() {
  //MAPS

  const [maps, setMaps] = useState();
  const [handleMap, setHandleMap] = useState();

  const handleChangeMaps = (e) => {
    setMaps(e.target.value);
  };

  const handleClickMaps = () => {
    const breaker = maps?.split(" ");
    const wordBreak = breaker?.map((x) => (x = " berhasil"));
    setHandleMap(wordBreak);
  };

  //CONCAT
  const [con, setCon] = useState();
  const [handleCon, setHandleCon] = useState();
  const word = [" array concat berhasil"];

  const handleChangeCon = (e) => {
    setCon(e.target.value);
  };

  const handleClickCon = () => {
    const breaker = con?.split(" ");
    const wordBreak2 = breaker?.concat(word);
    setHandleCon(wordBreak2);
  };

  // FILTER

  const [fil, setFil] = useState();
  const [handleFil, setHandleFil] = useState();

  const handleChangeFil = (e) => {
    setFil(e.target.value);
  };

  const handleClickFil = () => {
    const breaker = fil?.split(" ");
    const wordBreak3 = breaker?.filter((x) => x?.length < 3);

    setHandleFil(wordBreak3);
  };

  //FIND

  const [find, setFind] = useState();
  const [handleFind, setHandleFind] = useState();

  const handleChangeFind = (e) => {
    setFind(e.target.value);
  };

  const handleClickFind = () => {
    const breaker = find?.split(" ");
    const wordBreak4 = breaker?.find((x) => x < 10);
    setHandleFind(wordBreak4);
  };

  // INCLUDES

  const [inc, setInc] = useState();
  const [handleInc, setHandleInc] = useState();
  const cuy = "cuy";

  const handleChangeInc = (e) => {
    setInc(e.target.value);
  };

  const handleClickInc = () => {
    const wordBreak5 = `${inc.includes(cuy) ? "true" : "false"}`;
    console.log(wordBreak5);
    setHandleInc(wordBreak5);
  };

  // JOIN

  const [join, setJoin] = useState([]);
  const [handleJoin, setHandleJoin] = useState();

  const handleChangeJoin = (e) => {
    setJoin(e.target.value);
  };

  const handleClickJoin = () => {
    const breaker = join?.split(" ");
    const wordBreak6 = breaker?.join(["-"]);
    setHandleJoin(wordBreak6);
  };

  // PUSH

  const [push, setPush] = useState([]);
  const [handlePush, setHandlePush] = useState();

  const handleChangePush = (e) => {
    setPush(e.target.value);
  };

  const handleClickPush = () => {
    const breaker = push?.split(" ");
    const wordBreak7 = breaker?.push(["ayam"]);
    setHandlePush(wordBreak7);
  };

  // REDUCE
  const [reduce, setReduce] = useState([]);
  const [handleReduce, setHandleReduce] = useState();
  const number = 200;

  const handleChangeReduce = (e) => {
    setReduce(e.target.value);
  };

  const handleClickReduce = () => {
    const breaker = reduce?.split(" ");
    const wordBreak8 = breaker?.reduce((accumulator, currentValue) => accumulator + currentValue, number);
    setHandleReduce(wordBreak8);
  };

  // REVERSE

  const [reverse, setReverse] = useState([]);
  const [handleReverse, setHandleReverse] = useState();

  const handleChangeReverse = (e) => {
    setReverse(e.target.value);
  };

  const handleClickReverse = () => {
    const breaker = reverse?.split(" ");
    const wordBreak9 = breaker?.reverse();
    setHandleReverse(wordBreak9);
  };

  // SORT

  const [sort, setSort] = useState([]);
  const [handleSort, setHandleSort] = useState();

  const handleChangeSort = (e) => {
    setSort(e.target.value);
  };

  const handleClickSort = () => {
    const breaker = sort?.split(" ");
    const wordBreak10 = breaker?.sort();
    setHandleSort(wordBreak10);
  };

  return (
    <div className="array">
      <h3>LOGIC STATEMENT ARRAY</h3>

      <div className="component-array">
        <Component label="name map (value yg kamu input + berhasil)" value={maps} handleChange={handleChangeMaps} handleClick={handleClickMaps} result={handleMap} />
        <Component label="name concat (value yg kamu input + array concat berhasil) " value={con} handleChange={handleChangeCon} handleClick={handleClickCon} result={handleCon} />
        <Component label="name filter (value yg kamu input akan di masukan jika kata kurang dari 3)" value={fil} handleChange={handleChangeFil} handleClick={handleClickFil} result={handleFil} />
        <Component label="name find (masukan value < 10)" value={find} handleChange={handleChangeFind} handleClick={handleClickFind} result={handleFind} />
        <Component label="name includes (jika tidak ada cuy, maka false dan sebaliknya)" value={inc} handleChange={handleChangeInc} handleClick={handleClickInc} result={handleInc} />
        <Component label="name join (value yg kamu input jika ada spasi diganti jadi -)" value={join} handleChange={handleChangeJoin} handleClick={handleClickJoin} result={handleJoin} />
        <Component label="name push (menghitung value kata yg ada)" value={push} handleChange={handleChangePush} handleClick={handleClickPush} result={handlePush} />
        <Component label="name reduce (tulis berapapun angka akan muncul 200)" value={reduce} handleChange={handleChangeReduce} handleClick={handleClickReduce} result={handleReduce} />
        <Component label="name reverse (value yg kamu input akan terbalik)" value={reverse} handleChange={handleChangeReverse} handleClick={handleClickReverse} result={handleReverse} />
        <Component label="name sort (value yg kamu input akan di urutkan)" value={sort} handleChange={handleChangeSort} handleClick={handleClickSort} result={handleSort} />
      </div>
    </div>
  );
}

export default LogicArray;
