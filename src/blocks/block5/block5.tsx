import { AppearWrapper } from "../../common/appear-wrapper";
import { MovingImg } from "../../common/moving-img";
import { HeaderText } from "../../common/text/header-text";

export const Block5 = () => {
  return (
    <div className="min-h-screen w-full flex relative justify-center items-center">
      <div className="flex flex-col justify-center items-center w-full h-full max-w-screen-2xl py-12">
        {/* <MovingImg
          customClassWrapper={"flex"}
          tz={3}
          tx={3}
          ty={20}
          customClassImg={"h-24 md:h-36"}
          imgPath={"/block3/wifus.png"}
        /> */}
        <AppearWrapper>
          <HeaderText text={"Chiefology info"} />
          <div className="grid lg:mt-0 grid-cols-1 lg:grid-cols-3 gap-x-20 gap-y-12 lg:gap-y-20">
            <img
              src="/block3/dude.png"
              alt="Meme"
              className="rounded-xl object-cover w-96 h-96"
            />
            <img
              src="/block3/dude.png"
              alt="Meme"
              className="rounded-xl object-cover w-96 h-96"
            />
            <img
              src="/block3/dude.png"
              alt="Meme"
              className="rounded-xl object-cover w-96 h-96"
            />
            <img
              src="/block3/dude.png"
              alt="Meme"
              className="rounded-xl object-cover w-96 h-96"
            />
            <img
              src="/block3/dude.png"
              alt="Meme"
              className="rounded-xl object-cover w-96 h-96"
            />
            <img
              src="/block3/dude.png"
              alt="Plane"
              className="rounded-xl object-cover w-96 h-96"
            />
          </div>
        </AppearWrapper>
      </div>
    </div>
  );
};
