import { useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { heroData } from "@/graphql/heroData.gql";

import fuse from "@/engine/searchPic.eangine";
import Image from "next/image";
import { handleFindHeroPic } from "@/func/handle";

import Skeleton from "@mui/material/Skeleton";

// TODO: create loading func
// TODO: show tooltip on pics
// TODO: delete API req and take it from database
// TODO: show Skeleton

const ShowHeroBan = ({ children, cn }) => {
  const [heroNameFind, setHeroNameFind] = useState([]);
  const [showData, setShowData] = useState(false);
  const [searchFinder, setSearchFinder] = useState();
  const [resultFinder, setResultFinder] = useState();

  const [getHero, { data, loading }] = useLazyQuery(heroData);

  useEffect(() => {
    getHero({ variables: { id: Number(children) } });
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
            width={40}
            height={40}
            sx={{ bgcolor: "grey.800" }}
          />
        ) : (
          showData && (
            <>
              <Image
                alt={resultFinder}
                className="rounded-md filter grayscale"
                src={`/heroes/${resultFinder}`}
                width={40}
                height={40}
              />
            </>
          )
        )}
      </div>
    </>
  );
};

export default ShowHeroBan;
