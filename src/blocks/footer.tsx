import { TgIcon } from "../common/icons/tg-icon";
import { XIcon } from "../common/icons/x-icon";
import { TELEGRAM_DEV, TWITTER_DEV } from "../urls";

const iconClass = "w-6 h-6 fill-[#0b1d21]";

export const FooterSection = () => {
  return (
    <footer className="py-2 text-center text-white backdrop-blur transition-colors duration-500">
      <p className="flex flex-row items-center justify-center gap-2">
        <span className="text-sm font-bold sm:text-xl text-[#0b1d21]">
          $PERITO &copy; 2024
        </span>
        <span className="inline-flex">
          <a
            href={TWITTER_DEV}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-[2px] rounded p-2 font-bold fill-[#0b1d21]"
          >
            <XIcon iconClass={iconClass} />
          </a>
          <a
            href={TELEGRAM_DEV}
            rel="noopener noreferrer"
            target="_blank"
            className="mx-[2px] rounded p-2 font-bold"
          >
            <TgIcon iconClass={iconClass} />
          </a>
        </span>
      </p>
      <p className="px-2 pb-4 text-sm text-[#0b1d21]">
        $PERITO is a memecoin with no intrinsic value, and is not a investment
        and simply a community/culture token similar to $PERITO. No Promises, No
        Utility, Purely For Entertainment Purposes
      </p>
    </footer>
  );
};
