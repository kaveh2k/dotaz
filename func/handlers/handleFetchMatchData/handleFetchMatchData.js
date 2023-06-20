import axios from "axios";

const handleFetchMatchData = (
  setLoading,
  setShowErrorLocal,
  setShowError,
  setShowData,
  params,
  setData,
  showError
) => {
  setLoading(true);
  setShowErrorLocal(showError);
  setShowError(null);
  setShowData(false);
  const perSetMatchId = params.matchId;
  if (!isNaN(perSetMatchId)) {
    if (Number(perSetMatchId) !== 0) {
      axios
        .post(`${process.env.NEXT_PUBLIC_MATCHES_URL}${perSetMatchId}`)
        .then(async (response) => {
          setData(response.data);
        })
        .catch((error) => {
          setShowErrorLocal("please contact support");
          setShowError("please contact support");
          setLoading(false);
        });
    } else {
      setShowErrorLocal("please enter your match ID");
      setShowError("please enter your match ID");
      setLoading(false);
    }
  } else {
    setShowErrorLocal("please enter your match ID");
    setShowError("please enter your match ID");
    setLoading(false);
  }
};

export default handleFetchMatchData;
