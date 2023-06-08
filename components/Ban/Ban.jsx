import { handleShowPickBan } from "@/func/handle";
import useMatchStore from "@/store/matchStore";
import { useEffect, useState } from "react";
import ShowHeroBan from "./ShowHeroBan";

const Ban = ({ ref, children }) => {
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
};

export default Ban;
