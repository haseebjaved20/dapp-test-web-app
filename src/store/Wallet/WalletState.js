//libraries
import { useState } from "react";
import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletContext from "./WalletContext";

const WalletSate = (props) => {
  const [userWalletAddress, setUserWalletAddress] = useState(null);
  const [provider, setProvider] = useState(null);

  // performing transfer eth transaction
  const transferEth = (from, to, amount, resetForm) => {
    const web3 = new Web3(provider);

    web3.eth
      .sendTransaction({
        from: from,
        to: to,
        value: web3.utils.toWei(amount, "ether"),
      })
      .then((hash) => {
        resetForm();
        setUserWalletAddress(null);
        alert(`Transaction Successfully Executed `);
      })
      .catch((err) => {
        alert(`Ooops ${err}`);
      });
  };

  const setProviderListeners = async (provider) => {
    // Subscribe to accounts change
    provider.on("accountsChanged", async () => {
      fetchAccountData(provider);
    });
    // Subscribe to chainId change
    provider.on("chainChanged", async () => {
      fetchAccountData(provider);
    });
    provider.on("disconnect", async (error) => {
      alert(error.message, "error");
    });
  };

  // Fetch wallet data
  const fetchAccountData = async (provider) => {
    const web3 = new Web3(provider);
    // Get list of accounts of the connected wallet
    const accounts = await web3.eth.getAccounts();
    const address = accounts[0];
    if (address) {
      setUserWalletAddress(address);
    } else {
      alert("Failed to connect to wallet");
    }
  };
  // connect to metamask
  const WalletConnection = async () => {
    let provider;
    const web3Modal = new Web3Modal({
      cacheProvider: true, // optional
      disableInjectedProvider: false,
    });

    try {
      provider = await web3Modal.connect();
      setProvider(provider);
    } catch (e) {
      alert("User rejected request");
      return;
    }

    await fetchAccountData(provider);
    setProviderListeners(provider);
  };

  return (
    <WalletContext.Provider
      value={{
        userWalletAddress,
        WalletConnection,
        transferEth,
      }}
    >
      {props.children}
    </WalletContext.Provider>
  );
};
export default WalletSate;
