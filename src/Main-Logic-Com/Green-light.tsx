import React, { useState } from "react";
const Greenlight = () => {
  const [green, setgreen] = useState<any>([]);
  const [actives, setactives] = useState<boolean>(false);
  const grid: any = [
    [1, 1, 0],
    [0, 1, 1],
    [1, 0, 1],
  ];
  const Deactivate = () => {
    setactives(true);
    const time = setInterval(() => {
      setgreen((prev: any) => {
        const neworder = [...prev];
        neworder.pop();
        if (neworder.length === 0) {
          clearInterval(time);
          setactives(false);
        }
        return neworder;
      });
    }, 500);
  };
  const ClickOrder = (ind: any) => {
    const newordr = [...green, ind];
    setgreen(newordr);
    if (newordr.length === grid.flat(1).filter(Boolean).length) {
      Deactivate();
    }
  };
  return (
    <>
      <div className="col-lg-6">
        <div className="row  ">
          <div className="grids">
            {grid.flat(1).map((item: any, ind: any) => (
              <div
                key={ind}
                onClick={() => item && ClickOrder(ind)}
                className={`${item ? "wd color-org" : "wd color-fade"} ${
                  green.includes(ind) ? "Greens" : ""
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Greenlight;
