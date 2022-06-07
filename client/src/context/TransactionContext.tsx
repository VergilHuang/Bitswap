import React, { ReactNode, useEffect, useState, } from 'react';
import { ethers } from 'ethers';

import { contractABI, contractAddress } from '../utils/constants';
import { debug } from 'console';

type TransactionContextType = {
  currentAccount: string | undefined,
  connectWallet: () => void,
  formData: {
    addressTo: string;
    amount: string;
    keyword: string;
    message: string;
  }
  setFormData: React.Dispatch<React.SetStateAction<{
    addressTo: string;
    amount: string;
    keyword: string;
    message: string;
  }>> | undefined,
  sendTransaction: (() => void) | undefined
}

export const TransactionContext = React.createContext<TransactionContextType>({
  currentAccount: undefined,
  connectWallet: () => { },
  formData: {
    addressTo: '',
    amount: '',
    keyword: '',
    message: ''
  },
  setFormData: undefined,
  sendTransaction: undefined,

});

const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

  return transactionContract;
};

export const TransactinProvider = ({ children }: { children: ReactNode }) => {

  const [currentAccount, setCurrentAccount] = useState();
  const [formData, setFormData] = useState({ addressTo: '', amount: '', keyword: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(localStorage.getItem('transactionCount'));

  const checkIfWalletConnected = async () => {
    if (!ethereum) return alert('Please install metamask');

    const accounts = await ethereum.request({ method: 'eth_accounts' });

    if (accounts.length) {
      setCurrentAccount(accounts[0]);
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert('Please install metamask');

      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });

      setCurrentAccount(accounts[0]);

    } catch (error) {
      console.log(error);

      throw new Error('No ethereum object.');
    }
  };

  const sendTransaction = async () => {
    // try {
    if (!ethereum) return alert('Please install metamask');

    const { addressTo, amount, keyword, message } = formData;
    const contract = getEthereumContract();
    const parsedAmount = ethers.utils.parseEther(amount);

    await ethereum.request({
      method: 'eth_sendTransaction',
      params: [{
        from: currentAccount,
        to: addressTo,
        gas: '0x5208', // 2100 GWEI
        value: parsedAmount._hex
      }]
    });

    const transactionHash = await contract.addToBlockchain(addressTo, parsedAmount, message, keyword);

    setIsLoading(true);
    console.log(`Loading - ${transactionHash.hash}`);
    debugger;
    await transactionHash.wait();

    setIsLoading(false);
    console.log(`Loading - ${transactionHash.hash}`);

    const transactionCount = await contract.getTransactionCount();
    console.log(transactionCount);

    setTransactionCount(transactionCount.toNumber());

    // } catch (error) {
    //   console.log(error);

    //   throw new Error('No ethereum object.');
    // }
  };

  useEffect(() => {
    checkIfWalletConnected();
  }, []);

  return (
    <TransactionContext.Provider value={{ connectWallet, currentAccount, formData, setFormData, sendTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
};