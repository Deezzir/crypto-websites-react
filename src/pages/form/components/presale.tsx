import { RPC_ENDPOINT } from "../../../common/urls";
import { FC, useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { SolflareWalletAdapter } from "@solana/wallet-adapter-solflare";

import "@solana/wallet-adapter-react-ui/styles.css";
import { useCompensateScrollbar } from "../../../hooks/useCompensateScrollbar";

export const Presale: FC = (props: any) => {
  const wallets = useMemo(() => [new SolflareWalletAdapter()], []);
  useCompensateScrollbar();

  return (
    <>
      <ConnectionProvider
        endpoint={RPC_ENDPOINT}
        config={{ commitment: "confirmed" }}
      >
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider className="text-black">
            <div className="flex flex-col justify-center items-center">
              <WalletMultiButton />
              <p className="text-center mt-4">
                The <span className="font-bold">75 million tokens</span> will be
                distributed among {props.maxPresaleUsers} people equaly.
              </p>
            </div>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </>
  );
};
