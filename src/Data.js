import React, { useState } from "react";

function Data(props) {
  const [item, setItem] = useState(props.item);
  const [check, setCheck] = useState('');
  const [finished, setFinished] = useState('');
  const [hideItem, setHideItem] = useState('');
  const [update, setUpdate] = useState(false);
  const [updateItem, setUpdateItem] = useState(item);
  let edit;
  if(update) {
    edit = (
      <form onSubmit={()=>{handleSubmit()}}>
        <input value={updateItem} onChange={(e)=>{handleChange(e)}} />
        <button type="submit">update</button>
      </form>
    )
  }
  const handleSubmit = () => {
    setItem(updateItem);
    setUpdate(false);
    setUpdateItem(item)
  }
  const handleChange = (e) => {
    setUpdateItem(e.target.value)
  }
  const handleEdit = () => {
    setUpdate(true);
  }
  const handleCheck = () => {
    if(check === '') {
      setCheck((<strong className="check-icon">V</strong>));
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
      <span>{item}{edit}</span>
      <button onClick={()=>{handleEdit()}}>edit</button>
      <button onClick={()=>{handleDelete()}}>X</button>
    </div>
  )
}

export default Data;