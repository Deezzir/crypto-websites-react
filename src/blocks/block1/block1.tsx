import Marquee from "react-fast-marquee";
import { AppearWrapper } from "../../common/appear-wrapper";
import { MovingImg } from "../../common/moving-img";

function Doroga() {
  return (
    <div className="w-full overflow-hidden absolute bottom-0 left-0">
      <Marquee
        className="relative bottom-[-5px] overflow-hidden"
        speed={15}
        autoFill
        direction={"right"}
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
    <div className="w-full overflow-hidden absolute top-0 left-0">
      <Marquee className="relative" speed={15} autoFill direction={"left"}>
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
    </div>
  );
}

export const Block1 = () => {
  return (
    <div className="min-h-screen w-full flex relative bg-[#d9e8f8]">
      <Clouds />
      <Doroga />
      <AppearWrapper
        customClass={"w-full justify-center items-center relative flex"}
      >
        <MovingImg
          customClassWrapper={"top-[30%]"}
          tz={3}
          tx={3}
          ty={20}
          customClassImg={"h-24 md:h-36"}
          imgPath={"./block1/pepe.png"}
        />
        <a
          href=""
          className=" mt-64 inline-flex text-md md:text-lg font-medium bg-green-600 md:px-8 md:py-4 px-4 py-2 rounded-lg tracking-wide text-white"
        >
          <span className="">BUY YOUR PASS TO FREEDOM</span>
        </a>
      </AppearWrapper>
    </div>
  );
};
