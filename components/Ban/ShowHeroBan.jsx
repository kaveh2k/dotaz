import { useEffect, useState } from "react";

import Image from "next/image";

import func from "@/func";

import Skeleton from "@mui/material/Skeleton";
import { Tooltip } from "@mui/material";

const ShowHeroBan = ({ children, cn }) => {
  // ********************************************************
  const { handleHeroFindFunc, handleFindHeroName } = func.handler;

  const [showData, setShowData] = useState(false);
  const [resultFinder, setResultFinder] = useState();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  // ********************************************************
  useEffect(() => {
    setLoading(true);
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
        setLoading(false);
      }
    }
  }, [data]);

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
