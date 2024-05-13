import { TypeAnimation } from "react-type-animation";
import { Links } from "../../../../common/links";
import { MovingImg } from "../../../../common/moving-img";
import { motion } from "framer-motion";
import { CopyCa } from "../../../../common/copy-ca";
import { BUY_LINK } from "../../../../common/urls";

export const Block1 = () => {
  const isMobile = window.innerWidth < 768;

  return (
    <motion.div
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
      className="w-full min-h-screen justify-center items-center flex flex-col relative"
    >
      <motion.div
        className="absolute bottom-0 left-10"
        initial={{
          x: isMobile ? 0 : -200,
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
          className="w-[20vh] fade-img md:w-[50vh]"
          src="./block1/trumpmaga.webp"
        />
      </motion.div>

      <div className="absolute top-0 right-10 rotate-180">
        <motion.div
          animate={{
            y: [50, 200],
            x: [0, 0],
            transition: {
              duration: 3,
              ease: ["easeOut"],
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
        >
          <img className="w-[15vh]" src="./block1/trumpmom.webp" />
        </motion.div>
      </div>
      <MovingImg
        customClassWrapper={"absolute top-10 left-20"}
        tz={5}
        ty={1}
        tx={10}
        customClassImg={"w-[10vh] z-0 inline"}
        imgPath={"./block1/maga.webp"}
      />
      <MovingImg
        customClassWrapper={"absolute bottom-[15%] right-[40%]"}
        tz={5}
        ty={7}
        tx={3}
        customClassImg={"w-[10vh] z-0 inline"}
        imgPath={"./block1/maga.webp"}
      />
      <MovingImg
        customClassWrapper={"absolute top-[30%] right-[10%]"}
        tz={5}
        ty={3}
        tx={9}
        customClassImg={"w-[10vh] z-0 inline"}
        imgPath={"./block1/maga.webp"}
      />
      <motion.div
        className={
          "w-10/12 max-w-screen-2xl flex flex-col p-8 gap-4 rounded-lg min-h-[80vh] justify-center"
        }
      >
        <div className="flex flex-col-reverse lg:flex-row gap-4 justify-center align-middle me-0 md:me-12 lg:me-36">
          <div className="flex w-full justify-center items-center flex-col align-middle gap-4">
            <div className="w-full flex flex-col items-center md:items-end">
              <motion.div
                className="z-50 inline"
                initial={{
                  x: 200,
                }}
                whileInView={{
                  x: 0,
                }}
                transition={{
                  duration: 1,
                }}
                viewport={{ once: true }}
              >
                <p className="text-white text-5xl font-bold z-50 text-center">
                  $TRUMPY
                </p>
              </motion.div>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Lil Trump = Trump",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "Lil Trump = Trumpy",
                  3000,
                  "Lil Trump = Trumpy :3",
                ]}
                className="text-white text-2xl font-bold z-50 text-center"
                wrapper="span"
                speed={50}
                style={{ display: "inline-block" }}
              />
            </div>
            <div className="w-full flex items-center md:items-end">
              <Links />
            </div>
            <div className="flex flex-col gap-4 w-full items-center md:items-end">
              <div className="flex md:flex-row flex-col gap-4">
                <button
                  onClick={() => {
                    window.open("/drop", "_blank");
                  }}
                  type="button"
                  className="z-50 text-white bg-red-500 hover:bg-red-800 hover:text-black focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 "
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
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{
          y: 100,
        }}
        whileInView={{
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{ once: true }}
        className=" flex w-full justify-center align-middle"
      >
        <CopyCa />
      </motion.div>
    </motion.div>
  );
};
