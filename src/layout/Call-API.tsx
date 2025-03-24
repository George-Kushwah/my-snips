import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Querygetdata } from "./../query/Queryfun";
// import axios from "axios";
const CallAPI = () => {
  const { data }: any = useQuery(Querygetdata());
  //   const [dat, setdat] = useState<any>([]);
  //   useEffect(() => {
  //     // const a = async () => {
  //     //   try {
  //     //     let s = await fetch("https://dummyjson.com/products");
  //     //     let s1 = await s.json();
  //     //     setdat(s1?.products);
  //     //   } catch (e) {
  //     //     console.log(e);
  //     //   }
  //     // };
  //     // a();
  //     // axios
  //     //   .get("https://dummyjson.com/products")
  //     //   .then((e: any) => setdat(e?.data));
  //   }, []);
  //   console.log(dat);
  return (
    <>
      <div className="container-fluid mt-2" data-testid="Mydiv">
        <h3>All Item Here</h3>
        <div className="my-data" data-testid="childdiv">
          {data?.products && data?.products.length > 0
            ? data?.products.map((item: any, ind: any) => (
                <div key={ind}>
                  {item?.images &&
                    item?.images.length > 0 &&
                    item?.images.map((img: any, inds: any) => (
                      <React.Fragment key={inds}>
                        {inds === 0 && (
                          <img src={img} key={inds} className="img-fluid" />
                        )}
                      </React.Fragment>
                    ))}
                  <p>
                    <span>Title</span> :{item?.title}
                  </p>
                  <p>
                    <span>Description</span> :{item?.description}
                  </p>
                  <p>
                    <span>Price</span> : {item?.price}
                  </p>
                </div>
              ))
            : "fd"}
        </div>
      </div>
    </>
  );
};
export default CallAPI;
