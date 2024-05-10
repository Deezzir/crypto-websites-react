import { RPC_ENDPOINT } from "../../../common/urls";
import { FC, useEffect, useMemo, useState } from "react";
import {
  ConnectionProvider,
  WalletProvider,
  useAnchorWallet,
  useConnection,
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import {
  guestIdentity,
  Metaplex,
  walletAdapterIdentity,
} from "@metaplex-foundation/js";
import { SolflareWalletAdapter } from "@solana/wallet-adapter-solflare";
import "@solana/wallet-adapter-react-ui/styles.css";
import { useCompensateScrollbar } from "../../../hooks/useCompensateScrollbar";
import {
  sendErrorNotification,
  sendSuccessNotification,
  sendWarningNotification,
} from "../utils";

interface PresaleProps {
  maxPresaleUsers: number;
  minSolAmount: number;
  maxSolAmount: number;
}

export const Presale: FC<PresaleProps> = (props: any) => {
  const [solAmount, setSolAmount] = useState(0.0);
  const [metaplex, setMetaplex] = useState<Metaplex | null>(null);
  const wallets = useMemo(() => [new SolflareWalletAdapter()], []);

  useCompensateScrollbar();

  const { connection } = useConnection();
  const wallet = useAnchorWallet();

  //   useEffect(() => {
  //     setMetaplex(
  //       Metaplex.make(connection).use(
  //         wallet ? walletAdapterIdentity(wallet) : guestIdentity()
  //       )
  //     );
  //   }, [connection, wallet]);

  const clearForm = () => {
    setSolAmount(props.minSolAmount);
  };

  const onSolAmountChange = (e: any) => {
    setSolAmount(e.target.value);
  };

  const onPresale = (e: any) => {
    e.preventDefault();
    // if (!metaplex) {
    //   sendErrorNotification("Wront twitter account profile");
    //   return;
    // }

    if (solAmount < props.minSolAmount || solAmount > props.maxSolAmount) {
      sendErrorNotification("Wrong amount of SOL");
      return;
    }

    console.warn("Presale", solAmount);
    clearForm();
  };

  return (
    <>
      <ConnectionProvider
        endpoint={RPC_ENDPOINT}
        config={{ commitment: "confirmed" }}
      >
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            <div className="flex flex-col gap-2 w-full h-full justify-between">
              <p className="text-lg font-bold text-center">
                Sign up for presale
              </p>
              <form className="">
                <div className="relative flex mb-4 justify-center">
                  <WalletMultiButton />
                </div>
                <div className="relative">
                  <p>Solana Amount</p>
                  <input
                    value={solAmount}
                    onChange={onSolAmountChange}
                    type="number"
                    id="sol-amount"
                    className="block w-full p-4 text-sm text-black border border-black rounded-lg bg-white"
                    placeholder={props.minSolAmount.toString()}
                    required
                  />
                  <p className="mb-4 text-xs text-slate-400">
                    Min: {props.minSolAmount} SOL, Max: {props.maxSolAmount} SOL
                  </p>
                </div>
                <div className="w-full">
                  <button
                    onClick={onPresale}
                    type="submit"
                    className="text-white w-full bg-[#1f2937] hover:bg-[#1f2937dc] focus:ring-2 focus:ring-[#1f293785] hover:scale-[1.02] focus:outline-none font-medium rounded-lg px-6 py-4 transition-transform duration-75 ease-in-out"
                  >
                    Buy Presale
                  </button>
                </div>
                <p className="text-center mt-4">
                  <span className="font-bold uppercase">75 million tokens</span>{" "}
                  will be distributed among {props.maxPresaleUsers} people
                  depending on the amount of SOL sent.
                </p>
              </form>
            </div>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </>
  );
};
