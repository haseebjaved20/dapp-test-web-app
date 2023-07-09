//libraries
import React from "react";
import WalletSate from "../../store/Wallet/WalletState";
//components
import ConnectWalletContent from "../../components/connect-wallet-page/ConnectWalletContent";

const ConnectWallet = () => {
  return (
    <WalletSate>
      <ConnectWalletContent />
    </WalletSate>
  );
};

export default ConnectWallet;
