"use client";

import LinearProgress from "@mui/material/LinearProgress";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Match = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }, []);

  return (
    <>
      <div className="flex justify-center items-center h-2/6 min-h-screen ">
        <div>
          <h3 className="text-white mb-3">Going back to main page...</h3>
          <LinearProgress />
        </div>
      </div>
    </>
  );
};

export default Match;
