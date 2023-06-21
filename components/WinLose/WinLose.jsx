import React, { useEffect, useState } from "react";
import Image from "next/image";
import func from "@/func";
import useMatchStore from "@/store/matchStore";
import { forwardRef } from "react";
import { Skeleton, Tooltip } from "@mui/material";

const WinLose = forwardRef(function WinLose(props, ref) {
  const { killCalc, timeCalc } = func.calc;

  //*********************************************
  const { matchData } = useMatchStore();

  //*********************************************
  const [time, setTime] = useState();
  const [radiantScore, setRadiantScore] = useState();
  const [direScore, setDireScore] = useState();

  //*********************************************

  useEffect(() => {
    setTime(timeCalc(matchData.durationSeconds));
    if (matchData.radiantKills && matchData.direKills) {
      setRadiantScore(killCalc(matchData.radiantKills));
      setDireScore(killCalc(matchData.direKills));
    } else {
      setRadiantScore("no Score availabe");
      setDireScore("no Score availabe");
    }
  }, []);
  //*********************************************
  const [imageLoading, setImageLoading] = useState(true);
  const handleImageLoad = () => {
    setImageLoading(false);
  };
  //*********************************************
  return (
    <>
      <div ref={ref}>
        <p className="text-center">Time: {time}</p>
        <div className="flex items-center justify-center space-x-10 p-8">
          <div className="flex flex-col items-center justify-center space-y-4">
            <>
              <>
                {imageLoading && (
                  <Skeleton
                    variant="rectangular"
                    width={120}
                    height={120}
                    sx={{ bgcolor: "grey.800" }}
                  />
                )}
                <Tooltip title="Radiant" placement="top">
                  <Image
                    className={
                      matchData.didRadiantWin
                        ? "rounded-md"
                        : "rounded-md filter grayscale"
                    }
                    src="/Radiant_icon.png"
                    alt="Radiant"
                    width={imageLoading ? 0 : 120}
                    height={imageLoading ? 0 : 120}
                    onLoad={handleImageLoad}
                  />
                </Tooltip>
              </>
              <p>Kills: {radiantScore}</p>
            </>
          </div>

          <div className="flex flex-col items-center justify-center space-y-4">
            <>
              <>
                {imageLoading && (
                  <Skeleton
                    variant="rectangular"
                    width={120}
                    height={120}
                    sx={{ bgcolor: "grey.800" }}
                  />
                )}
                <Tooltip title="Dire" placement="top">
                  <Image
                    className={
                      matchData.didRadiantWin
                        ? "rounded-md filter grayscale"
                        : "rounded-md"
                    }
                    src="/Dire_icon.png"
                    alt="Dire"
                    width={imageLoading ? 0 : 120}
                    height={imageLoading ? 0 : 120}
                    onLoad={handleImageLoad}
                  />
                </Tooltip>
              </>
              <p>Kills: {direScore}</p>
            </>
          </div>
        </div>
        <p className="text-center text-3xl">
          {matchData.didRadiantWin ? "Radiant Won" : "Dire Won"}
        </p>
      </div>
    </>
  );
});

export default WinLose;
