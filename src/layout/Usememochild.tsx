import React, { memo } from "react";
interface IpropsMemo {
  func: () => void;
}

const Usememochild = ({ func }: IpropsMemo) => {
  console.log("Child Render");
  return <div>Memo Child</div>;
};
export default memo(Usememochild);
