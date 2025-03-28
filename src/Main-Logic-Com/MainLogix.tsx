import React, { Suspense, useState } from "react";
import { useParams } from "react-router-dom";
import "./../assets/css/grid.scss";
const Greenlight = React.lazy(() => import("./Green-light"));
const Accodotion = React.lazy(() => import("./Accodotion"));
const Dragdrop = React.lazy(() => import("./Drag-drop"));
const Weather = React.lazy(() => import("./Weather"));
const Addcounter = React.lazy(() => import("./Addcounter"));

const MainLogix = () => {
  const { Logics } = useParams();
  const [note, setnotes] = useState<any>([
    {
      id: 1,
      note: "lorem spunsdsd-1",
    },
    {
      id: 2,
      note: "lorem spunsdsd-2",
    },
  ]);
  return (
    <>
      <Suspense fallback={<>Loading.....</>}>
        <div className="container-fluid mt-3">
          <div className="row d-flex justify-content-center">
            {Logics === "Green-Light" && <Greenlight />}
          </div>
          <div className="row">
            <div className="container">
              {Logics === "Accodotion" && <Accodotion />}
              {Logics === "Dragdrop" && (
                <Dragdrop note={note} setnote={setnotes} />
              )}
              {Logics === "Weather" && <Weather />}
              {Logics === "Addcounter" && <Addcounter />}
            </div>
          </div>
        </div>
      </Suspense>
    </>
  );
};
export default MainLogix;
