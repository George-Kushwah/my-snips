import React, { useState, useEffect, useTransition } from "react";
import { useQuery } from "@tanstack/react-query";
import { Queryget } from "./../query/Queryfun";
const Allskills = () => {
  const [val, setval] = useState<any>(0);
  const [btns, setbtns] = useState<boolean>(false);
  const [arval, setarval] = useState<any>([
    "Apple",
    "Mango",
    "Orange",
    "Grapes",
    "Chili",
    "stowberry",
  ]);
  const [rmarr, setrmarr] = useState<any>([
    "sun",
    "mon",
    "tue",
    "wed",
    "thu",
    "fri",
    "sat",
  ]);
  const [ispendding, starttrans] = useTransition();
  const { error, isPending, data }: any = useQuery(Queryget());
  useEffect(() => {
    if (btns) {
      let id = setInterval(() => setval((prev: any) => prev + 1), 1000);
      return () => {
        clearInterval(id);
      };
    }
  }, [btns]);
  const Shuffleval = () => {
    let dc = [...arval].sort(() => Math.random() - 0.6);
    setarval(dc);
  };

  const RemoveVal = (ev: any) => {
    starttrans(() => {
      setrmarr((prev: any) => {
        let update = [...prev];
        update.splice(ev, 1);
        return update;
      });
    });
  };
  console.log(data);

  return (
    <div className="container-fluid mt-2 skills">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <em>Start and Stop timer</em>
            <p>{val}</p>{" "}
            <button className="btn btn-primary" onClick={() => setbtns(true)}>
              Start
            </button>
            &nbsp;{" "}
            <button className="btn btn-primary" onClick={() => setbtns(false)}>
              Stop
            </button>
          </div>
          <div className="col-md-4 mt-3">
            <em>Shuffle Array Value</em>
            {arval.map((item: any, index: any) => {
              return <p key={index}>{item}</p>;
            })}
            <button className="btn btn-primary" onClick={Shuffleval}>
              Shuffle
            </button>
          </div>
          <div className="col-md-4 mt-3">
            <em>Remove Array Value {rmarr.length}</em>
            {rmarr.map((item: any, index: any) => {
              return (
                <p
                  key={index}
                  onClick={() => RemoveVal(index)}
                  className={"clicks"}
                >
                  {item}
                </p>
              );
            })}
            {ispendding && "Removing"}
          </div>
          <div className="col-md-4 mt-3">
            <em>Search Item </em>
            {/* {data && data?.data.map((item) => {
                          
                      })} */}
            <button className="btn btn-primary" onClick={Shuffleval}>
              Shuffle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Allskills;
