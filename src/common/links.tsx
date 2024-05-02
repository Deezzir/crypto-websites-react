import {
  DEXSCREENER,
  DEXTOOLS,
  JUPITER,
  RAYDIUM,
  TELEGRAM,
  TWITTER,
} from "../urls";
import { DexscreenerIcon } from "./icons/dexscreener-icon";
import { DextoolsIcon } from "./icons/dextools-icon";
import { JupiterIcon } from "./icons/jupiter-icon";
import { RaydiumIcon } from "./icons/raydium-icon";
import { TgIcon } from "./icons/tg-icon";
import { XIcon } from "./icons/x-icon";

const buttonClass =
  " select-none orange-link font-bold cursor-pointer rounded-full flex flex-row content-center items-center transform transition duration-500 hover:scale-105";

const iconClass = "w-12 h-12 fill-[#111827]";

const Checker = (props: any) => {
  return <>{props.val.length !== 0 && props.children}</>;
};

export const Links = (props: any) => {
  return (
    <div
      className={
        "w-full z-50 flex justify-center gap-10 gap-y-4 lg:gap-24 flex-row flex-wrap max-w-screen-2xl " +
        props.customClass
      }
    >
      <Checker val={TWITTER}>
        <a target="_blank" href={TWITTER} className={buttonClass}>
          <XIcon iconClass={iconClass} />
        </a>
      </Checker>
      <Checker val={TELEGRAM}>
        <a target="_blank" href={TELEGRAM} className={buttonClass}>
          <TgIcon iconClass={iconClass} />
        </a>
      </Checker>
      <Checker val={RAYDIUM}>
        <a target="_blank" href={RAYDIUM} className={buttonClass}>
          <RaydiumIcon iconClass={iconClass} />
        </a>
      </Checker>
      <Checker val={JUPITER} r>
        <a target="_blank" href={JUPITER} className={buttonClass}>
          <JupiterIcon iconClass={iconClass} />
        </a>
      </Checker>
      <Checker val={DEXSCREENER}>
        <a target="_blank" href={DEXSCREENER} className={buttonClass}>
          <DexscreenerIcon iconClass={iconClass} />
        </a>
      </Checker>
      <Checker val={DEXTOOLS}>
        <a target="_blank" href={DEXTOOLS} className={buttonClass}>
          <DextoolsIcon iconClass={iconClass} />
        </a>
      </Checker>
    </div>
  );
};
