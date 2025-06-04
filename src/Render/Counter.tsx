import React, { useState, useEffect } from "react";

const Counter = () => {
  const [val, setval] = useState<any>(0);
  const [btn, setbtn] = useState<boolean>(false);

  useEffect(() => {
    if (!btn) {
      let id = setInterval(
        () =>
          setval((prev: any) => {
            if (prev < 20) {
              return prev + 2;
            } else return prev;
          }),
        200
      );
      return () => {
        clearInterval(id);
      };
    }
  }, [btn, val]);

  const ounterstop = () => {
    setbtn(!btn);
  };

  return (
    <>
      <h3>{val}</h3>
      <div className="col-xl-1">
        <button type="button" className="btn btn-primary" onClick={ounterstop}>
          {btn ? "Start" : "Stop"}
        </button>
      </div>
    </>
  );
};

export default Counter;
