import { MovingImg } from "../../common/moving-img";

export const Block10 = () => {
  return (
    <div className="min-h-screen w-full relative flex justify-center align-center overflow-y-visible overflow-x-clip">
      <MovingImg
        customClassWrapper={"absolute top-[50%] md:top-0"}
        tz={30}
        tx={1}
        ty={1}
        customClassImg={"h-20 md:h-80 scaleAnim"}
        imgPath={"./ass.png"}
      />
    </div>
  );
};
