import { heroesName } from "@/model/heroesNameAndID.model";

const handleFindHeroPic = (f, q) => {
  const result = f.search(q);
  return result;
};

const handleSetData = (setMatchData, data) => {
  setMatchData(data);
};
const handlePreSetMatchId = (
  setShowError,
  setShowData,
  perSetMatchId,
  getResult,
  setShowErrorLocal,
  showError
) => {
  setShowErrorLocal(showError);
  setShowError(null);
  setShowData(false);
  if (!isNaN(perSetMatchId)) {
    if (Number(perSetMatchId) !== 0) {
      getResult({ variables: { id: Number(perSetMatchId) } });
    } else {
      setShowErrorLocal("please enter your match ID");
      setShowError("please enter your match ID");
    }
  } else {
    setShowErrorLocal("please enter your match ID");
    setShowError("please enter your match ID");
  }
};

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

const handleFindHeroName = (id) => {
  return heroesName.find((element) => element.id === id);
};

module.exports = {
  handleSetData,
  handleShowPickBan,
  handlePick,
  handleFindHeroPic,
  handlePreSetMatchId,
  handleFindHeroName,
};
