import React, { useState, useEffect, createContext } from "react";
import Lifecycle2 from "./Life-cycle2";
export const global: any = createContext<any>({});
const Lifecycle = () => {
  const [incr, setincr] = useState<any>(0);
  const [green, setgreen] = useState<any>("green");
  // Did com update
  // useEffect(() => {
  //   console.log("Mounting Calling");
  // }, []);
  //should co update
  // useEffect(() => {
  //   console.log("Mounting Calling");
  // }, [incr]);
  //deleteing component
  // useEffect(() => {
  //   console.log("will mount-1");
  //   return () => {
  //     console.log("unmounting component-2");
  //   };
  // }, []);
  return (
    <>
      <div className="container-fluid mt-2">
        <button
          type="button"
          className="btn-default rounded"
          onClick={() => setincr(incr + 1)}
        >
          Click Here
        </button>
        :{incr}
      </div>
      <Lifecycle2 />
      {/* <global.provider value={{ colname: green }}>
        <Lifecycle2 />
      </global.provider> */}
    </>
  );
};
export default Lifecycle;
