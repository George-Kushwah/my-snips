import React, { useState, useEffect } from "react";
import Tableprint from "./Table-print";
import ALLLpartstart from "./ALL-Lpart-start";

export default function AllLart1() {
  const [adds, setadds] = useState<any>(0);
  const [vals, setVals] = useState<any>([{ value: "" }]);
  const [cols, setcols] = useState<any>("");
  const [rows, setrows] = useState<any>("");
  const [stars, setstars] = useState<any>(0);
  const [showTable, setshowTable] = useState<boolean>(false);
  const [list1, setList1] = useState<any>([
    { title: "item-1", checked: false },
    { title: "item-2", checked: false },
    { title: "item-3", checked: false },
  ]);
  const [list2, setList2] = useState<any>([
    { title: "item-A", checked: false },
    { title: "item-B", checked: false },
    { title: "item-C", checked: false },
  ]);
  const [list3, setList3] = useState<any>([
    { title: "item-1", checked: false },
    { title: "item-2", checked: false },
    { title: "item-3", checked: false },
  ]);
  const [list4, setList4] = useState<any>([
    { title: "item-A", checked: false },
    { title: "item-B", checked: false },
    { title: "item-C", checked: false },
  ]);
  const addfi = () => {
    setVals([...vals, { value: "" }]);
  };
  // useEffect(() => {
  //   setTimeout(() => setadds(adds + 1), 1000);
  // });

  const Handlech = (inde: any, tar: any) => {
    const newfi = [...vals];
    newfi[inde].value = tar.target.value;
    setVals(newfi);
  };

  const delfi = (ind: any) => {
    const newfi = [...vals];
    newfi.splice(ind, 1);
    setVals(newfi);
  };
  const getval = (ev: any) => {
    ev.preventDefault();
    console.log(vals);
  };
  const GetTable = (ev: any) => {
    ev.preventDefault();
    setshowTable(true);
  };

  const Getswap = () => {
    let lis1 = [...list1];
    let lis2 = [...list2];
    lis1.forEach((item: any, ind: any) => {
      if (item.checked) {
        const temp = lis1[ind].title;
        lis1[ind].title = lis2[ind].title;
        lis2[ind].title = temp;
      }
      lis1[ind].checked = false;
    });
    setList1(lis1);
    setList2(lis2);
  };

  const Handlecheck = (ev: any) => {
    const update = [...list1];
    update[ev].checked = !update[ev].checked;
    setList1(update);
  };

  const GetItemchecked1 = (ev: any) => {
    let update = [...list3];
    update[ev].checked = !update[ev].checked;
    setList3(update);
    let adlist1 = [...list4];
    let adlist2 = [...list3];
    adlist2[ev].checked = false;
    adlist1.splice(adlist1.length, 0, update[ev]);
    adlist2.splice(ev, 1);
    setList4(adlist1);
    setList3(adlist2);
  };
  const GetItemchecked2 = (ev: any) => {
    let update = [...list4];
    update[ev].checked = !update[ev].checked;
    setList4(update);
    let adlist1 = [...list3];
    let adlist2 = [...list4];
    adlist2[ev].checked = false;
    adlist1.splice(adlist1.length, 0, update[ev]);
    adlist2.splice(ev, 1);
    //adlist1[ev].checked = false;
    setList4(adlist2);
    setList3(adlist1);
  };

  return (
    <div className="container-fluid mt-3">
      {adds}
      <div className="row">
        <div className="col-md-4">
          <form className="my-form-1" onSubmit={getval} id="myio">
            {vals.map((item: any, ind: any) => {
              return (
                <div key={ind}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Value"
                    value={item.value}
                    onChange={(e) => Handlech(ind, e)}
                  ></input>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => delfi(ind)}
                  >
                    Remove
                  </button>
                </div>
              );
            })}
            <div>
              <button type="button" className="btn btn-primary" onClick={addfi}>
                Add Input
              </button>
              <button type="submit" className="btn btn-success">
                Sumit
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-4">
          <form className="my-form-1" onSubmit={GetTable} id="myio">
            <input
              type="text"
              className="form-control"
              placeholder="enter Row"
              value={rows}
              min={1}
              onChange={(e: any) => setrows(e.target.value)}
            ></input>
            <input
              type="text"
              placeholder="enter Column"
              className="form-control mt-2"
              onChange={(e: any) => setcols(e.target.value)}
              value={cols}
              min={1}
            ></input>
            <button type="submit" className="mt-2 btn btn-dark">
              Submit
            </button>
          </form>
          {showTable && <Tableprint row={rows} col={cols} />}
        </div>
        <div className="col-md-4">
          <ul>
            {list1.map((item: any, ind: any) => (
              <li key={ind}>
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => Handlecheck(ind)}
                ></input>
                {item.title}
              </li>
            ))}
          </ul>
          <ul>
            {list2.map((item: any, ind: any) => (
              <li key={ind}>{item.title}</li>
            ))}
          </ul>
          <button type="button" onClick={Getswap} className="btn btn-danger">
            Swap Value
          </button>
        </div>
        <div className="col-md-4">
          <div className="row">
            <div className="col-md-6">
              <ul>
                {list3.map((item: any, ind: any) => (
                  <li key={`item1$${ind}`}>
                    <input
                      type="checkbox"
                      checked={item.checked}
                      onChange={() => GetItemchecked1(ind)}
                    ></input>
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-md-6">
              <ul>
                {list4.map((item: any, ind: any) => (
                  <li key={`item2$${ind}`}>
                    <input
                      type="checkbox"
                      checked={item.checked}
                      onChange={() => GetItemchecked2(ind)}
                    ></input>
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <ALLLpartstart star={stars} setstar={setstars} />
        </div>
      </div>
    </div>
  );
}
