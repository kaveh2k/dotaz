const handleFindHeroPic = (f, q) => {
  const result = f.search(q);
  return result;
};

const handleSetData = (setMatchData, data) => {
  setMatchData(data);
};

// const handleSubmit = (
//   event,
//   matchId,
//   setShowErrorLocal,
//   setShowError,
//   getResult,
//   router
// ) => {
//   setShowData(false);
//   event.preventDefault();
//   setShowErrorLocal(null);
//   setShowError(null);
//   if (!isNaN(matchId)) {
//     if (Number(matchId) !== 0) {
//       getResult({ variables: { id: Number(matchId) } });
//       router.push(`http://localhost:3000/match/${matchId}`);
//     } else {
//       setShowErrorLocal("Please enter your match ID");
//       setShowError("please enter your match ID");
//     }
//   } else {
//     setShowErrorLocal("Please enter your match ID");
//     setShowError("please enter your match ID");
//   }
// };

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

module.exports = {
  handleSetData,
  // handleSubmit,
  handleShowPickBan,
  handlePick,
  handleFindHeroPic,
  handlePreSetMatchId,
};
