import React, { useState, useEffect, useTransition, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { Queryget } from "./../query/Queryfun";
const Allskills = () => {
  const refs = useRef<HTMLInputElement>(null);
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

  const [car, setcar] = useState<any>([
    "Maruti",
    "Hyundai",
    "jeep",
    "Audi",
    "Bike",
    "Car",
  ]);
  const [finds, setfinds] = useState<any>("");
  const [binimg, setbinimg] = useState<any>();
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

  useEffect(() => {
    if (finds.length > 0) {
      let a = car.filter((item: any) => {
        return item.toLowerCase() === finds.toLowerCase();
      });
      if (a.length > 0) {
        setcar((prev: any) => {
          let update = [...prev];
          console.log(update);
          update = a;
          return update;
        });
      }
    }
  }, [finds]);
  //   console.log(data);

  const Fileupload = (ev: any) => {
    let file = ev.target.files[0];
    console.log(file);
    let fromdata: any = new FileReader();
    fromdata.onload = () => {
      setbinimg(fromdata.result);
    };
    fromdata.readAsDataURL(file);
    // for clear value in file
    // let dc = refs.current;
    // if (dc) {
    //   dc.value = "";
    // }
  };

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
            {car && car.length > 0 ? (
              car?.map((item: any, ind: any) => {
                return <p key={ind}>{item}</p>;
              })
            ) : (
              <>"No Search Found"</>
            )}
            <>
              <input
                type="text"
                value={finds}
                placeholder="...Search Here"
                onChange={(e: any) => setfinds(e.target.value)}
              ></input>
            </>
          </div>
          <div className="col-md-4 mt-3">
            <em>file upload Item </em>
            <input
              type="file"
              ref={refs}
              accept="image/png,image/jpeg,image/jpg"
              onChange={(e) => Fileupload(e)}
            ></input>
            <img src={binimg} className="img-fluid mt-2"></img>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Allskills;
