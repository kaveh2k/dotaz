import { useEffect, useState } from "react";

import Image from "next/image";

import func from "@/func";

import Skeleton from "@mui/material/Skeleton";
import { Tooltip } from "@mui/material";

const ShowHeroBan = ({ children, cn }) => {
  const { handleHeroFindFunc, handleFindHeroName } = func.handler;
  // ********************************************************

  const [showData, setShowData] = useState(false);
  const [resultFinder, setResultFinder] = useState();
  const [data, setData] = useState();

  // ********************************************************
  useEffect(() => {
    setData(handleFindHeroName(Number(children)));
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
  const [imageLoading, setImageLoading] = useState(true);
  const handleImageLoad = () => {
    setImageLoading(false);
  };
  // ******************************************************

  return (
    <>
      <div className={cn}>
        {showData && (
          <Tooltip title={data.displayName} placement="top-start">
            <>
              {imageLoading && (
                <Skeleton
                  variant="rectangular"
                  width={40}
                  height={40}
                  sx={{ bgcolor: "grey.800" }}
                />
              )}
              <Image
                alt={resultFinder}
                className="rounded-md filter grayscale"
                src={`/heroes/${resultFinder}`}
                width={imageLoading ? 0 : 40}
                height={imageLoading ? 0 : 40}
                onLoad={handleImageLoad}
              />
            </>
          </Tooltip>
        )}
      </div>
    </>
  );
};

export default ShowHeroBan;
