import { MovingImg } from "../../common/moving-img";

export const Block5 = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center">
      <h1 className="text-4xl lg:text-6xl font-bold text-center mb-6">
        Charting to the Moon
      </h1>
      <div
        className="flex justify-center items-center w-full h-full px-12 lg:px-36 relative"
        id="dexscreener-embed"
      >
        <MovingImg
          customClassWrapper={"absolute top-[35%] left-[35%] z-50"}
          tz={3}
          tx={3}
          ty={20}
          customClassImg={"h-36 md:h-48 rotate-[-24deg]"}
          imgPath={"/block5/candles.png"}
        />
        <iframe
          className="w-full h-[80vh] z-10 rounded-xl"
          title="Dex"
          src="https://dexscreener.com/solana/B4HNBPkTHpodjfkxWg1CQhHdYgei4uhcEBt6j4uK5Tor?embed=1&theme=dark&trades=0"
        ></iframe>
      </div>
    </div>
  );
};
