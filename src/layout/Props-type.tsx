import { Suspense, lazy } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../Redux/Store";
import * as actions from "./../Redux/Reduer";
const Child = lazy(() => import("./Props-child"));

const Propstypes = () => {
  //throw new Error()
  const { data, err }: any = useSelector((state: RootState) => state.testdata);
  const dispatch = useDispatch();

  const GetData = () => {
    dispatch(actions.load());
  };

  //throw new Error("fdfdf");
  const Clicks = () => {
    console.log("Child click");
  };
  return (
    <div className="container-fluid mt-3" data-testid="Mybtn">
      <Suspense fallback={<h3>Please wait Loading......</h3>}>
        <button type="button" onClick={GetData} className="btn btn-danger">
          load API data
        </button>
        {data.length > 0
          ? data.map((item: any, ind: any) => {
              return (
                <div key={ind} data-testid="nahe">
                  {item.name}
                </div>
              );
            })
          : err}
        <Child age={20} clicks={Clicks} />
      </Suspense>
    </div>
  );
};
export default Propstypes;
