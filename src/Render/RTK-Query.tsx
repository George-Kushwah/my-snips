import React, { useEffect } from "react";
import { useGetByNameQuery } from "./RTKQuery/Loadapi";

const RTKQuery = () => {
  const { data, error, isLoading } = useGetByNameQuery();
  const [datas, setdata] = React.useState<any>([]);
  const [val, setval] = React.useState<any>("");
  const [vals, setvals] = React.useState<any>([]);
  useEffect(() => {
    if (data !== undefined && Object.keys(data).length > 0) {
      let aa = [...data?.products];
      let aa1 = aa.sort((a: any, b: any) => a?.title.localeCompare(b?.title));
      setdata(aa1);
    }
  }, [data]);

  useEffect(() => {
    if (val.length > 0) {
      let aa1 = datas.filter((item: any) =>
        item?.title.toLowerCase().includes(val.toLowerCase())
      );

      setvals(aa1);
    } else setvals([]);
  }, [val]);

  // useEffect(() => {
  //   window.addEventListener("click", MouseHanler);
  //   window.addEventListener("keypress", Types);
  //   window.addEventListener("resize", Sizes);
  //   return () => {
  //     window.removeEventListener("click", MouseHanler);
  //     window.removeEventListener("keypress", Types);
  //     window.removeEventListener("resize", Sizes);
  //   };
  // });
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

  const ColorCom = (ev: any) => {
    const parts = ev.split(new RegExp(`(${val})`, "gi"));
    return parts.map((item: any, ind: any) =>
      item?.toLowerCase() === val.toLowerCase() ? (
        <span style={{ color: "red" }} key={ind}>
          {item}
        </span>
      ) : (
        item
      )
    );
  };

  return (
    <>
      <div className="col-xl-3">
        <input
          type="text"
          value={val}
          onChange={(e) => setval(e.target.value)}
        ></input>
      </div>

      {vals &&
        vals.map((item: any, ind: any) => (
          <div key={ind}>
            <p>
              <b>Filter Item:{ColorCom(item?.title)}</b>
            </p>
          </div>
        ))}

      {datas &&
        datas.map((item: any, ind: any) => <div key={ind}>{item?.title}</div>)}
    </>
  );
};

export default RTKQuery;
