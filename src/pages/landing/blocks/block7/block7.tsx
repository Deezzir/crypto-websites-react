import { TextReg } from "../../../../common/text/text-reg";
import { motion } from "framer-motion";
import { BUY_LINK } from "../../../../common/urls";

export const Block7 = () => {
  const onPlay = () => {
    window.open("/game", "_blank");
  };

  const onBuy = () => {
    window.open(BUY_LINK, "_blank");
  };

  return (
    <>
      <div className="w-full min-h-screen bg-black justify-center items-center flex flex-col relative">
        <motion.div
          className={
            "w-11/12 md:w-11/12 max-w-screen-2x flex flex-col md:flex-row p-8 gap-4"
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
          <div className="w-full md:w-8/12 flex p-4 flex-col gap-4 text-white items-center justify-center">
            <div className="flex flex-col gap-16">
              <TextReg
                customClass={"text-[#00BCF8]"}
                text={
                  "Lorem ipsun ipsun ipsun ipsun ipsun ipsun ipsun ipsun ipsun ipsun"
                }
              />
              <TextReg
                customClass={"text-[#00BCF8]"}
                text={
                  "Lorem ipsun ipsun ipsun ipsun ipsun ipsun ipsun ipsun ipsun ipsun"
                }
              />
              <TextReg
                customClass={"text-[#00BCF8]"}
                text={
                  "Lorem ipsun ipsun ipsun ipsun ipsun ipsun ipsun ipsun ipsun ipsun"
                }
              />
              <TextReg
                customClass={"text-[#00BCF8]"}
                text={
                  "Lorem ipsun ipsun ipsun ipsun ipsun ipsun ipsun ipsun ipsun ipsun"
                }
              />
            </div>
          </div>
          <div className="w-full md:w-4/12 flex p-4 justify-center items-center text-white">
            <img className="md:h-[70vh]" src="./block7/card.jpg" alt="card" />
          </div>
        </motion.div>
      </div>
      <div className="w-full min-h-screen bg-black justify-center items-center flex flex-col relative">
        <motion.div
          className={
            "w-11/12 md:w-11/12 max-w-screen-2x flex flex-col md:flex-row p-8 gap-4"
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
          <div className="w-full md:w-4/12 flex p-4 justify-center items-center text-white">
            <img className="md:h-[70vh]" src="./block7/card.jpg" alt="card" />
          </div>
          <div className="w-full md:w-8/12 flex p-4 flex-col gap-4 text-white items-center justify-around">
            <div className="flex flex-col gap-16">
              <TextReg
                customClass={"text-[#00BCF8]"}
                text={
                  "Lorem ipsun ipsun ipsun ipsun ipsun ipsun ipsun ipsun ipsun ipsun"
                }
              />
              <TextReg
                customClass={"text-[#00BCF8]"}
                text={
                  "Lorem ipsun ipsun ipsun ipsun ipsun ipsun ipsun ipsun ipsun ipsun"
                }
              />
              <TextReg
                customClass={"text-[#00BCF8]"}
                text={
                  "Lorem ipsun ipsun ipsun ipsun ipsun ipsun ipsun ipsun ipsun ipsun"
                }
              />
              <TextReg
                customClass={"text-[#00BCF8]"}
                text={
                  "Lorem ipsun ipsun ipsun ipsun ipsun ipsun ipsun ipsun ipsun ipsun"
                }
              />
              <div className="flex w-full justify-center">
                <div className="flex flex-col justify-center gap-4 md:gap-16 md:flex-row">
                  <img
                    onClick={onBuy}
                    className="justify-center cursor-pointer  md:w-4/12"
                    src="./block4/buy.jpg"
                    alt="buy"
                  />
                  {/* <img
                    onClick={onPlay}
                    className="cursor-pointer md:h-20 md:w-6/12"
                    src="./block4/play.jpg"
                    alt="play"
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};
