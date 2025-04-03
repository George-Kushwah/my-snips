import React, { Suspense, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { dat } from "./data";
import "./../assets/css/grid.scss";
import Cshook from "./Cshook";
const Nestedcom = React.lazy(() => import("./Nestedcom"));
const Alltype = React.lazy(() => import("./Alltype"));
const Main = () => {
  const inputref: any = useRef<HTMLInputElement>(null);
  const { addcomment, deletes } = Cshook();
  const { id } = useParams();
  const [data, setdata] = useState<any>(dat);
  const checkref = () => {
    inputref.current.value = "Hello";
    inputref.current.focus();
    inputref.current.style.color = "Red";
  };

  const handlecomment = (id: any, text: any) => {
    const update = addcomment(data, id, text);
    setdata(update);
  };
  const deletew = (id: any) => {
    const update = deletes(data, id);
    setdata(update);
  };
  return (
    <>
      <Suspense fallback={<>Loading.....</>}>
        <div className="container-fluid mt-3">
          <div className="row">
            {id === "Nested" && (
              <Nestedcom
                key={data?.id}
                handlecomment={handlecomment}
                comment={data}
                deletew={deletew}
              />
            )}

            {id == "All-type" && (
              <>
                <button
                  type="button"
                  onClick={checkref}
                  className="col-lg-3 btn btn-light"
                >
                  Click Here
                </button>
                <Alltype refs={inputref} />
              </>
            )}
          </div>
        </div>
      </Suspense>
    </>
  );
};
export default Main;
