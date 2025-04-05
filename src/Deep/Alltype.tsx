import React, { useState, useReducer } from "react";

interface IinputProps {
  refs: any;
}

const inial = 0;
const reducer = (state: any, action: any) => {
  switch (action) {
    case "inrr":
      return state + 1;
    case "dec":
      return state - 1;
    default:
      return state;
  }
};

const Alltype = ({ refs }: IinputProps) => {
  const [count, dispatch] = useReducer(reducer, inial);
  return (
    <>
      <div className="col-lg-3">
        <input type="text" ref={refs} />
      </div>
      <div className="col-lg-3">
        {count}
        <button
          type="button"
          onClick={() => dispatch("inrr")}
          className="btn btn-dark"
        >
          Increment
        </button>
        <button
          type="button"
          onClick={() => dispatch("dec")}
          className="btn btn-dark"
        >
          Decrement
        </button>
      </div>
    </>
  );
};
export default Alltype;
