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
import { DropInfo } from "../../utils";

interface PresaleProps {
  dropInfo: DropInfo;
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
              maxSolAmount={props.dropInfo.maxSolAmount}
              minSolAmount={props.dropInfo.minSolAmount}
              dropPubkey={props.dropInfo.dropPubkey}
              presaleTokenAmount={props.dropInfo.presaleTokenAmount}
            />
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </>
  );
};
