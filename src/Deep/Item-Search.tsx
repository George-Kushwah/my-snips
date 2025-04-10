import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { SearchItems } from "./../query/Queryfun";
import Debounce from "./Debounce";

const ItemSearch = () => {
  const [serachItem, setserachItem] = useState<any>("");
  const [fldat, setfldat] = useState<any>([]);
  const [selitem, setselitem] = useState<any>([]);
  const [selectitem, setselectitem] = useState<any>(new Set());
  const dc = Debounce(serachItem, 400);
  const { data, isFetching, isLoading, refetch }: any = useQuery(
    SearchItems(dc)
  );
  useEffect(() => {
    if (data !== undefined) {
      setfldat(data?.users);
    }
  }, [data]);

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

  return (
    <div className="main-search">
      <div className="search-input">
        {selitem &&
          selitem.map((item: any, ind: any) => (
            <div key={ind} className="pills" onClick={() => Hanlderemove(item)}>
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
              refetch;
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
  );
};
export default ItemSearch;
