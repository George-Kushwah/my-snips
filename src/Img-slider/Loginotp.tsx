import React, { useState, useRef, useEffect } from "react";

const Loginotp = () => {
  const [otp, setotp] = useState<any>(new Array(4).fill(""));
  let nums = "9719148526".slice(-4);
  const refs = useRef<any>([]);
  useEffect(() => {
    if (refs.current[0]) {
      refs.current[0].focus();
    }
  }, []);
  const Handlechange = (ev: any, ind: any) => {
    const value = ev.target.value;
    if (isNaN(value)) return;
    else {
      const newotp1 = [...otp];
      newotp1[ind] = value.substring(value.length - 1);
      setotp(newotp1);
      const combineotp = newotp1.join("");
      if (value && ind < 4 - 1 && refs.current[ind + 1]) {
        refs.current[ind + 1].focus();
        // console.log(combineotp, "fdfd"); //set to backend
      }
    }
  };
  const Handledown = (ind: any, ev: any) => {
    if (
      ev.key === "Backspace" &&
      !otp[ind] &&
      ind > 0 &&
      refs.current[ind - 1]
    ) {
      refs.current[ind - 1].focus();
    }
  };
  return (
    <div>
      <h3 className="text-center">Login With Phone</h3>
      <h4 className="text-center text-success">
        Enter OTP sent to {nums.padStart(10, "x")}
      </h4>
      <div className="text-in">
        {otp.map((item: any, ind: any) => (
          <input
            type="text"
            maxLength={1}
            key={ind}
            ref={(input: any) => (refs.current[ind] = input)}
            value={item}
            onChange={(e) => Handlechange(e, ind)}
            onKeyDown={(e) => Handledown(ind, e)}
          ></input>
        ))}
      </div>
      <div className="text-center">
        <button
          type="button"
          className="btn btn-dark mt-2"
          onClick={() => setotp(["", "", "", ""])}
        >
          Clear Value
        </button>
      </div>
    </div>
  );
};
export default Loginotp;
