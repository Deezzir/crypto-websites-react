import { RPC_ENDPOINT } from "../../../../common/urls";
import { FC, useMemo } from "react";
import { PresaleForm } from "./presale-form";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { SolflareWalletAdapter } from "@solana/wallet-adapter-solflare";
import "@solana/wallet-adapter-react-ui/styles.css";

interface PresaleProps {
  maxPresaleUsers: number;
  minSolAmount: number;
  maxSolAmount: number;
  dropPubkey: string;
}

export const Presale: FC<PresaleProps> = (props: any) => {
  const wallets = useMemo(() => [new SolflareWalletAdapter()], []);

  return (
    <>
      <ConnectionProvider
        endpoint={RPC_ENDPOINT}
        config={{ commitment: "confirmed" }}
      >
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            <PresaleForm
              maxSolAmount={props.maxSolAmount}
              minSolAmount={props.minSolAmount}
              dropPubkey={props.dropPubkey}
            />
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </>
  );
};
