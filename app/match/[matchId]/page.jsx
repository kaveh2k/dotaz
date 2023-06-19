"use client";

import React, { useEffect, useRef, useState } from "react";

import { Transition } from "@headlessui/react";

import useMatchStore from "@/store/matchStore";

import WinLose from "@/components/WinLose/WinLose";

import func from "@/func";

import Form from "@/components/Form/From";

import Pick from "@/components/Pick/Pick";
import Ban from "@/components/Ban/Ban";
import { useRouter } from "next/navigation";

import Loading from "@/components/Loading/Loading";

const MatchInfo = ({ params }) => {
  const { handleFetchMatchData, handleDataExist } = func.handler;

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
  const [extractedObject, setExtractedObject] = useState();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  // ********************************************************
  const handleSubmitWrapper = (event) => {
    event.preventDefault();
    if (!(params.matchId == inputNumRef.current.value)) {
      setShowError("");
      setShowErrorLocal("");
      setShowData(false);
      router.push(`/match/${inputNumRef.current.value}`);
    } else {
      setShowError("Please enter a new match ID");
      setShowErrorLocal("Please enter a new match ID");
    }
  };
  // ********************************************************
  useEffect(() => {
    handleFetchMatchData(
      setLoading,
      setShowErrorLocal,
      setShowError,
      setShowData,
      params,
      setData,
      showError
    );
  }, []);

  // ********************************************************

  useEffect(() => {
    if (data) {
      handleDataExist(
        data,
        setExtractedObject,
        setPick,
        setShowData,
        setLoading,
        setShowError,
        setShowErrorLocal,
        setMatchData
      );
    }
  }, [data]);

  // ********************************************************

  return (
    <div className="flex justify-center items-center h-2/6 min-h-screen ">
      <div className="bg-gray-800 shadow-md rounded-md p-8 w-2/4 grid auto-rows-min">
        <Loading loading={loading} />
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
                  {showData && extractedObject !== null ? (
                    <Pick ref={ref}>Radiant</Pick>
                  ) : null}
                </div>

                <div className="col-span-2 border border-white rounded-xl mt-4 p-5 text-white ">
                  {showData && extractedObject !== null ? (
                    <WinLose ref={ref} />
                  ) : null}
                </div>

                <div className="border border-white rounded-xl mt-4 p-5 text-white">
                  {showData && extractedObject !== null ? (
                    <Pick ref={ref}>Dire</Pick>
                  ) : null}
                </div>

                <div className=" col-start-2 col-span-2 border border-white rounded-xl text-white flex flex-wrap justify-center items-center ">
                  <div className="m-3">
                    {showData && extractedObject !== null ? (
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
