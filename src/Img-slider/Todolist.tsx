import React, { useState, useRef } from "react";

interface ListIprops {
  list: any;
  setlist: React.Dispatch<React.SetStateAction<String>>;
}

const Todolist = ({ list, setlist }: ListIprops) => {
  const refs = useRef<HTMLInputElement>(null);
  const [data, setdata] = useState<any>([]);

  const AddtodoListtem = () => {
    let item: any = [...data];
    item.push(list);
    setdata(item);
    let val = refs.current;
    if (val) val.value = "";
  };
  const DeleteItem = (ev: any) => {
    const deletes = [...data];
    deletes.splice(ev, 1);
    setdata(deletes);
  };
  const EditItem = (ev: any) => {
    const edits = prompt("a", data[ev]);
    const updates = [...data];
    updates.splice(ev, 1, edits);
    setdata(updates);
  };

  return (
    <div className="todo w-75">
      <div>
        <input
          type="text"
          ref={refs}
          className="form-control"
          placeholder="Add Item..."
          onChange={(e) => setlist(e.target.value)}
        ></input>
      </div>
      <button type="button" className="btn btn-dark" onClick={AddtodoListtem}>
        Add
      </button>
      <div className="todo-bg">
        {data && data.length > 0 ? (
          data.map((item: any, ind: any) => (
            <div className="lists" key={ind}>
              <p>
                Task Name : <span>{item}</span>
              </p>
              <div className="btns">
                <button
                  type="button"
                  className="btn btn-light"
                  onClick={() => DeleteItem(ind)}
                >
                  Delete
                </button>
                <button
                  type="button"
                  className="btn btn-light"
                  onClick={() => EditItem(ind)}
                >
                  Edit
                </button>
              </div>
            </div>
          ))
        ) : (
          <>
            <div className="bgg">Todo List Empty....</div>
          </>
        )}
      </div>
      {/* {data && data.length > 0 ? data.map((item: any, ind: any) => {
              
          }):"No"} */}
    </div>
  );
};
export default React.memo(Todolist);
