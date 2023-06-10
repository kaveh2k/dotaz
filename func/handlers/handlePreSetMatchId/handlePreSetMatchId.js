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

export default handlePreSetMatchId;

// TODO: create seperate file for handle fetch matchid
