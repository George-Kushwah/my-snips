import React, { useState, useEffect } from "react";

interface IDprops {
  (value: any, delay: any): void;
}

const Debounce: IDprops = (value: any, delay: any) => {
  const [val, setval] = useState<any>(value);
  useEffect(() => {
    let handler = setTimeout(() => setval(value), delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return val;
};
export default Debounce;
