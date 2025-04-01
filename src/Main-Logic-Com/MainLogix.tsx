import React, { Suspense, useState } from "react";
import { useParams } from "react-router-dom";
import "./../assets/css/grid.scss";
import Nestedexplorer from "./NestedData";
import Treemain from "./Treemain";
const Greenlight = React.lazy(() => import("./Green-light"));
const Accodotion = React.lazy(() => import("./Accodotion"));
const Dragdrop = React.lazy(() => import("./Drag-drop"));
const Weather = React.lazy(() => import("./Weather"));
const Addcounter = React.lazy(() => import("./Addcounter"));
const Nestedfile = React.lazy(() => import("./Nestedfile"));
const Traffic = React.lazy(() => import("./Traffic"));
const Table = React.lazy(() => import("./Tables"));

const MainLogix = () => {
  const { Addon } = Treemain();
  const { Logics } = useParams();
  const [files, setfiles] = useState<any>(Nestedexplorer);
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
  const HandleInsert = (folderid: any, item: any, isFolder: any) => {
    const final = Addon(files, folderid, item, isFolder);
    setfiles(final);
  };
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
              <div className="col-lg-4">
                {Logics === "Nestedfile" && (
                  <Nestedfile files={files} HandleInsert={HandleInsert} />
                )}
              </div>
              {Logics === "Traffic" && <Traffic />}
              {Logics === "Table-Pop" && <Table />}
            </div>
          </div>
        </div>
      </Suspense>
    </>
  );
};
export default MainLogix;
