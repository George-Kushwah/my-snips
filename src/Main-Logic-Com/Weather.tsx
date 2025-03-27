import React, { useState, useEffect } from "react";
import CustomAxios from "../layout/Axios-list";

const Weather = () => {
  const [cityname, setcityname] = useState<any>("");
  const [data, setdata] = useState<any>([]);
  const [view, setview] = useState<boolean>(false);
  const [offx, setoffx] = useState<any>(0);
  const [offy, setoffy] = useState<any>(0);
  const GetDeatilsapp = () => {
    let axios = CustomAxios("http://localhost:3000/");
    let data = axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${"658dc4aa2f9372400dcbfa043201661d"}`
      )
      .then((res: any) => {
        setview(true);
        setdata(res?.data);
      })
      .catch((e: any) => console.log(e.toJSON().message));
  };
  const getMousede = (ev: any) => {
    setoffx(ev.clientX);
    setoffy(ev.clientY);
  };
  useEffect(() => {
    window.addEventListener("mousemove", getMousede);
  });
  return (
    <div className="container wea-hei d-flex justify-content-center align-items-center">
      <div className="col-lg-6 main">
        <div className="searchs">
          <input
            type="text"
            value={cityname}
            onChange={(e) => setcityname(e.target.value)}
            placeholder="Search City"
          />
          <button
            type="button"
            className="btn btn-light"
            onClick={GetDeatilsapp}
          >
            Get Weather
          </button>
          {view && (
            <>
              <h2>{data?.name}</h2>
              <h3>
                Temp is{" "}
                {Math.floor(data?.main?.temp - (data?.main?.temp * 5) / 9)}
                °C
              </h3>
              <p>{data?.weather[0]?.description}</p>
            </>
          )}
        </div>
      </div>
      {offx}
      <br></br>
      {offy}
    </div>
  );
};
export default Weather;
