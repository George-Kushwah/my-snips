import React, { Suspense, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "./../Redux/Reduer";
import { dat } from "./data";
import "./../assets/css/grid.scss";
import Cshook from "./Cshook";
import { RootState } from "../Redux/Store";
const Nestedcom = React.lazy(() => import("./Nestedcom"));
const Alltype = React.lazy(() => import("./Alltype"));
const Main = () => {
  const inputref: any = useRef<HTMLInputElement>(null);
  const { addcomment, deletes } = Cshook();
  const { id } = useParams();
  const [data, setdata] = useState<any>(dat);
  const dispatch = useDispatch();
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
  const SenData = () => {
    let dc: any = { age: 25 };
    dispatch(actions.sharedataload(dc));
  };
  return (
    <>
      <button type="button" onClick={SenData} className="btn btn-danger">
        Send Data to Parent
      </button>
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
        <Parent2 />
      </Suspense>
    </>
  );
};
export default Main;

const Parent2 = () => {
  const { shareData }: any = useSelector((state: RootState) => state.testdata);
  return (
    <>
      <div className="container-fluid">
        Hello Parent age is {shareData?.age}
      </div>
    </>
  );
};
