import React, { useState, useEffect } from "react";
import { Sbutton } from "./../styles/Main";

const Styles = () => {
  const [dat, setdat] = useState<any>(0);

  useEffect(() => {
    setdat(dat + 1);
  });

  return (
    <div>
      {/* <button type="button">Click Me</button> */}
      {/* <Sbutton>Click Me</Sbutton>
      <br />
      <Sbutton varient="outine">Click Me</Sbutton> */}
      {dat}
      <form>
        <label htmlFor="ing">Name</label>
        <input
          id="ing"
          type="text"
          placeholder="Enter value"
          aria-label="Name"
          aria-required="true"
        ></input>
      </form>
    </div>
  );
};
export default Styles;
