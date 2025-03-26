import React from "react";
import { useParams } from "react-router-dom";
const MainLogix = () => {
  const { Logics } = useParams();
  return <div>Hello Logics</div>;
};
export default MainLogix;
