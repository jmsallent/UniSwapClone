import React, { useState, useEffect } from "react";

export const TransactionContext = React.createContext();

let eth;
export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("0x0");
  const connectWallet = async (metamask = eth) => {
    try {
      if (!metamask) return alert("Please install Metamask!");
      const accounts = await metamask.request({ method: "eth" });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <TransactionContext.Provider vale={{ currentAccount, connectWallet }}>
      {children}
    </TransactionContext.Provider>
  );
};

if (typeof window !== "undefined") {
  eth = window.ethereum;
}
