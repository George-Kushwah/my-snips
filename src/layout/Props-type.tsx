import { Suspense, lazy, useEffect, useState, useActionState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../Redux/Store";
import * as actions from "./../Redux/Reduer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faSave } from "@fortawesome/free-solid-svg-icons";
import { Fromactiontest } from "./Fromaction";
const Child = lazy(() => import("./Props-child"));

const Propstypes = () => {
  //throw new Error()
  const [data, setData] = useState<any>();
  const [state, actionfr, ispPend]: any = useActionState(
    Fromactiontest,
    undefined
  );
  const [edit, setedit] = useState<any>(false);
  const { err, dbtestsucc }: any = useSelector(
    (state: RootState) => state.testdata
  );
  const dispatch = useDispatch();

  const GetData = () => {
    //dispatch(actions.dbtestload());
  };

  //throw new Error("fdfdf");
  const Clicks = () => {
    console.log("Child click");
  };
  useEffect(() => {
    dispatch(actions.dbtestload());
  }, []);
  useEffect(() => {
    setData(dbtestsucc);
  }, [dbtestsucc]);

  const Editfr = (ev: any) => {
    if (edit !== `edit-${ev}`) {
      setedit(`edit-${ev}`);
    } else setedit("edit");
  };

  const Deletefr = (ev: any) => {};

  return (
    <div className="container-fluid mt-3" data-testid="Mybtn">
      <Suspense fallback={<h3>Please wait Loading......</h3>}>
        {/* <button type="button" onClick={GetData} className="btn btn-danger">
          load API data
        </button> */}
        <br></br> <br></br>
        <button type="button" onClick={GetData} className="btn btn-danger">
          load API data from DB
        </button>
        {/* {data.length > 0
          ? data.map((item: any, ind: any) => {
              return (
                <div key={ind} data-testid="nahe">
                  {item.name}
                </div>
              );
            })
          : err} */}
        <form action={actionfr}>
          <div className="table-responsive-md" id="my-input">
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Sr.No</th>
                  <th>Name</th>
                  <th>City</th>
                  <th>Mobile</th>
                  <th>Action </th>
                </tr>
              </thead>
              <tbody>
                {data && data?.response?.length > 0 ? (
                  data?.response.map((item: any) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>
                          {edit === `edit-${item?.id}` ? (
                            <input
                              name="fname"
                              defaultValue={
                                state?.sname?.fname
                                  ? state?.sname?.fname
                                  : item?.name
                              }
                              placeholder="Enter name"
                            ></input>
                          ) : (
                            item.name
                          )}
                        </td>
                        <td>
                          {edit === `edit-${item?.id}` ? (
                            <input
                              name="city"
                              defaultValue={
                                state?.sname?.city
                                  ? state?.sname?.city
                                  : item?.city
                              }
                              placeholder="enter city"
                            ></input>
                          ) : (
                            item.city
                          )}
                        </td>
                        <td>
                          {edit === `edit-${item?.id}` ? (
                            <input
                              name="mob"
                              defaultValue={
                                state?.sname?.mob
                                  ? state?.sname?.mob
                                  : item?.mobile
                              }
                              placeholder="enter Mobile"
                            ></input>
                          ) : (
                            item.mobile
                          )}
                        </td>
                        <td>
                          <FontAwesomeIcon
                            icon={faEdit}
                            onClick={() => Editfr(item.id)}
                          />
                          <FontAwesomeIcon
                            icon={faTrash}
                            onClick={() => Deletefr(item.id)}
                          />

                          <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={ispPend}
                          >
                            <FontAwesomeIcon icon={faSave} /> Save
                          </button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={5}>Nodata</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <h3 className="text-danger">{ispPend ? "Loading" : state?.error}</h3>
        </form>
        <Child age={20} clicks={Clicks} />
      </Suspense>
    </div>
  );
};
export default Propstypes;
