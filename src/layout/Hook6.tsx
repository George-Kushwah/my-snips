import React, { useState, useMemo } from "react";

interface IFunhook {
  counts: () => void;
}

export default function Hooks6({ counts }: IFunhook) {
  console.log("use callback calling", counts);

  return <div>Use calback</div>;
}
