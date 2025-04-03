import React from "react";

interface IinputProps {
  refs: any;
}

const Alltype = ({ refs }: IinputProps) => {
  console.log(refs);
  return (
    <>
      <div className="col-lg-3">
        <input type="text" ref={refs} />
      </div>
    </>
  );
};
export default Alltype;
