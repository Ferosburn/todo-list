import React from "react";
import Data from "./Data";

function List(props) {
  return (
    <div>
      {props.items.map((item, index) => {
        return(
          <Data key={index} item={item} id={index}/>
        )
      })}
    </div>
  )
}

export default List;