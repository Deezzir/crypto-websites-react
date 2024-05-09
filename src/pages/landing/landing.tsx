import { CopyCa } from "../../common/copy-ca";
import { Cards2 } from "./blocks/cards/cards2";

export const Landing = () => {
  return (
    <div className="w-full min-h-[80vh] justify-center items-center flex flex-col relative">
      <div className="mb-auto w-full text-center justify-center items-center flex flex-col gap-8">
        <p className="text-6xl font-bold uppercase">Taro of memes.</p>
        <CopyCa />
      </div>
      <button
        type="button"
        className="text-white my-auto bg-gray-800 hover:bg-gray-900 focus:outline-none font-medium rounded-lg text-sm px-10 py-4 me-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      >
        DIVE INTO FUTURE
      </button>

      <div className="flex flex-col gap-2">
        <p className="text-lg text-center">Get your prediction</p>
        <div className="flex flex-col gap-2">
          <Cards2 />
        </div>
      </div>
    </div>
  );
};
