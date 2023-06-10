"use client";
import Form from "@/components/Form/From";
import { useRef } from "react";
import useMatchStore from "@/store/matchStore";
import { useRouter } from "next/navigation";

// TODO: create online database for pictures and hero name request
// FIXME: fix SSR and CSR for whole applicaton

const MatchInfo = () => {
  const inputNumRef = useRef();
  const { setMatchId } = useMatchStore();

  const router = useRouter();
  // *************************************
  const handleSubmitWrapper = (e) => {
    e.preventDefault();
    const matchId = inputNumRef.current.value;
    setMatchId(inputNumRef.current.value);
    router.push(`http://localhost:3000/match/${matchId}`);
  };
  // *************************************
  return (
    <div className="flex justify-center items-center h-2/6 min-h-screen ">
      <div className="bg-gray-800 shadow-md rounded-md p-8 w-2/4 grid auto-rows-min">
        <Form
          v={"Match id"}
          handleSubmitWrapper={handleSubmitWrapper}
          inputNumRef={inputNumRef}
        ></Form>
      </div>
    </div>
  );
};

export default MatchInfo;
