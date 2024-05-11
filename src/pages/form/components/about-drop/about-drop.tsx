import CountdownTimer from "./timer/countdown-timer";

export const AboutDrop = (props: any) => {
  const { days, hours, seconds, minutes } = props;
  return (
    <div className="flex flex-row gap-12 w-full justify-between items-center">
      <CountdownTimer
        days={days}
        hours={hours}
        seconds={seconds}
        minutes={minutes}
      />
      <div className="flex flex-col">
        <h1 className="text-xl font-bold text-right">
          Airdrop signups: {props.registeredAirdropUsers}/
          {props.maxAirDropUsers}
        </h1>
        <h1 className="text-xl font-bold text-right">
          Presale signups: {props.registeredPresaleUsers}/
          {props.maxPresaleUsers}
        </h1>
        <h1 className="text-xl font-bold text-right">
          Presale SOL: {props.presaleSolAmount.toFixed(1)}
        </h1>
      </div>
    </div>
  );
};
