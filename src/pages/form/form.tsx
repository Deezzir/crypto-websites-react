import { useEffect, useState } from "react";
import { AboutDrop } from "./components/about-drop/about-drop";
import { CheckElegibility } from "./components/check-elegibility";
import { SignUpUpdate } from "./components/airdrop/signup-update";
import { useCountdown } from "../../hooks/useCountdownHook";
import axios from "axios";
import { sendErrorNotification, DropInfo } from "./utils";
import { FooterSection } from "../../common/footer";
import { MovingImg } from "../../common/moving-img";

export const Form = () => {
  const [dropInfo, setDropInfo] = useState<DropInfo>({
    numberOfMaxAirdropUsers: 75,
    numberOfMaxPresaleUsers: 500,
    numberOfAirdropUsers: 0,
    numberOfPresaleUsers: 0,
    deadline: 0,
    toXFollow: "",
    toTGFollow: "",
    presaleMaxSolAmount: 5.0,
    presaleMinSolAmount: 0.1,
    presaleSolAmount: 0,
    presaleTokenAmount: 10,
    airdropTokenAmount: 10,
    tokenTicker: "SOL",
    dropPublicKey: "",
  });

  let [days, hours, minutes, seconds] = useCountdown(dropInfo.deadline);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_SERVER + "/drop/getDropInfo")
      .then((response) => {
        setDropInfo(response.data as DropInfo);
      })
      .catch((error) => {
        sendErrorNotification(
          "Couldn't load Drop Information. Contact dev please."
        );
      });
  }, []);

  const blured = days + hours + minutes + seconds <= 0;
  const blurredAirdrop =
    dropInfo.numberOfAirdropUsers >= dropInfo.numberOfMaxAirdropUsers;

  return (
    <>
      <div className="flex flex-col gap-3 py-12 px-2 md:px-20 relative">
        <MovingImg
          customClassWrapper={"absolute top-10 left-20"}
          tz={5}
          ty={5}
          tx={2}
          customClassImg={"w-[10vh] z-0 inline"}
          imgPath={"./block1/airdrop.webp"}
        />
        <MovingImg
          customClassWrapper={"absolute top-[20%] left-20"}
          tz={5}
          ty={6}
          tx={15}
          customClassImg={"w-[10vh] z-0 inline"}
          imgPath={"./block1/airdrop.webp"}
        />
        <MovingImg
          customClassWrapper={"absolute top-[63%] left-10"}
          tz={5}
          ty={5}
          tx={5}
          customClassImg={"w-[10vh] z-0 inline"}
          imgPath={"./block1/airdrop.webp"}
        />
        <MovingImg
          customClassWrapper={"absolute top-[80%] left-30"}
          tz={1}
          ty={4}
          tx={3}
          customClassImg={"w-[10vh] z-0 inline"}
          imgPath={"./block1/airdrop.webp"}
        />

        <MovingImg
          customClassWrapper={"absolute top-10 right-20"}
          tz={1}
          ty={1}
          tx={14}
          customClassImg={"w-[10vh] z-0 inline img-hor"}
          imgPath={"./block1/airdrop.webp"}
        />
        <MovingImg
          customClassWrapper={"absolute top-[35%] right-20"}
          tz={5}
          ty={5}
          tx={1}
          customClassImg={"w-[10vh] z-0 inline  img-hor"}
          imgPath={"./block1/airdrop.webp"}
        />
        <MovingImg
          customClassWrapper={"absolute top-[50%] right-48 img-hor"}
          tz={5}
          ty={10}
          tx={7}
          customClassImg={"w-[10vh] z-0 inline img-hor"}
          imgPath={"./block1/airdrop.webp"}
        />

        <MovingImg
          customClassWrapper={"absolute bottom-10 right-28 img-hor"}
          tz={5}
          ty={5}
          tx={10}
          customClassImg={"w-[10vh] z-0 inline img-hor"}
          imgPath={"./block1/airdrop.webp"}
        />
        <div className="w-full lg:w-1/2 justify-self-center self-center z-50">
          <AboutDrop
            dropInfo={dropInfo}
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
          />
          <CheckElegibility />
        </div>
        <div className="flex flex-col md:flex-row gap-8 p-4 justify-center items-center">
          <div className="w-full md:w-[46%] relative">
            {blurredAirdrop && (
              <h3 className="text-4xl font-bold text-center z-50 absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2">
                Airdrop enrollment is done
              </h3>
            )}
            <div
              className={
                "w-full " +
                (blured || blurredAirdrop
                  ? "blur-sm select-none pointer-events-none"
                  : "")
              }
            >
              <SignUpUpdate dropInfo={dropInfo} />
            </div>
          </div>
          {/* <div className="w-full md:w-[8%] flex justify-self-center self-center justify-center items-center">
            <h1 className="text-3xl text-center font-bold uppercase">OR</h1>
          </div> */}
          {/* <div className="w-full md:w-[46%] relative">
            {blurredPresale && (
              <h3 className="text-4xl font-bold text-center z-50 absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 ">
                Presale enrollment is done
              </h3>
            )}
            <div
              className={
                "w-full " +
                (blured || blurredPresale
                  ? "blur-sm select-none pointer-events-none"
                  : "")
              }
            >
              <Presale dropInfo={dropInfo} />
            </div>
          </div> */}
        </div>
        <div className="w-full md:w-[40%] p-4 justify-self-center self-center"></div>
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="p-4 text-xl md:text-3xl font-bold text-center">
            The Drops are going to be performed shortly after the Raydium
            launch. Please be patient, it takes time to perform transactions.
            Thanks for the enrollment.
          </h1>
        </div>
      </div>
      <FooterSection />
    </>
  );
};

export default Form;
