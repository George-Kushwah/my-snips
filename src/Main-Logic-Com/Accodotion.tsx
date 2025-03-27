import React, { useState } from "react";

const Accodotion = () => {
  const [clics, setclics] = useState<any>(0);
  const fkdata = [
    {
      heads: "Heading--1",
      datas:
        "Multi-layered client-server neural-netMulti-layered client-server neural-netMulti-layered client-server neural-netMulti-layered client-server neural-netMulti-layered client-server neural-net",
    },
    {
      heads: "Heading--2",
      datas:
        "Multi-Multi-layered client-server neural-netMulti-layered client-server neural-netMulti-layered client-server neural-netlayered client-server neural-net",
    },
    {
      heads: "Heading--3",
      datas:
        "Multi-layereMulti-layered client-server neural-netMulti-layered client-server neural-netd client-server neural-net",
    },
    {
      heads: "Heading--4",
      datas:
        "Multi-layereMulti-layered client-server neural-netMulti-layered client-server neural-netd client-server neural-net",
    },
  ];

  return (
    <div>
      {fkdata.map((item: any, ind: any) => (
        <>
          <div key={`s-${ind}`} className="head">
            {item?.heads}=
            <button
              type="button"
              className="btn btn-light"
              onClick={() => setclics(ind)}
            >
              Show
            </button>
          </div>
          {clics === ind && (
            <>
              <div key={`s-${ind}`} className="data">
                {item?.datas}
              </div>
            </>
          )}
        </>
      ))}
    </div>
  );
};
export default Accodotion;
