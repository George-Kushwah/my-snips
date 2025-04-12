import React, { useState, useEffect } from "react";
import { useQueries } from "@tanstack/react-query";
import { SearchItems, getDatas } from "./../query/Queryfun";
import Debounce from "./Debounce";

const ItemSearch = () => {
  const [serachItem, setserachItem] = useState<any>("");
  const [fldat, setfldat] = useState<any>([]);
  const [selitem, setselitem] = useState<any>([]);
  const [selectitem, setselectitem] = useState<any>(new Set());
  const [active, setactive] = useState<any>(0);
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

  const UseKey = (ev: any) => {
    if (ev.keyCode === 40) {
      if (active < fldat.length) {
        setactive(active + 1);
      }
    }
    if (ev.keyCode === 38) {
      if (active > -0) setactive(active - 1);
    }
    if (ev.key === "Enter") {
      const update = fldat[active];
      setselitem([...selitem, update]);
      setselectitem(new Set([...selectitem, update?.email]));
      setserachItem("");
      setfldat([]);
      setactive(0);
    }
  };

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
              onKeyDown={(e) => UseKey(e)}
            ></input>

            <ul>
              {fldat &&
                fldat.map(
                  (item: any, ind: any) =>
                    !selectitem.has(item?.email) && (
                      <li
                        key={ind}
                        onClick={() => Handlesel(item)}
                        className={active === ind ? "lis-ac" : ""}
                      >
                        <img src={item?.image}></img>
                        <span>
                          {ind} {item?.firstName} {item?.lastName}
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
