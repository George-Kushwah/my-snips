import React, { useState } from "react";
import Tableprint from "./Table-print";

export default function AllLart1() {
  const [vals, setVals] = useState<any>([{ value: "" }]);
  const [cols, setcols] = useState<any>("");
  const [rows, setrows] = useState<any>("");
  const [showTable, setshowTable] = useState<boolean>(false);
  const addfi = () => {
    setVals([...vals, { value: "" }]);
  };

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

  return (
    <div className="container-fluid mt-3">
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
      </div>
    </div>
  );
}
