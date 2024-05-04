import { MovingImg } from "../../common/moving-img";
import { TextMaqruee } from "../block1/block1";

export const Block2 = () => {
  return (
    <div className="min-h-screen w-full flex relative justify-center items-center">
      <TextMaqruee direction={"right"} customClass={"bottom-0 left-0"} />
      <div className="flex flex-col w-full h-full max-w-screen-2xl space-y-24 py-12">
        <div className="flex flex-col space-y-12 lg:flex-row justify-between items-center px-8">
          <MovingImg
            customClassWrapper={"relative"}
            tz={3}
            tx={-7}
            ty={15}
            customClassImg={"w-full rounded-xl h-48 img-hor"}
            imgPath={"./block2/keef.png"}
          />
          <MovingImg
            customClassWrapper={"relative"}
            tz={3}
            tx={10}
            ty={-2}
            customClassImg={"rounded-xl h-32 -rotate-12 img-hor"}
            imgPath={"./block2/keef.png"}
          />
        </div>
        <div>
          <h3 className="text-3xl lg:text-4xl px-12 lg:px-48 text-center uppercase">
            Keefchi Coin: From O'Block to the moon, Chief Keef's meme currency
            reaching new heights.
          </h3>
        </div>
        <div className="flex flex-col space-y-16 lg:flex-row justify-between items-center px-8">
          <MovingImg
            customClassWrapper={"relative"}
            tz={3}
            tx={-3}
            ty={10}
            customClassImg={"w-full rounded-xl h-64 -rotate-45"}
            imgPath={"./block2/keef.png"}
          />
          <MovingImg
            customClassWrapper={"relative"}
            tz={3}
            tx={5}
            ty={4}
            customClassImg={"w-full rounded-xl h-64 rotate-12"}
            imgPath={"./block2/keef.png"}
          />
        </div>
      </div>
    </div>
  );
};
