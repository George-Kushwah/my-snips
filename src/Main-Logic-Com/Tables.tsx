import React, { useState } from "react";

const Tables = () => {
  const [dat, setdat] = useState<any>([
    {
      id: 0,
      val: "lorem spuam -1",
      dc: "Table-1 Data",
    },
    {
      id: 2,
      val: "lorem spuam -2",
      dc: "Table-1 Data",
    },
    {
      id: 3,
      val: "lorem spuam -3",
      dc: "Table-1 Data",
    },
    {
      id: 4,
      val: "lorem spuam -4",
      dc: "Table-1 Data",
    },
    {
      id: 5,
      val: "lorem spuam -5",
      dc: "Table-1 Data",
    },
  ]);

  const [tab, settab] = useState<any>([
    {
      id: 0,
      val: "lorem spuam -1",
      dc: "Table-2 Data",
    },
    {
      id: 2,
      val: "lorem spuam -2",
      dc: "Table-2 Data",
    },
    {
      id: 3,
      val: "lorem spuam -3",
      dc: "Table-2 Data",
    },
    {
      id: 4,
      val: "lorem spuam -4",
      dc: "Table-2 Data",
    },
    {
      id: 5,
      val: "lorem spuam -5",
      dc: "Table-2 Data",
    },
  ]);

  const PushTable = (ev: any) => {
    let dc = [...dat];
    const dc1 = [...tab];
    let update = dc[ev - 1];
    dc.splice(ev - 1, 1);
    dc1.push(update);
    setdat(dc);
    settab(dc1);
  };

  const Poptable = (ev: any) => {
    let dc = [...tab];
    const dc1 = [...dat];
    let update = dc[ev - 1];
    dc.splice(ev - 1, 1);
    dc1.push(update);
    setdat(dc1);
    settab(dc);
  };
  const Vetable = (ind: any, ev: any) => {
    if (ev === "fr") {
      console.log(dat[ind - 1]);
    } else console.log(tab[ind - 1]);
  };
  return (
    <div>
      <table className="table table-borderd table-striped">
        <tbody>
          {dat.map((item: any, ind: any) => (
            <tr key={ind}>
              <td>{++ind}</td>
              <td>{item.val}</td>
              <td>
                <button onClick={() => PushTable(ind)} className="btn btn-dark">
                  Push
                </button>
              </td>
              <td>{item.dc}</td>
              <td>
                <button
                  onClick={() => Vetable(ind, "fr")}
                  className="btn btn-dark"
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <br />
      <table className="table table-borderd table-striped">
        <tbody>
          {tab.map((item: any, ind: any) => (
            <tr key={ind}>
              <td>{++ind}</td>
              <td>{item.val}</td>
              <td>
                <button onClick={() => Poptable(ind)} className="btn btn-dark">
                  Pop
                </button>
              </td>
              <td>{item.dc}</td>
              <td>
                <button
                  onClick={() => Vetable(ind, "tw")}
                  className="btn btn-dark"
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Tables;
