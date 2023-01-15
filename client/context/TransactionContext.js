import React, { useState, useEffect } from "react";

export const TransactionContext = React.createContext();

let eth;
if (typeof window !== "undefined") {
  eth = window.ethereum;
}

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState(0x0);

  const connectWallet = async (metamask = eth) => {
    try {
      if (!metamask) alert("Install Metamask!");
      const accounts = await metamask.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfWalletIsConnected = async (metamask = eth) => {
    try {
      if (!metamask) alert("Install Metamask!");
      const accounts = await metamask.request({ method: "eth_accounts" });
      accounts.find(currentAccount);
    } catch (error) {}
  };
  return (
    <TransactionContext.Provider value={{ currentAccount, connectWallet }}>
      {children}
    </TransactionContext.Provider>
  );
};
