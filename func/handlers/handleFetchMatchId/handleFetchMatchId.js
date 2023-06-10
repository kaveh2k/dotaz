const handleFetchMatchId = (
  perSetMatchId,
  getResult,
  setShowErrorLocal,
  setShowError
) => {
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

export default handleFetchMatchId;
