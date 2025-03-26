import React, { useDeferredValue, useMemo, useEffect } from "react";

interface deboiIparops {
  querys: any;
}

const Debounce = ({ querys }: deboiIparops) => {
  const RealValue = useDeferredValue(querys);
  useEffect(() => {
    console.log("Querys value: ", querys);
    console.log("Defered value: ", RealValue);
  }, [querys, RealValue]);

  return useMemo(() => {
    let arr = [];
    for (let i = 0; i < 150; i++) {
      arr.push(<div key={i}>{RealValue}</div>);
    }
    return arr;
  }, [RealValue]);
};

export default Debounce;
