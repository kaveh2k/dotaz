const handleShowPickBan = (pick, side) => {
  const resArr = [];
  if (side == "Radiant") {
    pick.Radiant.map((i) => {
      resArr.push(Number(i.heroId));
    });
  }
  if (side == "Dire") {
    pick.Dire.map((i) => {
      resArr.push(Number(i.heroId));
    });
  }
  if (side == "Ban") {
    pick.Ban.map((i) => {
      resArr.push(Number(i.bannedHeroId));
    });
  }
  return resArr;
};

export default handleShowPickBan;
