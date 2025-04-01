import React from "react";

interface Idropdown {
  data?: any[];
  value: any[];
  setvalue: (e: any) => void;
  id?: any;
  classes?: any;
}

const Customdrop = ({ data, value, setvalue, id, classes }: Idropdown) => {
  return (
    <>
      <select id={id} className={classes} onChange={setvalue} value={data}>
        {value.map((item: any, ind: any) => (
          <option key={ind} value={item.value}>
            {item?.name}
          </option>
        ))}
      </select>
    </>
  );
};
export default Customdrop;
