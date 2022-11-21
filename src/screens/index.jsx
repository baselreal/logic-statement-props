import React from "react";
import { Component } from "../component/component.jsx";
import { useState } from "react";

export function Index() {
  //1.UPPERCASE

  const [name, setName] = useState("");
  const [resultName, setResultName] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleClickName = () => {
    setResultName(name.toUpperCase());
  };

  //2.LOWERCASE

  const [user, setUser] = useState("");
  const [lowName, setLowName] = useState("");

  const handleSetUser = (e) => {
    setUser(e.target.value);
  };

  const handleLowName = () => {
    setLowName(user.toLowerCase());
  };

  //3.REPEAT

  const [repName, setRepname] = useState("");
  const [output, setOutput] = useState("");

  const handleRepName = (e) => {
    setRepname(e.target.value);
  };

  const handleSetOutput = () => {
    setOutput(repName.repeat(2));
  };

  //4.REPLACE

  const [replName, setReplName] = useState("");
  const [outputRepl, setOutputRepl] = useState("");

  const handleReplName = (e) => {
    setReplName(e.target.value);
  };

  const handleSetOutputRepl = () => {
    setOutputRepl(replName.replaceAll("a", "b"));
  };

  //5.SUB STRING

  const [subStringName, setSubStringName] = useState("");
  const [outputSubString, setOutputSubString] = useState("");

  const handleSubStringName = (e) => {
    setSubStringName(e.target.value);
  };

  const handleSetOutputSubStringName = () => {
    setOutputSubString(subStringName.substring(2));
  };

  //6.CODE POINT AT

  const [cpaName, setCpaName] = useState("");
  const [outputCpa, setOutputCpa] = useState("");

  const handleCpaName = (e) => {
    setCpaName(e.target.value);
  };

  const handleSetOutputCpaName = () => {
    setOutputCpa(cpaName.codePointAt(2));
  };

  //7. CONCAT

  const [conName, setConName] = useState("");
  const [outputCon, setOutputCon] = useState("");
  const variable = "kamu nanya?";

  const handleConName = (e) => {
    setConName(e.target.value);
  };

  const handleSetOutputConName = () => {
    setOutputCon(conName.concat("", variable));
  };

  // 8. AT

  const [atName, setAtName] = useState("");
  const [outputAt, setOutputAt] = useState("");
  const index = 5;

  const handleAtName = (e) => {
    setAtName(e.target.value);
  };

  const handleSetOutputAtName = () => {
    setOutputAt(atName.at(index));
  };

  // 9. Includes

  const [incName, setIncName] = useState("");
  const [outputInc, setOutputInc] = useState("");
  const word = "hello";

  const handleIncName = (e) => {
    setIncName(e.target.value);
  };

  const handleSetOutputIncName = () => {
    setOutputInc(`The word "${word}" ${incName.includes(word) ? "is" : "is not"} in the text`);
  };

  // 10. prototype.padEnd

  const [padName, setPadName] = useState("");
  const [outputPad, setOutputPad] = useState("");

  const handlePadName = (e) => {
    setPadName(e.target.value);
  };

  const handleSetOutputPadName = () => {
    setOutputPad(padName.padEnd(20, "*"));
  };

  return (
    <div className="logic-string">
      <h3>LOGIC STATEMENT STRING</h3>

      <div className="string">
        <Component label="name uppercase (tulis huruf kecil akan jadi besar)" value={name} handleChange={handleChangeName} handleClick={handleClickName} result={resultName} />
        <Component label="name lowercase (tulis huruf besar akan jadi kecil)" value={user} handleChange={handleSetUser} handleClick={handleLowName} result={lowName} />
        <Component label="name repeat (mengulangi kata yg di input)" value={repName} handleChange={handleRepName} handleClick={handleSetOutput} result={output} />
        <Component label="name replace (mengganti huruf a jadi b)" value={replName} handleChange={handleReplName} handleClick={handleSetOutputRepl} result={outputRepl} />
        <Component label="name substring (akan dihitung 2 kata di value pertama)" value={subStringName} handleChange={handleSubStringName} handleClick={handleSetOutputSubStringName} result={outputSubString} />
        <Component label="name code point at (kata diubah menjadi nomor) " value={cpaName} handleChange={handleCpaName} handleClick={handleSetOutputCpaName} result={outputCpa} />
        <Component label="name concat (menambahkan kata, coba tanya)" value={conName} handleChange={handleConName} handleClick={handleSetOutputConName} result={outputCon} />
        <Component label="name at (kata akan tampilkan sesuai index=5)" value={atName} handleChange={handleAtName} handleClick={handleSetOutputAtName} result={outputAt} />
        <Component label="name Includes (kata hello, harus ada di input)" value={incName} handleChange={handleIncName} handleClick={handleSetOutputIncName} result={outputInc} />
        <Component label="name PadEnd (jika string kurang dari 20, maka sisanya akan di tampilkan menjadi bintang *)" value={padName} handleChange={handlePadName} handleClick={handleSetOutputPadName} result={outputPad} />
      </div>
    </div>
  );
}
