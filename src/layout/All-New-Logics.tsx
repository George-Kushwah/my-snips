import React, { useState, useEffect, useRef } from "react";
import { useContext } from "react";
import { Theampro, Themecon } from "./../constext/Theme";
import AllNewLogicProgressBar from "./All-New-Logic-Progress-Bar";
const AllNewLogics = () => {
  //   const { dark, Toggle }: any = useContext(Themecon);
  const [vals, setvals] = useState<any>(5);
  const [sugg, setsugg] = useState<any>("");
  const [suggshow, setsuggshow] = useState<any>("");
  const total = 25;
  const [page, setPage] = useState<any>(0);
  const [runing, setruning] = useState<boolean>(false);
  const [elesp, setelesp] = useState<any>(0);
  const intervalref = useRef<any>(null);
  const startref: any = useRef<any>(0);

  const suggval: any = [
    "car",
    "Minal",
    "Tamato Basil Baruchis",
    "Apple",
    "Hero",
    "maruti",
    "kawazaki",
  ];
  const [items, setitems] = useState<any>(0);
  const coursel = [
    {
      id: 1,
      img: "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
    },
    {
      id: 2,
      img: "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png",
    },
    {
      id: 3,
      img: "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png",
    },
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
  useEffect(() => {
    setInterval(() => setPage((prev: any) => prev + 1), 100);
  }, []);
  //   const nextcl = () => {
  //     if (items === coursel.length - 1) {
  //       setitems(0);
  //     } else setitems((prev: any) => prev + 1);
  //   };
  //   const backcl = () => {
  //     if (items === 0) {
  //       setitems(coursel.length - 1);
  //     } else setitems((prev: any) => prev - 1);
  //   };
  //   useEffect(() => {
  //     let id = setTimeout(() => nextcl(), 1000);
  //     return () => {
  //       clearInterval(id);
  //     };
  //   }, [items]);
  useEffect(() => {
    if (runing) {
      intervalref.current = setInterval(
        () => setelesp(Date.now() - startref.current),
        10
      );
      return () => {
        clearInterval(intervalref.current);
      };
    }
  }, [runing]);
  const start = () => {
    setruning(true);
    startref.current = Date.now() - elesp;
  };
  const stops = () => {
    setruning(false);
  };
  const reset = () => {
    setelesp(0);
    setruning(false);
  };
  const FormatTime = () => {
    let hour: any = Math.floor(elesp / (1000 * 60 * 60));
    let min: any = Math.floor((elesp / (1000 * 60)) % 60);
    let sec: any = Math.floor((elesp / 1000) % 60);
    let mili: any = Math.floor((elesp % 1000) / 10);
    hour = String(hour).padStart(2, "0");
    min = String(min).padStart(2, "0");
    sec = String(sec).padStart(2, "0");
    mili = String(mili).padStart(2, "0");

    return `${hour}:${min}:${sec}:${mili}`;
  };
  return (
    <>
      <Theampro>
        <div>
          {/* <button type="button" className="btn btn-primary">
            Dark Theme
          </button> */}
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
              <div className="col-md-4">
                <em>Progress Bar</em>
                <AllNewLogicProgressBar vlas={page} />
              </div>
              <div className="col-md-4">
                <div className="watch">
                  <div className="times-1"> {FormatTime()}</div>

                  <div className="times-2">
                    <button
                      type="button"
                      onClick={start}
                      className="btn btn-success"
                    >
                      Start
                    </button>
                    <button
                      type="button"
                      onClick={stops}
                      className="btn btn-danger"
                    >
                      Stop
                    </button>
                    <button
                      type="button"
                      onClick={reset}
                      className="btn btn-primary"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </div>
              {/* <div className="col-md-4">
                <img src={coursel[items]?.img} className="ing-fluid"></img>
                <span onClick={backcl}>Back</span>.......
                <span onClick={nextcl}>Next</span>
              </div> */}
            </div>
          </div>
        </div>
      </Theampro>
    </>
  );
};
export default AllNewLogics;
