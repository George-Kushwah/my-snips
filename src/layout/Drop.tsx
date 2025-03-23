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
  const navi = useNavigate();
  console.log(loc);
  const Clienme = () => {
    navi("/life-cycle");
  };
  return (
    <>
      Hello Page Name: {idname}
      <br></br>
      {fet.map((item: any, ind: any) => {
        return <p key={ind}>{item.name}</p>;
      })}
      {idname === "Drop" && (
        <>
          <p onClick={Clienme} style={{ cursor: "pointer" }}>
            Link to life-cycle page
          </p>
        </>
      )}
    </>
  );
};

export default Drop;

export const Datas = async () => {
  let a1 = await fetch("https://jsonplaceholder.typicode.com/users");
  let a2 = await a1.json();
  return a2;
};
