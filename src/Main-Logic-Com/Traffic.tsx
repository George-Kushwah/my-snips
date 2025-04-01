import React, { useState, useEffect, useId } from "react";
const Customdrop = React.lazy(() => import("./Customdrop"));

const Traffic = () => {
  const ids = useId();
  const [light, setlight] = useState<any>("red");
  const [Leftbox, setLeftbox] = useState<any>([
    {
      val: "First",
      clg: false,
    },
    {
      val: "Second",
      clg: false,
    },
    {
      val: "Third",
      clg: false,
    },
    {
      val: "Four",
      clg: false,
    },
  ]);
  const [rightbox, setrightbox] = useState<any>([]);
  const [selitem, setselitem] = useState<any>("");
  const trafficstate: any = {
    red: {
      duration: 3000,
      bg: "red",
      next: "yellow",
    },
    yellow: {
      duration: 1500,
      bg: "yellow",
      next: "green",
    },
    green: {
      duration: 4000,
      bg: "green",
      next: "red",
    },
  };
  const [drop, setdrop] = useState<any>([
    {
      name: "Agra",
      value: "Agra",
    },
    {
      name: "Noida",
      value: "Noida",
    },
    {
      name: "Delhi",
      value: "Delhi",
    },
  ]);
  useEffect(() => {
    const { duration, next } = trafficstate[light];
    const id = setTimeout(() => {
      setlight(next);
    }, duration);
    return () => {
      clearTimeout(id);
    };
  }, [light]);

  const clickdiv = (ind: any, ev: any) => {
    if (ev === "left") {
      const update = [...Leftbox];
      update[ind].clg = !update[ind].clg;
      setLeftbox(update);
    } else {
      const update = [...rightbox];
      update[ind].clg = !update[ind].clg;
      setrightbox(update);
    }
  };

  const resetItems = (list: any) => {
    return list.map((item: any) => {
      return {
        ...item,
        clg: false,
      };
    });
  };
  const Torightbox = (ev: any) => {
    if (ev == "right") {
      let update1 = [...Leftbox];
      const checkList = update1.filter((item: any) => item.clg);
      const unCheckList = update1.filter((item: any) => !item.clg);
      setLeftbox(unCheckList);
      setrightbox(resetItems([...rightbox, ...checkList]));
    } else {
      let update1 = [...rightbox];
      const checkList = update1.filter((item: any) => item.clg);
      const unCheckList = update1.filter((item: any) => !item.clg);
      setrightbox(unCheckList);
      setLeftbox(resetItems([...Leftbox, ...checkList]));
    }
  };

  const AllIten = () => {
    setrightbox(Leftbox);
    setLeftbox([]);
  };
  const Changesitem = (ev: any) => {
    setselitem(ev.target.value);
  };
  return (
    <>
      <div className="trafiic-bg">
        {Object.keys(trafficstate).map((item: any, ind: any) => (
          <div
            key={ind}
            className="circle"
            style={{ background: item === light && trafficstate[item].bg }}
          ></div>
        ))}
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 greds">
            {Leftbox.map((item: any, ind: any) => (
              <div
                key={ind}
                className={item.clg ? "sel1 sel" : "sel"}
                onClick={() => clickdiv(ind, "left")}
              >
                {item?.val}
              </div>
            ))}
          </div>
          <div className="col-lg-2">
            <button
              type="button"
              className="btn btn-light"
              onClick={() => Torightbox("right")}
            >
              right
            </button>
            <button
              type="button"
              className="btn btn-light"
              onClick={() => Torightbox("left")}
            >
              left
            </button>
            <button
              type="button"
              className="btn btn-light"
              onClick={() => AllIten()}
            >
              Alll
            </button>
          </div>
          <div className="col-lg-3 greds">
            {rightbox.map((item: any, ind: any) => (
              <div
                key={ind}
                className={item.clg ? "sel1 sel" : "sel"}
                onClick={() => clickdiv(ind, "right")}
              >
                {item?.val}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-lg-3">
        <Customdrop
          value={drop}
          data={selitem}
          classes={"form-control"}
          id={ids}
          setvalue={(e) => Changesitem(e)}
        />
      </div>
    </>
  );
};
export default Traffic;
