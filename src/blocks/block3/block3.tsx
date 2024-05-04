import { AppearWrapper } from "../../common/appear-wrapper";
import { MovingImg } from "../../common/moving-img";
import { HeaderText } from "../../common/text/header-text";

export const Block3 = () => {
  return (
    <AppearWrapper>
      <div className="min-h-screen w-full flex flex-col justify-center items-center">
        <HeaderText text={"Charting to the Moon"} />
        <div
          className="flex justify-center items-center w-full h-full px-12 lg:px-36 relative"
          id="dexscreener-embed"
        >
          {/* <MovingImg
            customClassWrapper={"absolute top-[35%] left-[35%] z-50"}
            tz={3}
            tx={3}
            ty={20}
            customClassImg={"h-36 md:h-48 rotate-[-24deg]"}
            imgPath={"/block5/candles.png"}
          /> */}
          <iframe
            className="w-full h-[80vh] z-10 rounded-xl"
            title="Dex"
            src="https://dexscreener.com/solana/B4HNBPkTHpodjfkxWg1CQhHdYgei4uhcEBt6j4uK5Tor?embed=1&theme=dark&trades=0"
          ></iframe>
        </div>
      </div>
    </AppearWrapper>
  );
};
