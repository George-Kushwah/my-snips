import React, { useState, useInsertionEffect } from "react";

const Hooks1 = () => {
  const [theme, settheme] = useState<string>("dark");

  useInsertionEffect(() => {
    const style = Themechange(theme);
    document.head.appendChild(style) as HTMLStyleElement;
    return () => document.head.removeChild(style);
  }, [theme]);

  return (
    <>
      <div className="contaier-fluid mt-3 p-2">
        <button
          type="button"
          onClick={() => settheme(theme === "dark" ? "white" : "dark")}
          className="rf"
        >
          Click here
        </button>
      </div>
    </>
  );
};

const Themechange = (theme: any) => {
  const tag = document.createElement("style");
  tag.innerHTML = `.rf{
    color:${theme === "dark" ? "#fff" : "#000"} !important;
     background:${theme === "dark" ? "#000" : "#fff"} !important;
    }`;
  return tag;
};

export default Hooks1;
