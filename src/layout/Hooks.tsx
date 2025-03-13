import React, {
  useTransition,
  useState,
  useSyncExternalStore,
  useRef,
  Suspense,
  useCallback,
} from "react";
import Hooks1 from "./Hook1";
import Hooks2 from "./Hooks2";
import Hooks3 from "./Hook3";
import Hook4 from "./Hook4";
import Hooks5 from "./Hook5";
import Hooks6 from "./Hook6";

let add = 5;
let add2: any = null;

function Hooks() {
  const refs: any = useRef(null);
  const [query, setquery] = useState<any>("");
  const [ab, setab] = useState<any>(0);
  const [data, setdata] = useState([
    "Apple",
    "Bnana",
    "Mango",
    "Orange",
    "Kiwi",
  ]);
  const [ispendding, starttrans] = useTransition();

  const adds = () => {
    add++;
    console.log(add);
    add2();
  };

  const Removelist = (ev: any) => {
    starttrans(() => {
      setdata((prevItems: any) => {
        const update = [...prevItems];
        update.splice(ev, 1);
        return update;
      });
    });
  };
  const calls = useCallback(() => {
    ab * 2;
  }, [ab]);

  return (
    <>
      <div className="contaier-fluid mt-3 p-2">
        <h4>React Hooks</h4>
        {/* {data.map((item: any, ind: any) => {
          return (
            <p
              key={ind}
              style={{ cursor: "pointer" }}
              onClick={() => Removelist(ind)}
            >
              {item} {ab}
            </p>
          );
        })}*/}
       {ispendding && <>Loading.....</>}
          {/* <button type="button" onClick={adds} className="btn btn-danger">
          Click Me add
        </button>  */}
        <button
          type="button"
          onClick={() => setab(ab + 1)}
          className="btn btn-danger"
        >
          Click Me add
        </button>
        {/* <button
          type="button"
          onClick={() => refs.current.func1()}
          className="btn btn-danger"
        >
          Child Hook function call
        </button> */}
      </div>
      <Hooks2 refs={refs} />
      {/* <Adding />
      <Hooks1 />
      <Hooks2 refs={refs} /> */}
      {/* <Hooks1 /> */}
      <>
        <input
          type="text"
          className="col-md-2"
          onChange={(e: any) => setquery(e.target.value)}
          name={query}
          value={query}
        />
      </>
      <Hooks3 search={query} />
      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <Hooks3 search={query} />
      </Suspense> */}
     <Hook4 />
      <Hooks5 />
       <Hooks6 counts={calls} />
    </>
  );
}
function addtoval(val: any) {
  add2 = val;
}
function snapshot() {
  return add;
}
const Adding = () => {
  const update = useSyncExternalStore(addtoval, snapshot);
  return <p>Here is update value {update}</p>;
};

export default Hooks;
