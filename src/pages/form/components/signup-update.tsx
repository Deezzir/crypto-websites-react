import { PublicKey } from "@solana/web3.js";
import axios from "axios";
import { useState } from "react";
import {
  sendErrorNotification,
  sendSuccessNotification,
  sendWarningNotification,
} from "../utils";

export const SignUpUpdate = (props: any) => {
  const [twitter, setTwitter] = useState("");
  const [twitterLink, setTwitterLink] = useState("");
  const [telegram, setTelegram] = useState("");
  const [wallet, setWallet] = useState("");

  const clearForm = () => {
    setTwitter("");
    setTwitterLink("");
    setTelegram("");
    setWallet("");
  };

  const onTwitterChange = (e: any) => {
    setTwitter(e.target.value);
  };
  const onTwitterLinkChange = (e: any) => {
    setTwitterLink(e.target.value);
  };

  const onTelegramChange = (e: any) => {
    setTelegram(e.target.value);
  };

  const onWalletChange = (e: any) => {
    setWallet(e.target.value);
  };

  const onSignUpUpdate = (e: any) => {
    e.preventDefault();
    const walletToSend = wallet.replace(/\s/g, "");
    let validWallet = true;
    try {
      new PublicKey(wallet);
    } catch (e) {
      validWallet = false;
    }
    if (wallet.length < 34 || wallet.length > 44 || !validWallet) {
      sendErrorNotification("Wrong solana wallet");
      return;
    }

    const twitterToSend = twitter.replace(/\s/g, "").replace("@", "");
    if (!/^@?[0-9a-zA-Z_]{1,15}$/.test(twitterToSend)) {
      sendErrorNotification("Wront twitter account profile");
      return;
    }

    const twitterLinkToSend = twitterLink.replace(/\s/g, "");
    if (
      !/^(https?:\/\/)?(www\.)?(twitter\.com|x\.com)\/[a-zA-Z0-9_]{1,15}\/status\/[0-9]+$/.test(
        twitterLinkToSend
      )
    ) {
      sendErrorNotification("Wront twitter link");
      return;
    }

    const telegramToSend = telegram.replace(/\s/g, "").replace("@", "");
    if (!/^@?[0-9a-zA-Z_]{5,32}$/.test(telegramToSend)) {
      sendErrorNotification("Wront telegram account");
      return;
    }

    axios
      .post(process.env.REACT_APP_SERVER + "/users/addUpdateUser", {
        user: {
          wallet: walletToSend,
          twitter: twitterToSend,
          twitterLink: twitterLinkToSend,
          telegram: telegramToSend,
        },
      })
      .then((response) => {
        if (response.data.errorMsg) {
          sendWarningNotification(response.data.errorMsg);
          return;
        }
        if (response.data.isCreated) {
          sendSuccessNotification("You signed!");
        } else if (response.data.isUpdated) {
          sendSuccessNotification("Record updated!");
        } else {
          sendErrorNotification("Unhandled sh*t happened. Let dev know!");
        }
      })
      .catch((error) => {
        sendErrorNotification("Unhandled error:" + error);
      })
      .finally(() => {
        clearForm();
      });
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <p className="text-lg font-bold">Sign up for airdrop / update record</p>
      <form className="">
        <div className="relative">
          <p>Twitter @</p>
          <input
            value={twitter}
            onChange={onTwitterChange}
            type="search"
            id="default-search"
            className="block w-full p-4 text-sm text-black border border-black rounded-lg bg-white focus:ring-green-500 focus:border-green-500"
            placeholder="jeet_x_twitter"
            required
          />
          <p className="mb-4 text-xs text-slate-400">
            You should follow our account @{props.toFollow}
          </p>
        </div>
        <div className="relative">
          <p>Twitter Post link</p>
          <input
            value={twitterLink}
            onChange={onTwitterLinkChange}
            type="search"
            id="default-search"
            className="block w-full p-4 text-sm text-black border border-black rounded-lg bg-white focus:ring-green-500 focus:border-green-500"
            placeholder="https://twitter.com/username/status/1234454265263"
            required
          />
          <p className="mb-4 text-xs text-slate-400">
            Your post should include tag to our account @{props.toFollow}
          </p>
        </div>

        <div className="relative">
          <p>Telegram @</p>
          <input
            value={telegram}
            onChange={onTelegramChange}
            type="search"
            id="default-search"
            className="block w-full p-4 text-sm text-black border border-black rounded-lg bg-white focus:ring-green-500 focus:border-green-500"
            placeholder="jeet_tg"
            required
          />
          <p className="mb-4 text-xs text-slate-400">
            You need to send at least one message in our chat to confirm your
            Telegram account.
          </p>
        </div>
        <div className="relative">
          <p>Solana Wallet</p>
          <input
            value={wallet}
            onChange={onWalletChange}
            type="search"
            id="default-search"
            className="block w-full p-4 mb-4 text-sm text-black border border-black rounded-lg bg-white focus:ring-green-500 focus:border-green-500"
            placeholder="G7aCnwX3TEqcsBhwLoeYxhYnzHWPpjPbnodk6cVZkw5A"
            required
          />
        </div>
        <div className="w-full">
          <button
            onClick={onSignUpUpdate}
            type="submit"
            className="text-white w-full bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-600 font-medium rounded-lg text-sm px-6 py-4"
          >
            Sign up / Update record
          </button>
        </div>
        <p className="text-center mt-4">
          The <span className="font-bold">50 million tokens</span> will be
          distributed among {props.maxAirDropUsers} people equaly.
        </p>
      </form>
    </div>
  );
};
