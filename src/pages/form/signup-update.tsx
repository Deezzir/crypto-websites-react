import axios from "axios";
import { useState } from "react";
import { SERVER } from "./check-elegibility";
import { Bounce, toast } from "react-toastify";

export const SignUpUpdate = () => {
  const [twitter, setTwitter] = useState("");
  const [twitterLink, setTwitterLink] = useState("");
  const [telegram, setTelegram] = useState("");
  const [wallet, setWallet] = useState("");

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
    if (wallet.length < 34 || wallet.length > 44) {
      toast.error("Wrong solana wallet", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      return;
    }

    const twitterToSend = twitter.replace(/\s/g, "").replace("@", "");
    if (!/^@?[0-9a-zA-Z_]{1,15}$/.test(twitterToSend)) {
      toast.error("Wront twitter account profile", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      return;
    }

    const twitterLinkToSend = twitterLink.replace(/\s/g, "");
    if (
      !/^(https?:\/\/)?(www\.)?(twitter\.com|x\.com)\/[a-zA-Z0-9_]{1,15}\/status\/[0-9]+$/.test(
        twitterLinkToSend
      )
    ) {
      toast.error("Wront twitter link", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      return;
    }

    const telegramToSend = telegram.replace(/\s/g, "").replace("@", "");
    if (!/^@?[0-9a-zA-Z_]{5,32}$/.test(twitterLinkToSend)) {
      toast.error("Wront telegram account", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      return;
    }

    axios
      .post("http://localhost:4000/users/addUpdateUser", {
        user: {
          wallet: walletToSend,
          twitter: twitterToSend,
          twitterLink: twitterLinkToSend,
          telegram: telegramToSend,
        },
      })
      .then((response) => {
        if (response.data.isCreated) {
          toast.success("You signed!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
        } else if (response.data.isUpdated) {
          toast.warning("Record updated!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
        } else {
          toast.error("Unhandled sh*t happened", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
        }
      })
      .catch((error) => {
        toast.error("Unhandled error:" + error, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      });
  };

  return (
    <div className="flex flex-col gap-2 w-full md:w-[600px]">
      <p className="text-lg font-bold">Sign up for airdrop / update record</p>
      <form className="">
        <div className="relative">
          <p>Twitter account @</p>
          <input
            value={twitter}
            onChange={onTwitterChange}
            type="search"
            id="default-search"
            className="block w-full p-4 mb-4 text-sm text-black border border-black rounded-lg bg-white focus:ring-green-500 focus:border-green-500"
            placeholder="solana_aper"
            required
          />
        </div>
        <div className="relative">
          <p>Twitter post link</p>
          <input
            value={twitterLink}
            onChange={onTwitterLinkChange}
            type="search"
            id="default-search"
            className="block w-full p-4 mb-4 text-sm text-black border border-black rounded-lg bg-white focus:ring-green-500 focus:border-green-500"
            placeholder="Enter twitter post link"
            required
          />
        </div>
        <div className="relative">
          <p>Telegram account @</p>
          <input
            value={telegram}
            onChange={onTelegramChange}
            type="search"
            id="default-search"
            className="block w-full p-4 mb-4 text-sm text-black border border-black rounded-lg bg-white focus:ring-green-500 focus:border-green-500"
            placeholder="Enter Telegram @"
            required
          />
        </div>
        <div className="relative">
          <p>Wallet Solana</p>
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
      </form>
    </div>
  );
};
