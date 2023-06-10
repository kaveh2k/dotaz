const handlePick = (pick) => {
  if (pick !== null) {
    const pickList = {
      Radiant: [],
      Dire: [],
      Ban: [],
    };
    pick.map((item) => {
      if (item.wasBannedSuccessfully === null) {
        if (item.isRadiant === true) {
          pickList.Radiant.push(item);
        } else {
          pickList.Dire.push(item);
        }
      } else {
        pickList.Ban.push(item);
      }
    });
    return pickList;
  } else {
    return null;
  }
};

export default handlePick;
