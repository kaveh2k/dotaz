import { handleShowPickBan } from "@/func/handle";
import useMatchStore from "@/store/matchStore";
import { useEffect, useState } from "react";
import ShowHeroPick from "./ShowHeroPick";
import { forwardRef } from "react";

const Pick = forwardRef(function Pick({ children }, ref) {
  const { pick } = useMatchStore();

  const [heroId, setHeroId] = useState(null);

  useEffect(() => {
    if (pick !== null) {
      const arr = handleShowPickBan(pick, children);
      // TODO: fix thix shit
      const resArr = [];
      arr.map((i) => {
        resArr.push(i);
      });
      setHeroId(resArr);
    }
  }, [pick]);

  return (
    <>
      <div ref={ref}>
        <h3 className="text-center">{children}</h3>
        {heroId !== null ? (
          heroId.map((h, i) => (
            <div key={i} className="flex flex-wrap justify-center items-center">
              <ShowHeroPick cn="mb-2 mt-2">
                {h}
                {children}
              </ShowHeroPick>
            </div>
          ))
        ) : (
          <p>No P/B Info</p>
        )}
      </div>
    </>
  );
});

export default Pick;
