import React from "react";
import { useGetByNameQuery } from "./RTKQuery/Loadapi";

const RTKQuery = () => {
  const { data, error, isLoading } = useGetByNameQuery();
  console.log(data);
  return <div>fdfdfds</div>;
};

export default RTKQuery;
