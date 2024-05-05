import Marquee from "react-fast-marquee";
import { MovingImg } from "../../common/moving-img";
import { TextMaqruee } from "../block1/block1";
import { TextReg } from "../../common/text/text-reg";

const range = (start: number, stop: number, step = 1) =>
  Array(Math.ceil((stop - start) / step))
    .fill(start)
    .map((x, y) => x + y * step);

const ImageMarquee = () => {
  return (
    <div className="w-full h-full flex gap-12 flex-col">
      <Marquee
        className="relative height-[45%] overflow-hidden"
        speed={25}
        autoFill
        direction={"left"}
      >
        <div className="flex gap-8 flex-row h-auto">
          {[...Array(40)].map((_, index) => (
            <img
              key={index}
              src={`./block2/papa/papa${index + 1}-(Compressify.io).webp`}
              alt={`img${index}`}
              className="h-[26vh] w-[26vh] select-none object-contain"
            />
          ))}
        </div>
      </Marquee>
      <Marquee
        className="relative height-[450%] overflow-hidden"
        speed={45}
        autoFill
        direction={"right"}
      >
        <div className="flex mr-12 gap-8 flex-row h-auto">
          {range(40, 80, 1).map((num, index) => (
            <img
              key={num}
              src={`./block2/papa/papa${num + 1}-(Compressify.io).webp`}
              alt={`img${index}`}
              className="h-[26vh] w-[26vh] select-none object-contain"
            />
          ))}
        </div>
      </Marquee>
      <Marquee
        className="relative height-[45%] overflow-hidden"
        speed={35}
        autoFill
        direction={"left"}
      >
        <div className="flex mr-12 gap-8 flex-row h-auto">
          {range(80, 120, 1).map((num, index) => (
            <img
              key={num}
              src={`./block2/papa/papa${num + 1}-(Compressify.io).webp`}
              alt={`img${num}`}
              className="h-[26vh] w-[26vh] select-none object-contain"
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export const Block2 = () => {
  return (
    <div className="min-h-screen w-full flex relative justify-center items-center content-center">
      <div className="block-2-card p-16 rounded-xl md:my-0 my-8 flex flex-col gap-8 mx-4 md:w-6/12 w-full h-full max-w-screen-2xl">
        <TextReg customClass={"text-4xl text-white"} text={"Bla Bla Bla Bla"} />
        <TextReg
          customClass={"text-white"}
          text={
            "Lorem ipsun ipsun ipsun ipsun ipsun ipsun ipsun ipsun ipsun ipsun  ipsun ipsun ipsun ipsun ipsun ipsun ipsun ipsun ipsun ipsun  ipsun ipsun ipsun ipsun ipsun ipsun ipsun ipsun ipsun ipsun"
          }
        />
        <div className="w-full flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/3 flex justify-center">
            <img className="w-80" src="./block2/dog.png" />
          </div>
          <div className="w-full md:w-2/3 px-16 flex justify-center align-center items-center">
            <audio controls className="w-full">
              <source src="horse.ogg" type="audio/ogg" />
              <source src="horse.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </div>
      <div className="top-0 absolute left-0 w-full min-h-screen flex justify-center align-center content-center items-center">
        <ImageMarquee />
      </div>
    </div>
  );
};
