import func from "@/func";
import useMatchStore from "@/store/matchStore";
import { useEffect, useState } from "react";
import ShowHeroBan from "./ShowHeroBan";
import { forwardRef } from "react";

const Ban = forwardRef(function Ban({ children }, ref) {
  const { pick } = useMatchStore();

  const [heroId, setHeroId] = useState(null);

  const { handleShowPickBan } = func.handler;

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

  //****************************************************

  return (
    <>
      <div ref={ref}>
        <h3 className="text-center">{children}</h3>
        <div className="flex flex-wrap justify-center items-center">
          {heroId !== null ? (
            heroId.map((h, i) => (
              <ShowHeroBan key={i} cn="mr-1 p-1">
                {h}
              </ShowHeroBan>
            ))
          ) : (
            <p>No Ban Info</p>
          )}
        </div>
      </div>
    </>
  );
});

export default Ban;
