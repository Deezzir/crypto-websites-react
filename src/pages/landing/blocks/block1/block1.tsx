import { CopyCa } from "../../../../common/copy-ca";
import { Links } from "../../../../common/links";
import { TextReg } from "../../../../common/text/text-reg";
import { motion } from "framer-motion";

export const Block1 = () => {
  const onPlay = () => {
    window.open("/game", "_blank");
  };

  return (
    <div className="w-full min-h-screen bg-[#A06767] justify-center items-center flex flex-col relative">
      <motion.div
        className={
          "w-10/12 max-w-screen-2xl bg-white flex flex-col p-8 gap-4 rounded-lg"
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
        <CopyCa />
        <Links />
        <TextReg
          customClass={"mt-4"}
          text={"Lorem ipsun lorem ipsun lorem ipsun"}
        />
        <TextReg
          text={"Lorem ipsun lorem ipsun lorem ipsun ipsun ipsun ipsun"}
        />
        <div className="flex w-full flex-col gap-4 justify-center items-center">
          <img
            className="w-10/12 md:w-5/12"
            src={"./block1/game.png"}
            alt="game"
          />
          <img
            onClick={onPlay}
            className="w-full md:w-6/12 cursor-pointer"
            src="./block1/play.png"
            alt="play"
          />
        </div>
      </motion.div>
    </div>
  );
};
