import axios from "axios";
import { useState } from "react";
import {
  sendErrorNotification,
  sendSuccessNotification,
  sendWarningNotification,
} from "../utils";

export const SERVER = process.env.SERVER;

export const CheckElegibility = () => {
  const [wallet, setWallet] = useState("");

  const onWalletChange = (e: any) => {
    setWallet(e.target.value);
  };

  const onCheck = (e: any) => {
    e.preventDefault();

    const walletToSend = wallet.replace(/\s/g, "");
    if (wallet.length < 34 || wallet.length > 44) {
      sendErrorNotification("Wrong solana wallet");
      return;
    }

    axios
      .post(process.env.REACT_APP_SERVER + "/users/checkUserByWallet", {
        wallet: walletToSend,
      })
      .then((response) => {
        const { isTelegram, isTwitter, isTwitterPost, isWallet } =
          response.data;
        if (isTelegram && isTwitter && isTwitterPost && isWallet) {
          sendSuccessNotification("You are eligible");
        } else {
          let msg = "Please update your record. ";
          msg += !isTelegram ? "Telegram is not verified. " : "";
          msg += !isTwitter ? "Twitter is not verified. " : "";
          msg += !isTwitterPost ? "Twitter post is not verified. " : "";
          msg += !isWallet ? "You have wrong SOL wallet specified." : "";
          sendWarningNotification(msg);
        }
      })
      .catch((error) => {
        sendErrorNotification("Unhandled error:" + error);
      });
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <p className="text-lg font-bold">Check account validity</p>
      <form onSubmit={onCheck}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-black sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 mt-[20px] text-black dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <p>Wallet Solana</p>
          <input
            value={wallet}
            onChange={onWalletChange}
            type="search"
            id="default-search"
            className="pe-[100px] block w-full p-4 mb-8 ps-10 text-sm text-black border border-black rounded-lg bg-white focus:ring-green-500 focus:border-green-500"
            placeholder="G7aCnwX3TEqcsBhwLoeYxhYnzHWPpjPbnodk6cVZkw5A"
            required
          />
          <button
            onClick={onCheck}
            className="text-white absolute end-2.5 bottom-2.5 bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-600 font-medium rounded-lg text-sm px-4 py-2"
          >
            Validate
          </button>
        </div>
      </form>
    </div>
  );
};
