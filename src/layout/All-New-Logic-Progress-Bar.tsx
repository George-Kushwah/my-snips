import React, { useState, useEffect } from "react";
interface Ivalprops {
  vlas: any;
}
const AllNewLogicProgressBar = ({ vlas }: Ivalprops) => {
  const [pre, setpre] = useState<any>(0);
  useEffect(() => {
    setpre(Math.min(100, Math.max(vlas, 0)));
  }, [vlas]);
  return (
    <>
      <div className="lp1">
        <div style={{ zIndex: 2, color: pre > 50 ? "white" : "#000" }}>
          {pre.toFixed()}%
        </div>
        <div className="greens" style={{ width: `${pre}%` }}></div>
      </div>
    </>
  );
};
export default AllNewLogicProgressBar;
