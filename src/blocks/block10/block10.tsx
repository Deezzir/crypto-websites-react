import { MovingImg } from "../../common/moving-img";

export const Block10 = () => {
  return (
    <div className="min-h-screen w-full relative flex justify-center align-center overflow-hidden">
      <MovingImg
        customClassWrapper={"absolute top-[50%]"}
        tz={30}
        tx={1}
        ty={1}
        customClassImg={"h-20 md:h-36 scaleAnim"}
        imgPath={"./ass.png"}
      />
    </div>
  );
};
