import React, { useEffect, useState } from "react";

export const Banner = (props: any) => {
  const [isButtonEnabled, setIsButtonEnabled] = useState(false); // Initialize button state as disabled

  useEffect(() => {
    let timer = setTimeout(() => {
      setIsButtonEnabled(true);
    }, 1 * 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-slate-400 flex justify-center items-center">
      <div className="flex flex-col gap-12 justify-center items-center">
        <h1 className="text-4xl text-white font-bold capitalize">TRUMPY</h1>
        <button
          className={`proceed-btn text-xl  text-black font-bold p-4 rounded-xl ${
            !isButtonEnabled
              ? "bg-gray-600 text-gray-800 cursor-not-allowed"
              : "bg-white"
          }`}
          onClick={() => props.close()}
          disabled={!isButtonEnabled}
        >
          Enter maga team
        </button>
      </div>
    </div>
  );
};
