import Marquee from "react-fast-marquee";
import { AppearWrapper } from "../../common/appear-wrapper";
import { MovingImg } from "../../common/moving-img";
import { Links } from "../../common/links";
import { BUY_LINK } from "../../urls";
import { CopyCa } from "../../common/copy-ca";
import { TextReg } from "../../common/text/text-reg";

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
            src={"./block1/city.webp"}
            alt="Doroga"
            className="w-auto h-96 select-none object-contain"
          />
        </div>
      </Marquee>
    </div>
  );
}

function Clouds() {
  return (
    <div className="w-full overflow-hidden absolute top-0 left-0 flex justify-center items-center flex-col">
      <Marquee className="relative mt-4" speed={50} autoFill direction={"left"}>
        <div className="flex flew-row mr-2 gap-24">
          <TextReg text={"GANG GANG GANG GANG GANG GANG GANG"} />
          {/* {[...Array(10)].map((_, index) => (
            <img
              key={index}
              src={`./block1/clouds/cl${index + 1}.webp`}
              alt={`img${index}`}
              className="h-12 md:h-16 w-auto select-none object-contain"
            />
          ))} */}
        </div>
      </Marquee>
      <AppearWrapper
        customClass={"flex w-full justify-center align-center items-center"}
      ></AppearWrapper>
    </div>
  );
}

export const Block1 = () => {
  return (
    <div className="min-h-screen w-full bg-[#d9e8f8]1 flex relative justify-center blurred-border-bottom">
      <Clouds />
      {/* <Doroga /> */}
      <AppearWrapper
        customClass={
          "w-full items-center content-between relative flex max-w-screen-2xl z-30"
        }
      >
        <Links customClass={"mt-16 md:my-16"} />
        <TextReg
          text={
            "It is here to show the lorem ipsun to the world and whater bla bla bla"
          }
        />
        {/* <MovingImg
          customClassWrapper={"absolute top-[40%] md:top-[30%]"}
          tz={3}
          tx={3}
          ty={20}
          customClassImg={"h-20 md:h-36"}
          imgPath={"./pepeplane.png"}
        /> */}
        <a
          href={BUY_LINK}
          className="z-50 w-fit mt-auto mb-36 md:mb-36 inline-flex text-md md:text-lg font-medium bg-black md:px-8 md:py-4 px-4 py-2 rounded-lg tracking-wide text-white"
        >
          <span className="">GANG BUY</span>
        </a>
        <CopyCa />
      </AppearWrapper>
    </div>
  );
};
