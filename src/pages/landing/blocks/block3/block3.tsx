import { TextReg } from "../../../../common/text/text-reg";
import { motion } from "framer-motion";

export const Block3 = () => {
  return (
    <div className="w-full min-h-[60vh] bg-black justify-center items-center flex flex-col relative">
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
        <div className="flex w-full md:w-3/12 flex-col gap-8 p-4 justify-center align-center items-center">
          <img className="w-12/12" src="./block3/card.jpg" alt="card" />
          <TextReg
            customClass={"text-[#00BCF8]"}
            text={"Lorem ipsun Lorem ipsun Lorem ipsun ipsun Lorem ipsun"}
          />
        </div>
        <div className="flex w-full md:w-3/12 flex-col gap-8 p-4 justify-center align-center items-center">
          <img className="w-12/12" src="./block3/card.jpg" alt="card" />
          <TextReg
            customClass={"text-[#00BCF8]"}
            text={"Lorem ipsun Lorem ipsun Lorem ipsun ipsun Lorem ipsun"}
          />
        </div>
        <div className="flex w-full md:w-3/12 flex-col gap-8 p-4 justify-center align-center items-center">
          <img className="w-12/12" src="./block3/card.jpg" alt="card" />
          <TextReg
            customClass={"text-[#00BCF8]"}
            text={"Lorem ipsun Lorem ipsun Lorem ipsun ipsun Lorem ipsun"}
          />
        </div>
        <div className="flex w-full md:w-3/12 flex-col gap-8 p-4 justify-center align-center items-center">
          <img className="w-12/12" src="./block3/card.jpg" alt="card" />
          <TextReg
            customClass={"text-[#00BCF8]"}
            text={"Lorem ipsun Lorem ipsun Lorem ipsun ipsun Lorem ipsun"}
          />
        </div>
      </motion.div>
    </div>
  );
};
