import React, { Suspense } from "react";
import { useParams } from "react-router-dom";
const Childa = React.lazy(() => import("./Child-a"));
const Main = () => {
  const { render } = useParams();

  return (
    <>
      <div className="container-fluid mt-3">
        <div className="row">{render === "Check-1" && <Childa />}</div>
      </div>
    </>
  );
};

export default Main;
