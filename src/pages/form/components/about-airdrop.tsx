import CountdownTimer from "./timer/countdown-timer";
import "./css/timer.css";

export const AboutAirdrop = (props: any) => {
  const { days, hours, seconds, minutes } = props;
  return (
    <div className={" flex flex-col gap-2 w-full "}>
      <h1 className="text-lg font-bold">Airdrop starts in:</h1>
      <CountdownTimer
        days={days}
        hours={hours}
        seconds={seconds}
        minutes={minutes}
      />
      <h1 className="text-lg mt-8 font-bold">
        People registered: {props.registeredUsers}/1000
      </h1>
    </div>
  );
};
