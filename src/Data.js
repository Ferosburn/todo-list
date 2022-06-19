import React, { useState } from "react";

function Data(props) {
  const [check, setCheck] = useState('');
  const [finished, setFinished] = useState('');
  const [hideItem, setHideItem] = useState('');
  const handleCheck = () => {
    if(check === '') {
      setCheck('V');
      setFinished('finished')
    } else {
      setCheck('');
      setFinished('');
    }
  }
  const handleDelete = () => {
    setHideItem('hidden');
  }

  return (
    <div className={`item ${finished} ${hideItem}`}>
      <button className="checklist" onClick={()=>{handleCheck()}}>{check}</button>
      <span>{props.item}{props.id}</span>
      <button onClick={()=>{handleDelete()}}>X</button>
    </div>
  )
}

export default Data;