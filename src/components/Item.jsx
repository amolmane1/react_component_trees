import React from "react";

function Item(props) {
  return (
    <li
      onClick={function () {
        props.functionOnClick(props.id);
      }}
    >
      {props.value}
    </li>
  );
}

export default Item;
