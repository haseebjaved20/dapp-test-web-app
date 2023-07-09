import React from "react";
import InputField from "../../formUI/InputField";

const WalletForm = (props) => {
  const { formik } = props;
 
  return (
    <>
     <div className="max-w-[450px] border border-neutral-200 p-8 rounded-2xl shadow-md w-full">
      <h1 className="text-2xl font-bold mb-6">Transactions Form</h1>
      <form onSubmit={formik.handleSubmit}>
        <InputField
          name="walletAddress"
          type="text"
          placeholder="Enter wallet address"
          label="Wallet Address"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.walletAddress}
          error={formik.errors.walletAddress}
          touched={formik.touched.walletAddress}
        />
        <InputField
          name="amount"
          type="text"
          placeholder="Enter amount"
          label="Amount"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.amount}
          error={formik.errors.amount}
          touched={formik.touched.amount}
        />
        <button type="submit" className="btn-primary mt-8">
        Connect with Metamask
        </button>
      </form>
      </div>
    </>
  );
};

export default WalletForm;
