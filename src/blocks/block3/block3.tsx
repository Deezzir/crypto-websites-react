import { AppearWrapper } from "../../common/appear-wrapper";
import { MovingImg } from "../../common/moving-img";
import { HeaderText } from "../../common/text/header-text";
import { TextMaqruee } from "../block1/block1";

export const Block3 = () => {
  return (
    <AppearWrapper customClass={"relative"}>
      <TextMaqruee direction={"right"} customClass={"top-0 left-0"} />
      <div className="min-h-screen w-full flex flex-col justify-center items-center pb-[50px]">
        <HeaderText text={"El Perito moves"} />
        <div
          className="flex justify-center items-center w-full h-full px-2 md:px-24 lg:px-36 relative"
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
            className="w-full h-[70vh] z-10 rounded-xl"
            title="Dex"
            src="https://dexscreener.com/solana/B4HNBPkTHpodjfkxWg1CQhHdY12gei4uhcEBt6j4uK5Tor?embed=1&theme=dark&trades=0"
          ></iframe>
        </div>
      </div>
      <TextMaqruee direction={"left"} customClass={"bottom-0 left-0"} />
    </AppearWrapper>
  );
};
