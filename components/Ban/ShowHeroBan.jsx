import { useEffect, useState } from "react";

import fuse from "@/engine/searchPic.eangine";
import Image from "next/image";
import { handleFindHeroPic, handleFindHeroName } from "@/func/handle";

import Skeleton from "@mui/material/Skeleton";
import { Tooltip } from "@mui/material";

// TODO: delete API req and take it from database

const ShowHeroBan = ({ children, cn }) => {
  const [heroNameFind, setHeroNameFind] = useState([]);
  const [showData, setShowData] = useState(false);
  const [searchFinder, setSearchFinder] = useState();
  const [resultFinder, setResultFinder] = useState();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  //const [getHero, { data, loading }] = useLazyQuery(heroData);

  useEffect(() => {
    setLoading(true);
    setData(handleFindHeroName(Number(children)));
    // getHero({ variables: { id: Number(children) } });
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
            width={40}
            height={40}
            sx={{ bgcolor: "grey.800" }}
          />
        ) : (
          showData && (
            <Tooltip title={data.displayName} placement="top-start">
              <Image
                alt={resultFinder}
                className="rounded-md filter grayscale"
                src={`/heroes/${resultFinder}`}
                width={40}
                height={40}
              />
            </Tooltip>
          )
        )}
      </div>
    </>
  );
};

export default ShowHeroBan;
