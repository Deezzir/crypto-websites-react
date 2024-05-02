import { MovingImg } from "../../common/moving-img";

export const Block3 = () => {
  return (
    <div className="min-h-screen w-full flex relative justify-center items-center">
      <div className="flex flex-col justify-center items-center w-full h-full max-w-screen-2xl space-y-24 py-12">
        <MovingImg
          customClassWrapper={"flex top-[5%]"}
          tz={3}
          tx={3}
          ty={20}
          customClassImg={"h-24 md:h-36"}
          imgPath={"./pepeplane.png"}
        />
        <div className="grid grid-cols-3 gap-x-20 gap-y-20">
          <img
            src="/block3/placeholder.png"
            alt="Plane"
            className="rounded-xl"
          />
          <img
            src="/block3/placeholder.png"
            alt="Plane"
            className="rounded-xl"
          />
          <img
            src="/block3/placeholder.png"
            alt="Plane"
            className="rounded-xl"
          />
          <img
            src="/block3/placeholder.png"
            alt="Plane"
            className="rounded-xl"
          />
          <img
            src="/block3/placeholder.png"
            alt="Plane"
            className="rounded-xl"
          />
          <img
            src="/block3/placeholder.png"
            alt="Plane"
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};
