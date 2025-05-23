import React from "react";

const Childa = () => {
  const childstoparent = () => {
    const event = new CustomEvent("Hello", {
      detail: {
        dc: "Update Data",
      },
    });
    dispatchEvent(event);
  };

  return (
    <>
      <div className="col-xl-2">
        <button type="button" onClick={childstoparent}>
          Click here
        </button>
      </div>
    </>
  );
};

export default Childa;
