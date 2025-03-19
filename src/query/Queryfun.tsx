import { queryOptions } from "@tanstack/react-query";

const getcall = async () => {
  let a1 = await fetch("https://jsonplaceholder.typicode.com/users");
  return a1.json();
};

export function Queryget() {
  return queryOptions({
    queryKey: ["mylist"],
    queryFn: getcall,
  });
}
