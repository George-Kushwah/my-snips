import React, { useEffect } from "react";
import { useGetByNameQuery } from "./RTKQuery/Loadapi";

const RTKQuery = () => {
  const MouseHanler = (ev: any) => {
    console.log("Click event", {
      x: ev.clientX,
      y: ev.clientY,
      time: new Date().toString(),
    });
  };

  const Types = (ev: any) => {
    console.log("Type event", {
      x: ev.key,
      time: new Date().toString(),
    });
  };

  const Sizes = () => {
    console.log("Window size", {
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("click", MouseHanler);
    window.addEventListener("keypress", Types);
    window.addEventListener("resize", Sizes);
    return () => {
      window.removeEventListener("click", MouseHanler);
      window.removeEventListener("keypress", Types);
      window.removeEventListener("resize", Sizes);
    };
  });

  const { data, error, isLoading } = useGetByNameQuery();
  console.log(data);
  return <div>fdfdfds</div>;
};

export default RTKQuery;
