import React, { useState, useReducer } from "react";

interface IinputProps {
  refs: any;
  counst: (we: any) => void;
}

const inial = 0;
const frm = {
  names: "",
};
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
const reducerfr = (state: any, action: any) => {
  switch (action) {
    case "check":
      return { ...state, names: "Ssfsds" };
    default:
      return { ...state, names: "fdfdfd" };
  }
};

const Alltype = ({ refs, counst }: IinputProps) => {
  const [count, dispatch] = useReducer(reducer, inial);
  const [form, setform] = useState<any>(frm);
  const [frd, dis1] = useReducer(reducerfr, frm);

  const Handlechange = (ec: any) => {
    setform({ ...form, names: ec.target.value });
  };

  const CallAPI = async () => {
    try {
      let as1 = await fetch("https://jsonplaceholder.typicode.com/users");
      let as2 = await as1.json();
      console.log(as2);
    } catch (e) {
      console.log(e);
    }
  };

  const debon = (fn: any, time: any) => {
    let tem: any = null;
    return function () {
      clearTimeout(tem);
      tem = setTimeout(() => {
        fn();
      }, time);
    };
  };

  const testing = (ed: any, ev: any) => {
    return function () {
      console.log(ed, ev);
    };
  };

  //console.log(frd);
  return (
    <>
      <div className="col-lg-3">
        <button
          type="button"
          onClick={testing("hi", "hello")}
          className="btn btn-dark"
        >
          check pl
        </button>
        <button
          type="button"
          onClick={debon(CallAPI, 300)}
          className="btn btn-dark"
        >
          Call APIp
        </button>
        <input type="text" ref={refs} />
      </div>
      <div className="col-lg-3">
        {count}
        <button
          type="button"
          onClick={() => {
            dispatch("inrr");
            counst(count);
          }}
          className="btn btn-dark"
        >
          Increment
        </button>
        <button
          type="button"
          onClick={() => {
            dispatch("dec");
            counst(count);
          }}
          className="btn btn-dark"
        >
          Decrement
        </button>
        <br></br>
        <input
          type="text"
          value={form?.names}
          onChange={(e) => Handlechange(e)}
        ></input>
        <button
          type="button"
          onClick={() => dis1("check")}
          className="btn btn-dark"
        >
          Decrement
        </button>
      </div>
    </>
  );
};
export default Alltype;
