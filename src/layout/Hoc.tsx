import React, { useState } from "react";

const Hoc = ({ component }: { component: JSX.Element }) => {
  return component;
};

const Redcon = () => {
  const [coun, setoun] = useState<any>(0);
  return (
    <>
      <div className="container-fluid">
        <div>Hello Hoc</div>
        {coun}
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setoun(coun + 1)}
        >
          Click Me
        </button>
      </div>
    </>
  );
};
const Green = () => {
  const [coun, setoun] = useState<any>(0);
  return (
    <>
      <div className="container-fluid">
        <div>Hello Hoc</div>
        {coun}
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setoun(coun + 2)}
        >
          Click Me
        </button>
      </div>
    </>
  );
};

const counter = () => {
  return (
    <>
      <Hoc component={<Redcon />} />
      <Hoc component={<Green />} />
    </>
  );
};
export default counter;
