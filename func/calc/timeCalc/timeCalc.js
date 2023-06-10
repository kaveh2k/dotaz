const timeCalc = (durationSeconds) => {
  const floorMinute = Math.floor(durationSeconds / 60);
  const diffFloorSeconds = durationSeconds - floorMinute * 60;
  const diffFloorSecondsLessTen = `0${diffFloorSeconds}`;
  const matchExactTime = `${floorMinute}:${
    diffFloorSeconds < 10 ? diffFloorSecondsLessTen : diffFloorSeconds
  }`;
  return matchExactTime;
};

export default timeCalc;
