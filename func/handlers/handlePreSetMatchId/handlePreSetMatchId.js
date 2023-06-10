import func from "@/func";

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
  func.handler.handleFetchMatchId(
    perSetMatchId,
    getResult,
    setShowErrorLocal,
    setShowError
  );
};

export default handlePreSetMatchId;
