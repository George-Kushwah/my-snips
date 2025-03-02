import React, { useState, useMemo } from "react";

export default function Hooks5() {
  const [count, setccount] = useState<any>(0);
  const [multi, setmulti] = useState<any>(1);
  const calls = useMemo(() => {
    console.log("use memo calling");
    return count*2
  },[count])

  return (
    <div>
      {count} {calls}
      <br />
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setccount(count + 1)}
      >
        Count
      </button>
      <br /> <br />
      {multi}
      <br />
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setmulti(multi * 2)}
      >
        Multiply
      </button>
    </div>
  );
}
