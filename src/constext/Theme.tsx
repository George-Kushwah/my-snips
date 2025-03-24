import React, { useState, useEffect, createContext } from "react";
interface Iconprops {
  dark: boolean;
  Toggle: any;
}

export const Themecon = createContext<Iconprops | null>(null);
interface ICHilpros {
  children: any;
}
export const Theampro = ({ children }: ICHilpros) => {
  const [dark, setdark] = useState<boolean>(false);
  const Toggle = () => {
    console.log("presss");
    //setdark((prev: any) => !prev);
  };
  return (
    <Themecon.Provider value={{ dark, Toggle }}>{children}</Themecon.Provider>
  );
};
