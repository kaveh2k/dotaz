"use client";

export default function Error({ error, reset }) {
  console.log(error);

  return (
    <div>
      <div className="flex justify-center items-center h-2/6 min-h-screen ">
        <div>
          <h5 className="text-white mb-3 text-center text-xl">
            Somthing went wrong...
          </h5>
          <h3 className="text-white mb-3 text-center">
            Please contact support!
          </h3>
        </div>
      </div>
    </div>
  );
}
