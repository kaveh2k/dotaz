"use client";
import Form from "@/components/Form/From";
import { useRef } from "react";
import useMatchStore from "@/store/matchStore";
import { useRouter } from "next/navigation";

// FIXME: use data.ok for fetching (if possible)
// FIXME: fix SSR and CSR for whole applicaton
// FIXME: import SSR to CSR as a children

// TODO: create online database for pictures and hero name request
// TODO: add loading.jsx to all pages, use <Suspense></Suspense>, it only works for server clients
// TODO: add not-found.jsx or notfound() from next/navigation for 404 and false data
// TODO: turn off auto merge for git
// TODO: add error.jsx
// TODO: add api folder
// TODO: add milion.js

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
