import React, { Suspense, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const Childa = React.lazy(() => import("./Child-a"));
const Counter = React.lazy(() => import("./Counter"));
const RTKQuery = React.lazy(() => import("./RTK-Query"));
const Itemsc = React.lazy(() => import("./Check-3"));
const Itemsc4 = React.lazy(() => import("./Check-4"));

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
            {render === "Check-3" && <Itemsc />}
            {render === "Check-4" && <Itemsc4 />}
          </div>
        </div>
      </Suspense>
    </>
  );
};

export default Main;
