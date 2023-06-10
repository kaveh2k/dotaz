import { useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { heroData } from "@/graphql/heroData.gql";

import fuse from "@/engine/searchPic.eangine";
import Image from "next/image";
import { handleFindHeroPic } from "@/func/handle";

import Skeleton from "@mui/material/Skeleton";

import Tooltip from "@mui/material/Tooltip";

// TODO: delete API
// TODO: change tesFunc name

const ShowHeroPick = ({ children, cn }) => {
  const [heroNameFind, setHeroNameFind] = useState([]);
  const [showData, setShowData] = useState(false);
  const [searchFinder, setSearchFinder] = useState();
  const [resultFinder, setResultFinder] = useState();

  const [getHero, { data, loading }] = useLazyQuery(heroData);

  useEffect(() => {
    getHero({ variables: { id: Number(children[0]) } });
  }, []);

  useEffect(() => {
    setResultFinder("");
    setSearchFinder(undefined);
  }, []);

  useEffect(() => {
    if (data !== undefined) {
      setHeroNameFind(data.constants.hero.displayName);
    }
  }, [data]);

  // ********************************************************

  useEffect(() => {
    const tesFunc = async () => {
      const promiseFind = await handleFindHeroPic(fuse, heroNameFind);
      const arrayFind = Array.from(promiseFind);
      setSearchFinder(arrayFind[0]);
    };
    tesFunc();
  }, [heroNameFind]);

  useEffect(() => {
    if (
      searchFinder !== undefined &&
      searchFinder !== null &&
      searchFinder != ""
    ) {
      setResultFinder(String(searchFinder.item.name));
      setShowData(true);
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
              title={data.constants.hero.displayName}
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
