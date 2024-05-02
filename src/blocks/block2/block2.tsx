import { MovingImg } from "../../common/moving-img";

export const Block2 = () => {
  return (
    <div className="min-h-screen w-full flex relative justify-center items-center">
      <div className="flex flex-col w-full h-full max-w-screen-2xl space-y-24 py-12">
        <div className="flex flex-col space-y-12 lg:flex-row justify-between items-center px-8">
          <MovingImg
            customClassWrapper={"relative"}
            tz={3}
            tx={-18}
            ty={15}
            customClassImg={"w-full rounded-xl h-48 img-hor"}
            imgPath={"./pepeplane.png"}
          />
          <MovingImg
            customClassWrapper={"relative"}
            tz={3}
            tx={18}
            ty={-5}
            customClassImg={"rounded-xl h-32 -rotate-12 img-hor"}
            imgPath={"./block2/pln2.png"}
          />
        </div>
        <div>
          <h3 className="text-3xl lg:text-4xl px-12 lg:px-48 text-center">
            "Join our community flight plane – where we launch together and find
            your spot onboard!"
          </h3>
        </div>
        <div className="flex flex-col space-y-16 lg:flex-row justify-between items-center px-8">
          <MovingImg
            customClassWrapper={"relative"}
            tz={3}
            tx={-10}
            ty={10}
            customClassImg={"w-full rounded-xl h-64 -rotate-45"}
            imgPath={"./block2/pln3.png"}
          />
          <MovingImg
            customClassWrapper={"relative"}
            tz={3}
            tx={10}
            ty={10}
            customClassImg={"w-full rounded-xl h-64 rotate-12"}
            imgPath={"./block2/pln4.png"}
          />
        </div>
      </div>
    </div>
  );
};
