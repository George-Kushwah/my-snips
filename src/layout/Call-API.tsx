import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Querygetdata } from "./../query/Queryfun";
import { Pagination } from "./Pagingnatiom";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const Cardskeleton = React.lazy(() => import("./Card-skeleton"));
// import axios from "axios";
const CallAPI = () => {
  const { data, isFetching }: any = useQuery(Querygetdata());
  const [dat, setdat] = useState<any>([]);
  const [page, setpage] = useState<any>(10);
  const [pagetotal, setpagetotal] = useState<any>(0);
  const [userpage, setuserpage] = useState<any>(0);

  useEffect(() => {
    if (data && Object.keys(data).length > 0) {
      Pagination(page, data?.products, setpagetotal, userpage, setdat);
    }
  }, [data, userpage]);

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
  return (
    <>
      <div className="bgd">
        <SkeletonTheme baseColor="#ebebeb" highlightColor="#7e8282">
          <div className="container-fluid mt-2" data-testid="Mydiv">
            <h3>All Item Here</h3>
            <div className="my-data" data-testid="childdiv">
              {isFetching && <Cardskeleton count={10} />}
              {dat && dat.length > 0 ? (
                dat?.map((item: any, ind: any) => (
                  <div key={ind} className="kgf-1">
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
              ) : (
                <>
                  <div className="loadf">Loading.....</div>
                </>
              )}
            </div>
          </div>
          <div className="container page-fr">
            <div className="page-1">
              <button
                type="button"
                onClick={() => setuserpage(userpage - 1)}
                disabled={userpage > 0 ? false : true}
              >
                Prev
              </button>
              {[...Array(pagetotal)].map((_, item: any) => (
                <div
                  key={item}
                  className={userpage === item ? "num bgs" : "num"}
                  onClick={() => setuserpage(item)}
                >
                  {item + 1}
                </div>
              ))}
              <button
                disabled={userpage >= pagetotal - 1 ? true : false}
                onClick={() => setuserpage(userpage + 1)}
                type="button"
              >
                Next
              </button>
            </div>
          </div>
        </SkeletonTheme>
      </div>
    </>
  );
};
export default CallAPI;
