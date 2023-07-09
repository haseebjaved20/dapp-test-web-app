import React from "react";
import WalletForm from "./connect-wallet-components/WalletForm";
import FormikUtil from "../../lib/utils/formik/formilUtils";
import { WALLET_CONNECT_VALIDATION } from "../../lib/helpers/validation-schemas/ConnectWalletSchema";

const ConnectWalletContent = () => {
  const walletConnectInitialValue = {
    walletAddress: "",
    amount: "",
  };

  const handleFormSubmit = (values, resetForm) => {
    resetForm(walletConnectInitialValue);
  };

  const formikconnectWalletDetail = FormikUtil(
    walletConnectInitialValue,
    WALLET_CONNECT_VALIDATION,
    handleFormSubmit
  );

  return <WalletForm formik={formikconnectWalletDetail} />;
};

export default ConnectWalletContent;
