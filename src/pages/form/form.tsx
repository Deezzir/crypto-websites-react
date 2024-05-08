import { useEffect, useState } from "react";
import { AboutAirdrop } from "./components/about-airdrop";
import { CheckElegibility } from "./components/check-elegibility";
import { SignUpUpdate } from "./components/signup-update";
import { useCountdown } from "./components/timer/useCountdownHook";
import axios from "axios";
import { sendErrorNotification } from "./utils";

export const Form = () => {
  const deadlineTime = Number(process.env.REACT_APP_DEADLINE);
  const [days, hours, minutes, seconds] = useCountdown(deadlineTime);
  const [registeredUsers, setRegisteredUsers] = useState(0);

  const blured =
    days + hours + minutes + seconds <= 0 || registeredUsers >= 1000;
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_SERVER + "/users/getUsersRegistered")
      .then((response) => {
        const { numberOfUsers } = response.data;
        setRegisteredUsers(numberOfUsers);
      })
      .catch((error) => {
        sendErrorNotification(
          "Cannot get number of registered users. Contact dev please." + error
        );
      });
  }, []);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col md:flex-row gap-8 p-4 justify-center items-center">
        <div className={"w-full md:w-1/2 "}>
          <CheckElegibility />
          <div className={"w-full " + (blured ? "blur-sm select-none" : "")}>
            <SignUpUpdate blured={blured} />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <AboutAirdrop
            registeredUsers={registeredUsers}
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
          />
        </div>
      </div>
      <div className="w-full">
        <p className="text-center">
          The airdrop is going to be performed shortly after the count down is
          done. Please be patiente, it takes us time to perform transactions! We
          appreciate your enrollment. The 50% (except balance to burn) of dev
          balance will be distributed among 1000 people equaly.
        </p>
      </div>
    </div>
  );
};
