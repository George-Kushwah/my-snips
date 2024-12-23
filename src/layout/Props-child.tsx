import React from "react";

interface IProstype {
  age: number;
  clicks: () => void;
}

export default function Propschild({ age, clicks }: IProstype) {
  return (
    <>
      Props child {age}
      <button type="button" onClick={clicks} className="btn btn-danger">
        Click Me
      </button>
    </>
  );
}
