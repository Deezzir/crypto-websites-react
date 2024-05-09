"use client";

import { useEffect, useMemo, useState } from "react";
import { RPC_ENDPOINT } from "../../../common/urls";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { SolflareWalletAdapter } from "@solana/wallet-adapter-wallets";
import "@solana/wallet-adapter-react-ui/styles.css";

export const Presale = (props: any) => {
  const wallets = useMemo(() => [new SolflareWalletAdapter()], []);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <ConnectionProvider
        endpoint={RPC_ENDPOINT}
        config={{ commitment: "confirmed" }}
      >
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider className="text-black">
            {mounted && (
              <>
                <p className="text-center mt-4">
                  The <span className="font-bold">75 million tokens</span> will
                  be distributed among {props.maxPresaleUsers} people equaly.
                </p>
              </>
            )}
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </>
  );
};
