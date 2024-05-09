import CountdownTimer from "./timer/countdown-timer";

export const AboutAirdrop = (props: any) => {
  const { days, hours, seconds, minutes } = props;
  return (
    <div className="flex flex-row gap-12 w-full justify-between items-center">
      <CountdownTimer
        days={days}
        hours={hours}
        seconds={seconds}
        minutes={minutes}
      />
      <h1 className="text-2xl font-bold text-right">
        Airdrop signups: {props.registeredAirdropUsers}/{props.maxAirDropUsers}
        <br />
        Presale signups: {props.registeredPresaleUsers}/{props.maxPresaleUsers}
      </h1>
    </div>
  );
};
