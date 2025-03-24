import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { Theampro, Themecon } from "./../constext/Theme";
const AllNewLogics = () => {
  //   const { dark, Toggle }: any = useContext(Themecon);
  const [vals, setvals] = useState<any>(5);
  const [sugg, setsugg] = useState<any>("");
  const [suggshow, setsuggshow] = useState<any>("");
  const total = 25;
  const [page, setPage] = useState<any>(0);

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
