import { useEffect, useState } from "react";
import { AboutDrop } from "./components/about-drop/about-drop";
import { CheckElegibility } from "./components/check-elegibility";
import { SignUpUpdate } from "./components/signup-update";
import { useCountdown } from "../../hooks/useCountdownHook";
import axios from "axios";
import { sendErrorNotification } from "./utils";
import { Presale } from "./components/presale/presale";

export const Form = () => {
  const [deadline, setDeadline] = useState(0);
  let [days, hours, minutes, seconds] = useCountdown(deadline);
  const [registeredAirdropUsers, setAirdropRegisteredUsers] = useState(0);
  const [registeredPresaleUsers, setPresaleRegisteredUsers] = useState(0);
  const [maxSolAmount, setMaxSolAmount] = useState(5.0);
  const [minSolAmount, setMinSolAmount] = useState(0.1);
  const [presaleSolAmount, setPresaleSolAmount] = useState(0.0);
  const [maxAirDropUsers, setMaxAirDropUsers] = useState(1000);
  const [maxPresaleUsers, setMaxPresaleUsers] = useState(500);
  const [toXFollow, setToXFollow] = useState("");
  const [toTGFollow, setToTGFollow] = useState("");
  const [dropPubkey, setDropPubkey] = useState("");

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_SERVER + "/users/getDropInfo")
      .then((response) => {
        const {
          numberOfMaxAirdropUsers,
          numberOfMaxPresaleUsers,
          numberOfAirdropUsers,
          numberOfPresaleUsers,
          deadline,
          toXFollow,
          toTGFollow,
          presaleMaxSolAmount,
          presaleMinSolAmount,
          presaleSolAmount,
          dropPublicKey,
        } = response.data;
        setMaxAirDropUsers(numberOfMaxAirdropUsers);
        setMaxPresaleUsers(numberOfMaxPresaleUsers);
        setAirdropRegisteredUsers(numberOfAirdropUsers);
        setPresaleRegisteredUsers(numberOfPresaleUsers);
        setDeadline(parseInt(deadline, 10));
        setToXFollow(toXFollow);
        setToTGFollow(toTGFollow);
        setPresaleSolAmount(presaleSolAmount);
        setMaxSolAmount(presaleMaxSolAmount);
        setMinSolAmount(presaleMinSolAmount);
        setDropPubkey(dropPublicKey);
      })
      .catch((error) => {
        sendErrorNotification(
          "Couldn't load Drop Information. Contact dev please."
        );
      });
  }, []);

  const blured = days + hours + minutes + seconds <= 0;
  const blurredAirdrop = registeredAirdropUsers >= maxAirDropUsers;
  const blurredPresale = registeredPresaleUsers >= maxPresaleUsers;

  return (
    <div className="flex flex-col gap-8 pb-12">
      <div className="w-full justify-self-center self-center">
        <AboutDrop
          registeredAirdropUsers={registeredAirdropUsers}
          registeredPresaleUsers={registeredPresaleUsers}
          maxAirDropUsers={maxAirDropUsers}
          maxPresaleUsers={maxPresaleUsers}
          presaleSolAmount={presaleSolAmount}
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
      </div>
      <div className="w-[40%] justify-self-center self-center">
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
            <SignUpUpdate
              blured={blured}
              maxAirDropUsers={maxAirDropUsers}
              toXFollow={toXFollow}
              toTGFollow={toTGFollow}
            />
          </div>
        </div>
        <div className="w-full md:w-[8%] flex justify-self-center self-center justify-center items-center">
          <h1 className="text-3xl text-center font-bold uppercase">OR</h1>
        </div>
        <div className="w-full md:w-[46%] relative">
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
            <Presale
              maxPresaleUsers={maxPresaleUsers}
              maxSolAmount={maxSolAmount}
              minSolAmount={minSolAmount}
              dropPubkey={dropPubkey}
            />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-center">
          The Drops are going to be performed shortly after the Raydium launch.
          Please be patiente, it takes time to perform transactions. Thanks for
          the enrollment.
        </h1>
      </div>
    </div>
  );
};
