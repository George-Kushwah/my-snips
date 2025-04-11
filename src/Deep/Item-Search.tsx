import React, { useState, useEffect } from "react";
import { useQueries } from "@tanstack/react-query";
import { SearchItems, getDatas } from "./../query/Queryfun";
import Debounce from "./Debounce";

const ItemSearch = () => {
  const [serachItem, setserachItem] = useState<any>("");
  const [fldat, setfldat] = useState<any>([]);
  const [selitem, setselitem] = useState<any>([]);
  const [selectitem, setselectitem] = useState<any>(new Set());
  let df = { age: 12, city: "Jaipur" };
  const dc = Debounce(serachItem, 400);
  //data, isFetching, isLoading
  const [gets, postq]: any = useQueries({
    queries: [SearchItems(dc), getDatas(df)],
  });

  useEffect(() => {
    if (gets?.data?.users !== undefined) {
      setfldat(gets?.data?.users);
    }
  }, [gets?.data]);

  const Handlesel = (ev: any) => {
    setselitem([...selitem, ev]);
    setselectitem(new Set([...selectitem, ev?.email]));
    setserachItem("");
    setfldat([]);
  };

  const Hanlderemove = (ev: any) => {
    const update = selitem.filter((items: any) => items.id !== ev.id);
    setselitem(update);
    const updatemail: any = new Set(selectitem);
    updatemail.delete(ev.email);
    setselectitem(updatemail);
  };
  console.log(postq?.data);

  return (
    <>
      <button type="button" onClick={postq.refetch} className="btn btn-primary">
        Hello Data
      </button>
      <div className="main-search">
        <div className="search-input">
          {selitem &&
            selitem.map((item: any, ind: any) => (
              <div
                key={ind}
                className="pills"
                onClick={() => Hanlderemove(item)}
              >
                <span>
                  <span>
                    {" "}
                    <img src={item?.image}></img>
                  </span>
                  <span>
                    {" "}
                    {item?.firstName} {item?.lastName} &times;
                  </span>
                </span>
              </div>
            ))}
          <div>
            <input
              type="text"
              value={serachItem}
              onChange={(e) => {
                setserachItem(e.target.value);
              }}
              placeholder="Search Item"
            ></input>

            <ul>
              {fldat &&
                fldat.map(
                  (item: any, ind: any) =>
                    !selectitem.has(item?.email) && (
                      <li key={ind} onClick={() => Handlesel(item)}>
                        <img src={item?.image}></img>
                        <span>
                          {item?.firstName} {item?.lastName}
                        </span>
                      </li>
                    )
                )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default ItemSearch;
