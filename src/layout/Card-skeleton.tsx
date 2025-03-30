import React from "react";
import Skeleton from "react-loading-skeleton";

interface CounIProps {
  count: number;
}

const Cardskeleton = ({ count }: CounIProps) => {
  return (
    <>
      <div className="skecl">
        {[...Array(count)].map((_, item: any) => (
          <div key={item} className="cab">
            <div className="centers">
              <Skeleton width={100} height={99} />
            </div>

            <div>
              <Skeleton count={4} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Cardskeleton;
