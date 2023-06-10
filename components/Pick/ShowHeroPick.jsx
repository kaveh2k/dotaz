import { useEffect, useState } from "react";

import fuse from "@/engine/searchPic.eangine";
import Image from "next/image";
import func from "@/func";

import Skeleton from "@mui/material/Skeleton";

import Tooltip from "@mui/material/Tooltip";

const ShowHeroPick = ({ children, cn }) => {
  const { handleFindHeroPic, handleFindHeroName } = func.handler;

  const [heroNameFind, setHeroNameFind] = useState([]);
  const [showData, setShowData] = useState(false);
  const [searchFinder, setSearchFinder] = useState();
  const [resultFinder, setResultFinder] = useState();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  // ********************************************************

  useEffect(() => {
    setLoading(true);
    setData(handleFindHeroName(Number(children[0])));
  }, []);

  useEffect(() => {
    setResultFinder("");
    setSearchFinder(undefined);
  }, []);

  useEffect(() => {
    if (data !== undefined) {
      setHeroNameFind(data.displayName);
    }
  }, [data]);

  // ********************************************************

  useEffect(() => {
    const heroFindFunc = async () => {
      const promiseFind = await handleFindHeroPic(fuse, heroNameFind);
      const arrayFind = Array.from(promiseFind);
      setSearchFinder(arrayFind[0]);
    };
    heroFindFunc();
  }, [heroNameFind]);

  useEffect(() => {
    if (
      searchFinder !== undefined &&
      searchFinder !== null &&
      searchFinder != ""
    ) {
      setResultFinder(String(searchFinder.item.name));
      setShowData(true);
      setLoading(false);
    }
  }, [searchFinder]);

  // ******************************************************

  return (
    <>
      <div className={cn}>
        {loading ? (
          <Skeleton
            variant="rectangular"
            width={70}
            height={70}
            sx={{ bgcolor: "grey.800" }}
          />
        ) : (
          showData && (
            <Tooltip
              title={data.displayName}
              placement={children[1] === "Radiant" ? "left" : "right"}
            >
              <Image
                alt={resultFinder}
                className="rounded-md"
                src={`/heroes/${resultFinder}`}
                width={70}
                height={70}
              />
            </Tooltip>
          )
        )}
      </div>
    </>
  );
};

export default ShowHeroPick;
