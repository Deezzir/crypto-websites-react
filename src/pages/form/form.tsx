import { useEffect, useState } from "react";
import { AboutAirdrop } from "./components/about-airdrop";
import { CheckElegibility } from "./components/check-elegibility";
import { SignUpUpdate } from "./components/signup-update";
import { useCountdown } from "../../hooks/useCountdownHook";
import axios from "axios";
import { sendErrorNotification } from "./utils";
import { Presale } from "./components/presale";

export const Form = () => {
  const [deadline, setDeadline] = useState(0);
  let [days, hours, minutes, seconds] = useCountdown(deadline);
  const [registeredAirdropUsers, setAirdropRegisteredUsers] = useState(0);
  const [registeredPresaleUsers, setPresaleRegisteredUsers] = useState(0);
  const [maxSolAmount, setMaxSolAmount] = useState(5.0);
  const [minSolAmount, setMinSolAmount] = useState(0.1);
  const [maxAirDropUsers, setMaxAirDropUsers] = useState(1000);
  const [maxPresaleUsers, setMaxPresaleUsers] = useState(500);
  const [toXFollow, setToXFollow] = useState("");

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
          toFollow,
          presaleMaxSolAmount,
          presaleMinSolAmount,
        } = response.data;
        setMaxAirDropUsers(numberOfMaxAirdropUsers);
        setMaxPresaleUsers(numberOfMaxPresaleUsers);
        setAirdropRegisteredUsers(numberOfAirdropUsers);
        setPresaleRegisteredUsers(numberOfPresaleUsers);
        setDeadline(parseInt(deadline, 10));
        setToXFollow(toFollow);
        setMaxSolAmount(presaleMaxSolAmount);
        setMinSolAmount(presaleMinSolAmount);
      })
      .catch((error) => {
        sendErrorNotification(
          "Cannot get Drop Information. Contact dev please." + error
        );
      });
  }, []);

  const blured = days + hours + minutes + seconds <= 0;
  const blurredAirdrop = registeredAirdropUsers >= maxAirDropUsers;
  const blurredPresale = registeredPresaleUsers >= maxPresaleUsers;

  return (
    <div className="flex flex-col gap-8 pb-12">
      <div className="w-full justify-self-center self-center">
        <AboutAirdrop
          registeredAirdropUsers={registeredAirdropUsers}
          registeredPresaleUsers={registeredPresaleUsers}
          maxAirDropUsers={maxAirDropUsers}
          maxPresaleUsers={maxPresaleUsers}
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
        <div className="w-full md:w-[46%]">
          <div
            className={
              "w-full " +
              (blured || blurredAirdrop ? "blur-sm select-none" : "")
            }
          >
            <SignUpUpdate
              blured={blured}
              maxAirDropUsers={maxAirDropUsers}
              toFollow={toXFollow}
            />
          </div>
        </div>
        <div className="w-full md:w-[8%] flex justify-self-center self-center justify-center items-center">
          <h1 className="text-3xl text-center font-bold uppercase">OR</h1>
        </div>
        <div className="w-full md:w-[46%]">
          <div
            className={
              "w-full " +
              (blured || blurredPresale ? "blur-sm select-none" : "")
            }
          >
            <Presale
              maxPresaleUsers={maxPresaleUsers}
              maxSolAmount={maxSolAmount}
              minSolAmount={minSolAmount}
            />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <p className="text-3xl font-bold text-center">
          The Airdrops are going to be performed shortly after the Raydium
          launch. Please be patiente, it takes time to perform transactions.
          Thanks for the enrollment.
        </p>
      </div>
    </div>
  );
};
