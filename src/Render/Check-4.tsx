import React, { useState } from "react";

const Checks4 = () => {
  const [val, setval] = useState<any>("");
  const [data, setdata] = useState<any>([]);
  const dat = [
    { name: "Gunnu", code: 215 },
    { name: "George", code: 415 },
    { name: "Babu", code: 223 },
    { name: "Spidey", code: 555 },
    { name: "Allof", code: 987 },
  ];

  const HandleSearch = (ev: any) => {
    setval(ev.target.value);
    if (ev.target.value.length > 0) {
      const newdata = dat.filter((item: any) =>
        item.code.toString().includes(ev.target.value)
      );
      setdata(newdata);
    } else setdata([]);
  };
  return (
    <div>
      <input type="text" value={val} onChange={(e) => HandleSearch(e)}></input>
      {data.map((item: any, ind: any) => (
        <div key={ind}>
          {item.name} {item.code}
        </div>
      ))}
    </div>
  );
};

export default Checks4;
