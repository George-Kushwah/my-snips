import React, { useState } from "react";
import ReactPaginate from "react-paginate";
const AllNewLogics = () => {
  const [vals, setvals] = useState<any>(5);
  const [sugg, setsugg] = useState<any>("");
  const [suggshow, setsuggshow] = useState<any>("");
  const toatl = 105;
  const suggval: any = [
    "car",
    "Minal",
    "Tamato Basil Baruchis",
    "Apple",
    "Hero",
    "maruti",
    "kawazaki",
  ];
  const filters = suggval.filter((option: any) =>
    option.toLowerCase().includes(sugg.toLowerCase())
  );
  const getSetVal = (ev: any) => {
    setsugg(ev);
    setsuggshow(false);
  };
  const Currentsugg = (ev: any) => {
    const parts = ev.split(new RegExp(`(${sugg})`, "gi"));
    return parts.map((ietm: any, ind: any) =>
      ietm.toLowerCase() === sugg.toLowerCase() ? (
        <span className="high" key={ind}>
          {ietm}
        </span>
      ) : (
        ietm
      )
    );
  };
  return (
    <>
      <div className="container-fluid mt-3 newsk-1">
        <div className="row">
          <div className="col-md-4">
            {vals}
            <br />
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                setvals((prev: any) => prev + 5);
                setvals((prev: any) => prev + 5);
                setvals((prev: any) => prev + 5);
              }}
            >
              Click Here
            </button>
          </div>
          <div className="col-md-4 position-relative">
            <em>Search Box</em>
            <br />
            <input
              type="text"
              value={sugg}
              placeholder="Search Item"
              className="form-control"
              onChange={(e) => {
                setsugg(e.target.value);
              }}
              onFocus={() => setsuggshow(true)}
              onBlur={() => setsuggshow(false)}
            ></input>
            <ul className={"suggest"}>
              {suggshow && filters.length > 0
                ? filters.map((item: any, ind: any) => (
                    <li key={ind} onClick={() => getSetVal(item)}>
                      {Currentsugg(item)}
                    </li>
                  ))
                : ""}
            </ul>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </>
  );
};
export default AllNewLogics;
