//libraries
import * as Yup from "yup";

export const WALLET_CONNECT_VALIDATION = Yup.object().shape({
  walletAddress: Yup.string()
    .required("Wallet address is required")
    .matches(/^[a-zA-Z0-9][a-zA-Z0-9\s]*$/, "Characters must be alphanumaric"),

  amount: Yup.string()
    .required(" Amount is required ")
    .matches(/^\d+(\.\d{0,10})?$/, "Must be a number with two decimal places"),
});
