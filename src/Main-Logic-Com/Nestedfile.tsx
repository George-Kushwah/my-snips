import React, { useEffect, useState } from "react";

interface IFileProps {
  files: any;
  HandleInsert: any;
}

const Nestedfile = ({ files, HandleInsert }: IFileProps) => {
  const [showroot, setshowroot] = useState<any>(false);
  const [showinput, setshowinput] = useState<any>({
    visible: false,
    isfolder: null,
  });
  const Handlefolder = (ev: any, isfolder: any) => {
    ev.stopPropagation();
    setshowroot(true);
    setshowinput({
      visible: true,
      isfolder: isfolder,
    });
  };
  const Onaddfolder = (ev: any) => {
    if (ev.keyCode === 13 && ev.target.value) {
      HandleInsert(files.id, ev.target.value, showinput.isfolder);
      setshowinput({ ...showinput, visible: false });
    }
  };

  return (
    <>
      <div className="fl-gap">
        <div
          style={{ cursor: "pointer" }}
          onClick={() => setshowroot(!showroot)}
        >
          📁 {files?.name}
          <button type="button" onClick={(e) => Handlefolder(e, true)}>
            +Folder
          </button>
          <button type="button" onClick={(e) => Handlefolder(e, false)}>
            +File
          </button>
        </div>
        <div className={showroot ? "ads" : ""}>
          {showinput.visible && (
            <>
              <span>{showinput.isfolder ? "📁" : "🗃️"}</span>
              <input
                type="text"
                autoFocus
                onKeyDown={(e) => Onaddfolder(e)}
                onBlur={() => setshowinput({ ...showinput, visible: false })}
              />
            </>
          )}
        </div>
        <div className={showroot ? "fl-gap1" : "fl-gap2"}>
          {files?.items.map((item: any, ind: any) =>
            item?.isFolder ? (
              <Nestedfile HandleInsert={HandleInsert} files={item} key={ind} />
            ) : (
              <>
                <div key={ind} className="files">
                  🗃️ {item.name}
                </div>
              </>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Nestedfile;
