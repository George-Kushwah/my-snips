import React, { useMemo, useDeferredValue, useEffect } from "react";

interface IHookref {
  search: any;
}

const Hooks3 = ({ search }: IHookref) => {
  const defferdval = useDeferredValue(search);
  useEffect(() => {
    console.log("search--------", search);
    console.log("def----", defferdval);
  }, [search, defferdval]);
  return useMemo(() => {
    let arr = [];
    for (let i = 0; i < 1000; i++) {
      arr.push(<div key={i}>{defferdval}</div>);
    }
    return arr;
  }, [defferdval]);
};
export default Hooks3;
