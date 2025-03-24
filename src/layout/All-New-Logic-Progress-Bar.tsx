import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
interface Ivalprops {
  vlas: any;
}
const AllNewLogicProgressBar = ({ vlas }: Ivalprops) => {
  const [pre, setpre] = useState<any>(0);
  const [vals, setvals] = useState<any>(0);
  const [pass, setpass] = useState<any>("");
  const [clik, setclik] = useState<any>(255);
  const [like, setlike] = useState<any>(false);
  const rand =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?";
  useEffect(() => {
    setpre(Math.min(100, Math.max(vlas, 0)));
  }, [vlas]);
  const Passgen = () => {
    let passs: any = "";
    for (let i = 0; i < vals; i++) {
      passs += rand[Math.floor(Math.random() * rand.length)];
    }
    setpass(passs);
  };
  return (
    <>
      <div className="lp1">
        <div style={{ zIndex: 2, color: pre > 50 ? "white" : "#000" }}>
          {pre.toFixed()}%
        </div>
        <div className="greens" style={{ width: `${pre}%` }}></div>
      </div>
      <div>
        <input
          type="text"
          value={vals}
          className="form-control"
          onChange={(e) => setvals(e.target.value)}
        ></input>
        <button type="button" className="btn btn-danger" onClick={Passgen}>
          Generate Password
        </button>
        {pass}
        <br></br>
        <FontAwesomeIcon
          icon={faThumbsUp}
          className="sizes"
          style={{ color: like ? "blue" : "#000" }}
          onClick={() => {
            setclik(clik + (like ? -1 : 1));
            setlike(!like);
          }}
        />
        Your like{clik}
      </div>
    </>
  );
};
export default AllNewLogicProgressBar;
