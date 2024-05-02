import Marquee from "react-fast-marquee";
import { AppearWrapper } from "../../common/appear-wrapper";
import { MovingImg } from "../../common/moving-img";
import { TextReg } from "../../common/text-reg";
import { Links } from "../../common/links";

function Doroga() {
  return (
    <div className="w-full overflow-hidden absolute bottom-0 left-0">
      <Marquee
        className="relative bottom-[-5px] overflow-hidden"
        speed={25}
        autoFill
        direction={"left"}
      >
        <div className="flex flex-row h-auto">
          <img
            src={"./block1/doroga.webp"}
            alt="Doroga"
            className="w-auto h-24 md:h-36 select-none object-contain"
            fetchPriority="high"
          />
        </div>
      </Marquee>
    </div>
  );
}

function Clouds() {
  return (
    <div className="w-full overflow-hidden absolute top-0 left-0 flex justify-center items-center flex-col">
      <Marquee className="relative" speed={25} autoFill direction={"left"}>
        <div className="flex flew-row mr-12 gap-24">
          {[...Array(10)].map((_, index) => (
            <img
              key={index}
              src={`./block1/clouds/cl${index + 1}.webp`}
              alt={`Image ${index}`}
              className="h-16 w-auto select-none object-contain"
            />
          ))}
        </div>
      </Marquee>
      <Links customClass={"mt-8 md:mt-12"} />
      <TextReg
        customClass={"mt-8 md:mt-16"}
        text={"Lorem ipsun orem ipsun orem ipsun orem ipsun"}
      />
    </div>
  );
}

export const Block1 = () => {
  return (
    <div className="min-h-screen w-full flex relative bg-[#d9e8f8]">
      <Clouds />
      <Doroga />
      <AppearWrapper
        customClass={"w-full  items-center content-between relative flex"}
      >
        <MovingImg
          customClassWrapper={"top-[40%] md:top-[30%]"}
          tz={3}
          tx={3}
          ty={20}
          customClassImg={"h-24 md:h-36"}
          imgPath={"./pepeplane.png"}
        />
        <a
          href=""
          className=" mt-auto mb-36 md:mb-64 inline-flex text-md md:text-lg font-medium bg-green-600 md:px-8 md:py-4 px-4 py-2 rounded-lg tracking-wide text-white"
        >
          <span className="">BUY YOUR PASS TO FREEDOM</span>
        </a>
      </AppearWrapper>
    </div>
  );
};
