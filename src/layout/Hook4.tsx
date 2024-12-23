import React, { useActionState, useRef } from "react";
import { Fromaction } from "./Fromaction";
export default function Hook4() {
  const refs = useRef<HTMLInputElement>(null);
  const insta = {
    mess: null,
  };
  const [state, actionfr, ispPend] = useActionState(Fromaction, insta);
  return (
    <div>
      <div className="col-md-6">
        <form action={actionfr}>
          <input
            type="text"
            name="sname"
            ref={refs}
            onFocus={() => {
              let dc: any = refs.current;
              if (dc) {
                dc.style.color = "red";
              }
            }}
          ></input>
          <button type="submit" className="btn btn-primary" disabled={ispPend}>
            click
          </button>
          <h3 className="text-danger">{ispPend ? "Loading" : state.mess}</h3>
        </form>
      </div>
    </div>
  );
}
