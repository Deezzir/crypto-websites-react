import { useEffect, useState } from "react";
import { AboutAirdrop } from "./components/about-airdrop";
import { CheckElegibility } from "./components/check-elegibility";
import { SignUpUpdate } from "./components/signup-update";
import { useCountdown } from "./components/timer/useCountdownHook";
import axios from "axios";
import { sendErrorNotification } from "./utils";
import { Presale } from "./components/presale";

export const Form = () => {
  const [deadline, setDeadline] = useState(0);
  let [days, hours, minutes, seconds] = useCountdown(deadline);
  const [registeredAirdropUsers, setAirdropRegisteredUsers] = useState(0);
  const [registeredPresaleUsers, setPresaleRegisteredUsers] = useState(0);
  const [maxAirDropUsers, setMaxAirDropUsers] = useState(0);
  const [maxPresaleUsers, setMaxPresaleUsers] = useState(0);
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
        } = response.data;
        setMaxAirDropUsers(numberOfMaxAirdropUsers);
        setMaxPresaleUsers(numberOfMaxPresaleUsers);
        setAirdropRegisteredUsers(numberOfAirdropUsers);
        setPresaleRegisteredUsers(numberOfPresaleUsers);
        setDeadline(parseInt(deadline, 10));
        setToXFollow(toFollow);
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
      <div className="flex flex-col md:flex-row gap-8 p-4 justify-center items-center">
        <div className={"w-full md:w-1/2 "}>
          <CheckElegibility />
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
        <div className={"w-full md:w-1/2 "}>
          <div
            className={
              "w-full " +
              (blured || blurredPresale ? "blur-sm select-none" : "")
            }
          >
            <Presale maxPresaleUsers={maxPresaleUsers} />
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
