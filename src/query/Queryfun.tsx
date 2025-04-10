import { queryOptions } from "@tanstack/react-query";
import CustomAxios from "../layout/Axios-list";

const getcall = async () => {
  let a1 = await fetch("https://jsonplaceholder.typicode.com/users");
  return a1.json();
};
const getcalldat = async () => {
  let urls: any = CustomAxios("http://localhost:3000/");
  let a1 = urls("https://dummyjson.com/products")
    .then((res: any) => res?.data)
    .catch((e: any) => e.toJSON().message);
  return a1;
};
const getSearhItem = async (ev: any) => {
  let urls: any = CustomAxios("http://localhost:3000/");
  let a1 = urls(`https://dummyjson.com/users/search?q=${ev}`)
    .then((res: any) => res?.data)
    .catch((e: any) => e.toJSON().message);
  return a1;
};

export function Queryget() {
  return queryOptions({
    queryKey: ["mylist"],
    queryFn: getcall,
  });
}
export function Querygetdata() {
  return queryOptions({
    queryKey: ["mylist1"],
    queryFn: getcalldat,
  });
}
export function SearchItems(ev: any) {
  return queryOptions({
    queryKey: ["searchitems", ev],
    queryFn: () => getSearhItem(ev),
    enabled: !!ev,
  });
}
