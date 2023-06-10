const killCalc = (eachTeamKills) => {
  let sum = 0;
  eachTeamKills.map((kill) => {
    sum = kill + sum;
  });
  return sum;
};
export default killCalc;
