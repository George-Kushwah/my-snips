import React from "react";
import {
  useParams,
  useLocation,
  useNavigate,
  useLoaderData,
} from "react-router-dom";

const Drop = () => {
  const { idname }: any = useParams();
  const fet: any = useLoaderData();
  const loc = useLocation();
  return (
    <>
      Hello Page Name: {idname}
      <br></br>
      {fet.map((item: any, ind: any) => {
        return <p key={ind}>{item.name}</p>;
      })}
    </>
  );
};

export default Drop;

export const Datas = async () => {
  let a1 = await fetch("https://jsonplaceholder.typicode.com/users");
  let a2 = await a1.json();
  return a2;
};
