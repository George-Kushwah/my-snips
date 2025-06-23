import React, { useState, useEffect } from "react";

const Checks = () => {
  const [val, setval] = useState<any>("");
  const [mess, setmess] = useState<boolean>(false);
  const [temid, settemid] = useState<any>(null);
  const [mtemid, setmtemid] = useState<any>(null);

  const HandleData = (ev: any) => {
    let as = ev.target.value;
    setval(as);
    setmess(false);
    if (temid) clearTimeout(temid);
    if (mtemid) clearTimeout(mtemid);
    let ids = setTimeout(() => {
      setmess(true);
      setval("");
      let med = setTimeout(() => {
        setmess(false);
      }, 1000);
      setmtemid(med);
    }, 2000);
    settemid(ids);
  };
  useEffect(() => {
    return () => {
      if (temid) clearTimeout(temid);
      if (mtemid) clearTimeout(mtemid);
    };
  }, [temid, mtemid]);

  return (
    <>
      <div className="container-fluid">
        <input type="text" value={val} onChange={(e) => HandleData(e)}></input>
        {mess && <>value Saved</>}
      </div>
    </>
  );
};

export default Checks;
