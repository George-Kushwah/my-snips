import React, { Suspense, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const Childa = React.lazy(() => import("./Child-a"));
const Counter = React.lazy(() => import("./Counter"));
//const RTKQuery = React.lazy(() => import("./RTK-Query"));
import RTKQuery from "./RTK-Query";
const Main = () => {
  const [data, setData] = useState<any>("");
  const { render } = useParams();

  useEffect(() => {
    window.addEventListener("Hello", (ed: any) => {
      setData(ed.detail.dc);
      ed.detail.dx();
    });
  }, []);

  return (
    <>
      <Suspense fallback={<>Loading</>}>
        <div className="container-fluid mt-3">
          Parent update child data show {data}
          <div className="row">
            {render === "Check-1" && <Childa />}
            {render === "Check-2" && <Counter />}
            {render === "RTK-Query" && <RTKQuery />}
          </div>
        </div>
      </Suspense>
    </>
  );
};

export default Main;
