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
  const [ids, setIds] = useState<any>();
  const [state, actionfr, ispPend]: any = useActionState(
    Fromactiontest,
    undefined
  );
  const [edit, setedit] = useState<any>(false);
  const { err, dbtestsucc, dbinsertDatasucc }: any = useSelector(
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
    setIds(ev);
    if (edit !== `edit-${ev}`) {
      setedit(`edit-${ev}`);
    } else setedit("edit");
  };

  const Deletefr = (ev: any) => {};

  useEffect(() => {
    if (state) {
      let sx: any = {};
      sx.id = ids;
      sx.name = state?.sname?.fname;
      sx.city = state?.sname?.city;
      sx.mob = state?.sname?.mob;
      dispatch(actions.dbinsertload(sx));
    }
  }, [state]);

  useEffect(() => {
    if (dbinsertDatasucc?.status === 200) {
      dispatch(actions.dbtestload());
      setedit("edit");
    }
  }, [dbinsertDatasucc]);

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
                            <>
                              <input
                                name="fname"
                                defaultValue={
                                  state?.sname?.fname || state?.error?.fname
                                    ? state?.sname?.fname
                                    : item?.name
                                }
                                placeholder="Enter name"
                              ></input>
                              {state?.error?.fname && (
                                <p>{state?.error?.fname}</p>
                              )}
                            </>
                          ) : (
                            item.name
                          )}
                        </td>
                        <td>
                          {edit === `edit-${item?.id}` ? (
                            <>
                              <input
                                name="city"
                                defaultValue={
                                  state?.sname?.city || state?.error?.city
                                    ? state?.sname?.city
                                    : item?.city
                                }
                                placeholder="enter city"
                              ></input>
                              {state?.error?.city && (
                                <p>{state?.error?.city}</p>
                              )}
                            </>
                          ) : (
                            item.city
                          )}
                        </td>
                        <td>
                          {edit === `edit-${item?.id}` ? (
                            <>
                              <input
                                name="mob"
                                defaultValue={
                                  state?.error?.mob || state?.sname?.mob
                                    ? state?.sname?.mob
                                    : item?.mobile
                                }
                                placeholder="enter Mobile"
                              ></input>
                              {state?.error?.mob && <p>{state?.error?.mob}</p>}
                            </>
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
                            disabled={
                              edit === `edit-${item?.id}` ? ispPend : true
                            }
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
          {/* <h3 className="text-danger">{ispPend ? "Loading" : state?.error}</h3> */}
        </form>
        <Child age={20} clicks={Clicks} />
      </Suspense>
    </div>
  );
};
export default Propstypes;
