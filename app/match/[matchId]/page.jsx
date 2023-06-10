"use client";

import React, { useEffect, useRef, useState } from "react";

import { useLazyQuery } from "@apollo/client";

import { Transition } from "@headlessui/react";

import useMatchStore from "@/store/matchStore";

import WinLose from "@/components/WinLose/WinLose";

import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";

import func from "@/func";

import Form from "@/components/Form/From";

import { MatchData } from "@/graphql/matchData.gql";
import Pick from "@/components/Pick/Pick";
import Ban from "@/components/Ban/Ban";
import { useRouter } from "next/navigation";

const MatchInfo = ({ params }) => {
  const { handleSetData, handlePick, handlePreSetMatchId } = func.handler;

  const {
    setMatchData,
    setPick,
    setShowData,
    showData,
    setShowError,
    showError,
  } = useMatchStore();

  const router = useRouter();

  const inputNumRef = useRef(null);

  const [showErrorLocal, setShowErrorLocal] = useState(null);

  const [getResult, { data, loading }] = useLazyQuery(MatchData, {
    nextFetchPolicy: "network-only",
  });
  // ********************************************************
  const handleSubmitWrapper = (event) => {
    event.preventDefault();
    setShowData(false);
    router.push(`http://localhost:3000/match/${inputNumRef.current.value}`);
  };
  // ********************************************************
  useEffect(() => {
    const perSetMatchId = params.matchId;
    handlePreSetMatchId(
      setShowError,
      setShowData,
      perSetMatchId,
      getResult,
      setShowErrorLocal,
      showError
    );
  }, []);

  // ********************************************************

  useEffect(() => {
    if (data) {
      const arrCheck = Object.values(data);
      const extractedObject = arrCheck[0];

      if (extractedObject) {
        if (!Object.values(extractedObject).includes(null)) {
          if (!arrCheck.includes(null)) {
            handleSetData(setMatchData, data);
            setPick(handlePick(data.match.pickBans));
            setShowData(true);
          } else {
            setShowError("Please enter your match ID");
            setShowErrorLocal("Please enter your match ID");
            setShowData(false);
          }
        } else {
          setShowError("No Pick Ban data available for this match ID");
          setShowErrorLocal("No Pick Ban data available for this match ID");
          setShowData(false);
        }
      } else {
        setShowError("Please enter your match ID");
        setShowErrorLocal("Please enter your match ID");
        setShowData(false);
      }
    }
  }, [data]);

  // ********************************************************

  return (
    <div className="flex justify-center items-center h-2/6 min-h-screen ">
      <div className="bg-gray-800 shadow-md rounded-md p-8 w-2/4 grid auto-rows-min">
        {loading && (
          <Backdrop
            sx={{
              color: "#fff",
              zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
            open={loading}
          >
            <CircularProgress width={210} height={118} color="error" />
          </Backdrop>
        )}
        <Form
          v={params.matchId}
          handleSubmitWrapper={handleSubmitWrapper}
          inputNumRef={inputNumRef}
        >
          {showErrorLocal && (
            <span className="text-red-600">{showErrorLocal}</span>
          )}
        </Form>

        <Transition
          show={showData}
          enter="transition-all ease-out duration-500"
          enterFrom="opacity-0 transform -translate-y-4"
          enterTo="opacity-100 transform translate-y-0"
          leave="transition-all ease-in duration-500"
          leaveFrom="opacity-100 transform translate-y-0"
          leaveTo="opacity-0 transform -translate-y-4"
        >
          {(ref) => (
            <div>
              <div className="grid grid-cols-4 gap-5">
                <div className="border border-white rounded-xl mt-4 p-5 text-white ">
                  {showData && data.match !== null ? (
                    <Pick ref={ref}>Radiant</Pick>
                  ) : null}
                </div>

                <div className="col-span-2 border border-white rounded-xl mt-4 p-5 text-white ">
                  {showData && data.match !== null ? (
                    <WinLose ref={ref} />
                  ) : null}
                </div>

                <div className="border border-white rounded-xl mt-4 p-5 text-white">
                  {showData && data.match !== null ? (
                    <Pick ref={ref}>Dire</Pick>
                  ) : null}
                </div>

                <div className=" col-start-2 col-span-2 border border-white rounded-xl text-white flex flex-wrap justify-center items-center ">
                  <div className="m-3">
                    {showData && data.match !== null ? (
                      <Ban ref={ref}>Ban</Ban>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          )}
        </Transition>
      </div>
    </div>
  );
};

export default MatchInfo;
