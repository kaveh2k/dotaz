import { useEffect, useState } from "react";

import Image from "next/image";
import func from "@/func";

import Skeleton from "@mui/material/Skeleton";

import Tooltip from "@mui/material/Tooltip";

const ShowHeroPick = ({ children, cn }) => {
  const { handleHeroFindFunc, handleFindHeroName } = func.handler;

  const [showData, setShowData] = useState(false);
  const [resultFinder, setResultFinder] = useState();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  // ********************************************************

  useEffect(() => {
    setLoading(true);
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

  useEffect(() => {
    if (showData === true) setLoading(false);
  }, [showData]);

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
