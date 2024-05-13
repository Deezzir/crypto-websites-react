import { MovingImg } from "../../../../common/moving-img";

import { motion } from "framer-motion";
import { BUY_LINK } from "../../../../common/urls";

export const Block2 = () => {
  const isMobile = window.innerWidth < 768;
  return (
    <div className="w-full min-h-screen bg-slate-400 items-center justify-center flex flex-col relative">
      <MovingImg
        customClassWrapper={"absolute top-[50%] md:top-[30%] right-20"}
        tz={5}
        ty={1}
        tx={10}
        customClassImg={"w-[10vh] z-0 inline"}
        imgPath={"./block1/maga.png"}
      />
      <MovingImg
        customClassWrapper={"absolute bottom-[20%] right-[50%] "}
        tz={5}
        ty={7}
        tx={3}
        customClassImg={"w-[10vh] z-0 inline"}
        imgPath={"./block1/maga.png"}
      />
      <MovingImg
        customClassWrapper={"absolute top-[20%] left-[10%]"}
        tz={5}
        ty={3}
        tx={9}
        customClassImg={"w-[10vh] z-0 inline"}
        imgPath={"./block1/maga.png"}
      />
      <motion.div
        className=" absolute bottom-0 right-0"
        initial={{
          x: isMobile ? 0 : 500,
        }}
        whileInView={{
          x: 0,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{ once: true }}
      >
        <img
          className="w-[30vh] md:w-[50vh] img-hor z-0"
          src="./block1/trump.png"
        />
      </motion.div>
      <motion.div
        className={
          "w-11/12 md:w-10/12 max-w-screen-2x min-h-[80vh] flex flex-col p-8 gap-16"
        }
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 3,
        }}
        viewport={{ once: true }}
      >
        <p className="text-white font-bold text-4xl w-full text-center">
          $TRUMPY ROADMAP
        </p>
        <motion.div
          initial={{
            x: isMobile ? 0 : -500,
          }}
          whileInView={{
            x: 0,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true }}
          className="flex w-full lg:w-1/2 flex-col gap-8 h-full my-auto justify-center items-center"
        >
          <p className="text-left w-full text-white font-bold text-4xl z-50">
            &#x2022; Initial dev buy 35%
          </p>
          <p className="text-white font-bold text-4xl z-50">
            &#x2022; 30% of dev buy to burn before Dexscreen
          </p>
          <p className="text-left w-full text-white font-bold text-4xl z-50">
            &#x2022; 20% of dev buy is going to be airdroped to signed
            $TRUMPIES, right after going to DEX live
          </p>
          <p className="text-left w-full text-white font-bold text-4xl z-50">
            &#x2022; 1 mill, dev burns another 15%
          </p>
          <p className="text-left w-full text-white font-bold text-4xl z-50">
            &#x2022; 2 mill, dev burns another 25%
          </p>
        </motion.div>
        <div className="flex flex-col gap-4 w-full items-center">
          <div className="flex md:flex-row flex-col gap-4">
            <button
              onClick={() => {
                window.open("/drop", "_blank");
              }}
              type="button"
              className="z-50 text-gray-900 bg-gray-100 hover:bg-gray-200  focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 "
            >
              <p className="w-full text-center text-xl uppercase">
                Sign up for Airdrop
              </p>
            </button>
            <button
              onClick={() => {
                window.open(BUY_LINK, "_blank");
              }}
              type="button"
              className="z-50 text-gray-900 bg-gray-100 hover:bg-gray-200  focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 "
            >
              <p className="w-full text-center text-xl uppercase">BUY</p>
            </button>
          </div>
<<<<<<< HEAD
=======
          <img className="w-8/12" src={"./block2/cards.jpg"} alt="cards" />
        </div>
        <div className="w-full md:w-6/12 flex p-4 justify-center items-center text-white">
          <img
            className="md:h-[80vh]"
            src="./block2/gendalph.jpg"
            alt="gendalph"
          />
>>>>>>> 3c7a1e8 (Update form)
        </div>
      </motion.div>
    </div>
  );
};
