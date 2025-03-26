import React, { useState, Suspense } from "react";
const Loginotp = React.lazy(() => import("./Loginotp"));
export default function Slider() {
  const [images, setimages] = useState<any>(0);
  const coursel = [
    {
      id: 1,
      img: "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
    },
    {
      id: 2,
      img: "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png",
    },
    {
      id: 3,
      img: "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png",
    },
  ];
  const Prevbtn = () => {
    if (images == 0) {
      setimages(coursel.length - 1);
    } else setimages(images - 1);
  };
  const Nextbtn = () => {
    if (images == coursel.length - 1) {
      setimages(0);
    } else setimages(images + 1);
  };
  return (
    <>
      <Suspense fallback={<>...Loading</>}>
        <div className="container-fluid mt-3 newsk-1">
          <div className="row">
            <div className="col-md-4">
              <em>My Slider</em>
              <img
                src={coursel[images]?.img}
                className="img-fluid sli-img"
              ></img>
              <div className="d-flex justify-content-between">
                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={Prevbtn}
                  disabled={images == 0 ? true : false}
                >
                  Prev
                </button>
                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={Nextbtn}
                  disabled={images == coursel.length - 1 ? true : false}
                >
                  Next
                </button>
              </div>
            </div>
            <div className="col-md-4">
              <Loginotp />
            </div>
          </div>
        </div>
      </Suspense>
    </>
  );
}
