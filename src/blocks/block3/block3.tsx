import { MovingImg } from "../../common/moving-img";

export const Block3 = () => {
  return (
    <div className="min-h-screen w-full flex relative justify-center items-center">
      <div className="flex flex-col justify-center items-center w-full h-full max-w-screen-2xl space-y-24 py-12">
        <MovingImg
          customClassWrapper={"flex"}
          tz={3}
          tx={3}
          ty={20}
          customClassImg={"h-24 md:h-36"}
          imgPath={"/block3/wifus.png"}
        />
        <div className="grid mt-24 lg:mt-0 grid-cols-1 lg:grid-cols-3 gap-x-20 gap-y-12 lg:gap-y-20">
          <img
            src="/block3/image1.png"
            alt="Meme"
            className="rounded-xl object-cover w-96 h-96"
          />
          <img
            src="/block3/image2.png"
            alt="Meme"
            className="rounded-xl object-cover w-96 h-96"
          />
          <img
            src="/block3/image3.jpg"
            alt="Meme"
            className="rounded-xl object-cover w-96 h-96"
          />
          <img
            src="/block3/image4.jpg"
            alt="Meme"
            className="rounded-xl object-cover w-96 h-96"
          />
          <img
            src="/block3/image5.jpg"
            alt="Meme"
            className="rounded-xl object-cover w-96 h-96"
          />
          <img
            src="/block3/image6.jpg"
            alt="Plane"
            className="rounded-xl object-cover w-96 h-96"
          />
        </div>
      </div>
    </div>
  );
};
