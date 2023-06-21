import { useEffect, useState } from "react";

import Image from "next/image";
import func from "@/func";

import Skeleton from "@mui/material/Skeleton";

import Tooltip from "@mui/material/Tooltip";

const ShowHeroPick = ({ children, cn }) => {
  const { handleHeroFindFunc, handleFindHeroName } = func.handler;

  const [showData, setShowData] = useState(false);
  const [resultFinder, setResultFinder] = useState();
  const [imageLoading, setImageLoading] = useState(true);

  const [data, setData] = useState();

  // ********************************************************

  useEffect(() => {
    setData(handleFindHeroName(Number(children[0])));
    setResultFinder("");
  }, []);

  // ********************************************************

  useEffect(() => {
    if (data !== undefined) {
      const searchFinder = handleHeroFindFunc(data.displayName);
      if (
        searchFinder !== undefined &&
        searchFinder !== null &&
        searchFinder != "" &&
        searchFinder
      ) {
        setResultFinder(String(searchFinder.item.name));
        setShowData(true);
      }
    }
  }, [data]);

  // ******************************************************
  // TODO: use func to get handler
  const handleImageLoad = () => {
    setImageLoading(false);
  };
  // ******************************************************

  return (
    <>
      <div className={cn}>
        {showData && (
          <>
            {imageLoading && (
              <Skeleton
                variant="rectangular"
                width={70}
                height={70}
                sx={{ bgcolor: "grey.800" }}
              />
            )}
            <Tooltip
              title={data.displayName}
              placement={children[1] === "Radiant" ? "left" : "right"}
            >
              <Image
                alt={resultFinder}
                className="rounded-md"
                src={`/heroes/${resultFinder}`}
                width={imageLoading ? 0 : 70}
                height={imageLoading ? 0 : 70}
                onLoad={handleImageLoad}
              />
            </Tooltip>
          </>
        )}
      </div>
    </>
  );
};

export default ShowHeroPick;
