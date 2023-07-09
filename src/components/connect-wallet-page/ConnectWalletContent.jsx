//libraries
import React, { useContext } from "react";
import FormikUtil from "../../lib/utils/formik/formilUtils";
import { WALLET_CONNECT_VALIDATION } from "../../lib/helpers/validation-schemas/ConnectWalletSchema";
import WalletContext from "../../store/Wallet/WalletContext";
//components
import WalletForm from "./connect-wallet-components/WalletForm";

const ConnectWalletContent = () => {
  const { userWalletAddress, WalletConnection, transferEth } =
    useContext(WalletContext);
  const walletConnectInitialValue = {
    walletAddress: "",
    amount: "",
  };

  const handleFormSubmit = (values, resetForm) => {
    // check if metamask extension install ,if not redirect to link of metamask extension

    if (typeof window.ethereum === "undefined") {
      window.open("https://metamask.io/download/", "_blank");
    } else {
      if (userWalletAddress) {
        // if user connected to metamak we perform a transaction to send eth
        transferEth(
          userWalletAddress,
          values.walletAddress,
          values.amount,
          resetForm
        );
      } else {
        //if user not connect with metamask
        WalletConnection();
      }
    }
  };

  const formikconnectWalletDetail = FormikUtil(
    walletConnectInitialValue,
    WALLET_CONNECT_VALIDATION,
    handleFormSubmit
  );

  return (
    <WalletForm
      formik={formikconnectWalletDetail}
      userWalletAddress={userWalletAddress}
    />
  );
};

export default ConnectWalletContent;
