import React from "react";
import {useQuery} from "@tanstack/react-query"
import {
  useParams,
  useLocation,
  useNavigate,
  useLoaderData,
} from "react-router-dom";

const Drop = () => {
  const { idname }: any = useParams();
  // const fet: any = useLoaderData();
  const loc = useLocation();
  const dec = async() => {
    let a1 = await fetch("https://jsonplaceholder.typicode.com/users");
    let a2 = await a1.json();
    return a2;
  }
  const { data,isError,error,isPending } = useQuery({
    queryKey: ["Pro"],
    queryFn:dec,
    
})

  // console.log(data)

  return (

    <>
      Hello Page Name: {idname}
      <br></br>
      {data !==undefined && data.length>0 && data.map((item: any, ind: any) => {
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
