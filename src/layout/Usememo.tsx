import React, { useState, useCallback, useMemo } from "react";
import Usememochild from "./Usememochild";

export default function Usememo() {
  const [add, setadd] = useState<any>(0);
  const [multi, setmulti] = useState<any>(1);
  const adds = useCallback(() => {}, [add]);
  const multis = () => {
    setmulti(Math.floor(multi * 2));
  };

  const Minus = useMemo(() => {
    console.log("Hello Memo");
    return add - 1;
  }, [add]);

  return (
    <>
      <div className="container-fluid mt-3">
        Addition:{add} count:{multi} Minus{Minus}
        <button
          type="button"
          onClick={() => setadd(add + 1)}
          className="btn btn-primary mx-lg-1"
        >
          Add
        </button>
        <button
          type="button"
          onClick={() => multis()}
          className="btn btn-primary"
        >
          Count
        </button>
        <Usememochild func={adds} />
      </div>
    </>
  );
}
