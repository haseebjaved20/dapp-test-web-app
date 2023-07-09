import * as Yup from "yup";
export const WALLET_CONNECT_VALIDATION = Yup.object().shape({
  walletAddress: Yup.string()
    .required("Wallet address is required")
    .matches(/^[a-zA-Z0-9][a-zA-Z0-9\s]*$/, "Characters must be alphanumaric"),

  amount: Yup.string()
    .required(" Amount is required ")
    .matches(/^\d+(\.\d{0,2})?$/, "Must be a number with two decimal places")
    .test(
      "Amount must be greater than 0",
      "Amount must be greater than 0",
      (value, context) => {
        return context.originalValue && !context.originalValue.startsWith("0");
      }
    ),
});
