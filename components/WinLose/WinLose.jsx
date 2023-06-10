import React, { useEffect, useState } from "react";
import Image from "next/image";
import { killCalc, timeCalc } from "@/func/calcData";
import useMatchStore from "@/store/matchStore";
import { forwardRef } from "react";
import { Skeleton, Tooltip } from "@mui/material";

const WinLose = forwardRef(function WinLose(props, ref) {
  const { matchData } = useMatchStore();

  const [time, setTime] = useState();
  const [radiantScore, setRadiant] = useState();
  const [direScore, setDireScore] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTime(timeCalc(matchData.match.durationSeconds));
    setRadiant(killCalc(matchData.match.radiantKills));
    setDireScore(killCalc(matchData.match.direKills));
    setLoading(false);
  }, []);

  return (
    <>
      <div ref={ref}>
        <p className="text-center">Time: {time}</p>
        <div className="flex items-center justify-center space-x-10 p-8">
          <div className="flex flex-col items-center justify-center space-y-4">
            {loading ? (
              <Skeleton
                variant="rectangular"
                width={120}
                height={120}
                sx={{ bgcolor: "grey.800" }}
              />
            ) : (
              <>
                <Tooltip title="Radiant" placement="top">
                  <Image
                    className={
                      matchData.match.didRadiantWin
                        ? "rounded-md"
                        : "rounded-md filter grayscale"
                    }
                    src="/Radiant_icon.png"
                    alt="Radiant"
                    width={120}
                    height={120}
                  />
                </Tooltip>
                <p>Kills: {radiantScore}</p>
              </>
            )}
          </div>
          <div className="flex flex-col items-center justify-center space-y-4">
            {loading ? (
              <Skeleton
                variant="rectangular"
                width={120}
                height={120}
                sx={{ bgcolor: "grey.800" }}
              />
            ) : (
              <>
                <Tooltip title="Dire" placement="top">
                  <Image
                    className={
                      matchData.match.didRadiantWin
                        ? "rounded-md filter grayscale"
                        : "rounded-md"
                    }
                    src="/Dire_icon.png"
                    alt="Dire"
                    width={120}
                    height={120}
                  />
                </Tooltip>
                <p>Kills: {direScore}</p>
              </>
            )}
          </div>
        </div>
        <p className="text-center text-3xl">
          {matchData.match.didRadiantWin ? "Radiant Won" : "Dire Won"}
        </p>
      </div>
    </>
  );
});

export default WinLose;
