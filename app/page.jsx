"use client";
import Form from "@/components/Form/From";
import { useRef, useState } from "react";
import useMatchStore from "@/store/matchStore";
import { useRouter } from "next/navigation";
import { Backdrop, CircularProgress } from "@mui/material";

const MatchInfo = () => {
  const inputNumRef = useRef();
  const { setMatchId } = useMatchStore();

  // *************************************
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  // *************************************
  const handleSubmitWrapper = (e) => {
    e.preventDefault();
    setLoading(true);
    setMatchId(inputNumRef.current.value);
    router.push(`/match/${inputNumRef.current.value}`);
  };
  // *************************************

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
          v={"Match id"}
          handleSubmitWrapper={handleSubmitWrapper}
          inputNumRef={inputNumRef}
        >
          <p className="text-rose-700">
            for example, use this match ID 7855125456 or 7855277763
          </p>
        </Form>
      </div>
    </div>
  );
};

export default MatchInfo;
