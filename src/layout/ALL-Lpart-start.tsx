import React from "react";
interface IStartprops {
  star: any;
  setstar: React.Dispatch<React.SetStateAction<any>>;
}

const ALLLpartstart = ({ star, setstar }: IStartprops) => {
  return (
    <>
      <p>
        Rating star &nbsp;
        {[1, 2, 3, 4, 5].map((item: any, ind: any) => (
          <span
            style={{
              cursor: "pointer",
              color: star >= item ? "gold" : "gray",
              fontSize: `35px`,
            }}
            key={ind}
            onClick={() => setstar(item)}
          >
            ★
          </span>
        ))}
      </p>
    </>
  );
};
export default ALLLpartstart;
