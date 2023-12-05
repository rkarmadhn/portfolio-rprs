import React from "react";

export default function ButtonCustom(props) {
  return (
    <button {...props} className="cssbuttons-io-button">
      {props.children}
    </button>
  );
}
