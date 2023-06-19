import func from "@/func";

const handleDataExist = (
  data,
  setExtractedObject,
  setPick,
  setShowData,
  setLoading,
  setShowError,
  setShowErrorLocal,
  setMatchData
) => {
  const arrCheck = Object.values(data);
  setExtractedObject(arrCheck[0]);
  if (arrCheck[0]) {
    if (arrCheck[0].durationSeconds) {
      func.handler.handleSetData(setMatchData, arrCheck[0]);
      setPick(func.handler.handlePick(arrCheck[0].pickBans));
      setShowData(true);
      setLoading(false);
    } else {
      setShowError("error code: 1 ");
      setShowErrorLocal("error code: 1 ");
      setShowData(false);
      setLoading(false);
    }
  } else {
    setShowError("error code: 2");
    setShowErrorLocal("error code: 2");
    setShowData(false);
    setLoading(false);
  }
};

export default handleDataExist;
