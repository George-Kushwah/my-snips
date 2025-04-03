import React, { useState } from "react";
interface ICooprops {
  comment: any;
  key: any;
  handlecomment: (id: any, text: any) => void;
  deletew: (ed: any) => void;
}

const Nestedcom = ({ comment, deletew, handlecomment }: ICooprops) => {
  const [replys, setreplys] = useState<boolean>(false);
  const [commentbody, setcommentbody] = useState<any>("");

  const handleaddcom = () => {
    let newcom: any = {
      id: Date.now(),
      text: commentbody,
      reply: [],
    };
    handlecomment(comment.id, newcom);
    setreplys(false);
  };
  console.log(Date.now());
  return (
    <div>
      <div className="nestd">
        {comment.text}
        {replys && (
          <input
            type="text"
            onChange={(e) => setcommentbody(e.target.value)}
            autoFocus
          ></input>
        )}
        {replys ? (
          <>
            <button
              type="button"
              onClick={handleaddcom}
              className="btn btn-dark"
            >
              Add
            </button>
            <button
              type="button"
              onClick={() => setreplys(false)}
              className="btn btn-dark"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              type="button"
              onClick={() => setreplys(true)}
              className="btn btn-dark"
            >
              Reply
            </button>
            <button
              type="button"
              onClick={() => deletew(comment.id)}
              className="btn btn-dark"
            >
              Delete
            </button>
          </>
        )}
      </div>
      {comment?.reply.map((item: any, ind: any) => (
        <>
          <div className="gapsq">
            <Nestedcom
              key={ind}
              deletew={deletew}
              handlecomment={handlecomment}
              comment={item}
            />
          </div>
        </>
      ))}
    </div>
  );
};
export default Nestedcom;
