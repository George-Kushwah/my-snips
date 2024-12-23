import React from "react";

export default function Loader() {
  return (
    <>
      <div className="loads shows" id="loading">
        <div className="heights">
          <div className="loader"></div>
        </div>
        <span style={{ color: "#fff" }}>Loading...</span>
      </div>
    </>
  );
}
