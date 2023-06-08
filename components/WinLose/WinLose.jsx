import React from "react";
import Image from "next/image";
import { killCalc, timeCalc } from "@/func/calcData";
import useMatchStore from "@/store/matchStore";

// TODO: show Skeleton

const WinLose = ({ ref }) => {
  const { matchData } = useMatchStore();

  return (
    <>
      <div ref={ref}>
        <p className="text-center">
          Time: {timeCalc(matchData.match.durationSeconds)}
        </p>
        <div className="flex items-center justify-center space-x-10 p-8">
          <div className="flex flex-col items-center justify-center space-y-4">
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
            <p>Kills: {killCalc(matchData.match.radiantKills)}</p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4">
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
            <p>Kills: {killCalc(matchData.match.direKills)}</p>
          </div>
        </div>
        <p className="text-center text-3xl">
          {matchData.match.didRadiantWin ? "Radiant Won" : "Dire Won"}
        </p>
      </div>
    </>
  );
};

export default WinLose;
