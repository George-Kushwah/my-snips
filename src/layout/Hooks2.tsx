import React, { useState, useImperativeHandle, forwardRef, useId } from "react";

interface IHookref {
  refs: any;
}

const Hooks2 = ({ refs }: IHookref) => {
  const ids = useId();
  const [theme, settheme] = useState<string>("dark");
  useImperativeHandle(refs, () => {
    return {
      func1: () => Chilfun(),
    };
  });
  const Chilfun = () => {
    console.log("Hello Hook Childs");
  };
  console.log(ids, "ids");
  return (
    <>
      <div className="contaier-fluid mt-3 p-2">
        <button
          type="button"
          onClick={() => settheme(theme === "dark" ? "white" : "dark")}
          className="btn btn-dark"
        >
          Click here child hooks
        </button>
        {/* <input type="text" ref={refs}></input> */}
      </div>
    </>
  );
};
export default forwardRef(Hooks2);
