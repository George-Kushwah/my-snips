import React, { useState, useRef, useEffect, useCallback } from "react";

const Addcounter = () => {
  const [vals, setvals] = useState<any>(0);
  const refs = useRef<any>(null);
  const [ab, setab] = useState<any>([1, 2, 3]);

  // useEffect(() => {
  //   setab(ab + 1);
  // });

  const SetValue = (ev: any) => {
    if (refs.current) {
      if (ev === "dec") setvals((prev: any) => vals !== 0 && prev - 1);
      else if (ev === "inr") setvals((prev: any) => prev + 1);
    }
  };

  useEffect(() => {
    if (refs.current) {
      clearInterval(refs.current);
      refs.current = null;
    }
    return () => {
      clearInterval(refs.current);
      refs.current = null;
    };
  }, []);

  const Handlemousedown = (ev: any) => {
    if (refs.current) return;
    refs.current = setInterval(() => {
      setvals((prev: any) => {
        let newval = prev + 1;
        if (ev === "dec") {
          newval = prev - 1;
        }
        return newval;
      });
    }, 100);
  };
  const Hanldeclear = () => {
    clearInterval(refs.current);
    refs.current = null;
  };

  const clickMe = () => {
    //ab.push(4);
  };

  return (
    <div className="container wea-hei d-flex justify-content-center align-items-center">
      <div className="col-lg-5 counter justify-content-center d-flex">
        <h5 className="text-center">My Counter</h5>
        {ab.map((ien: any, ind: any) => (
          <div key={ind}>{ien}</div>
        ))}
        <br></br>
        <button type="button" onClick={clickMe}>
          Click
        </button>
        <div>
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => SetValue("dec")}
            onMouseDown={() => Handlemousedown("dec")}
            onMouseLeave={Hanldeclear}
            onMouseUp={Hanldeclear}
          >
            -
          </button>
          <input
            type="number"
            value={vals}
            onChange={(e) => setvals(e.target.value)}
          ></input>
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => SetValue("inr")}
            onMouseDown={() => Handlemousedown("inr")}
            onMouseLeave={Hanldeclear}
            onMouseUp={Hanldeclear}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
export default Addcounter;
