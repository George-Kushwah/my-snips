import React, { Suspense, useState } from "react";
import { useParams } from "react-router-dom";
import { dat } from "./data";
import "./../assets/css/grid.scss";
import Cshook from "./Cshook";
const Nestedcom = React.lazy(() => import("./Nestedcom"));
const Main = () => {
  const { addcomment, deletes } = Cshook();
  const { id } = useParams();
  const [data, setdata] = useState<any>(dat);

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
          </div>
        </div>
      </Suspense>
    </>
  );
};
export default Main;
