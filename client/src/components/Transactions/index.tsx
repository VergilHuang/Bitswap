import { TransactionContext } from '@/context/TransactionContext';
import React, { FC, FormHTMLAttributes, useContext } from 'react';
type Props = {

} & FormHTMLAttributes<HTMLFormElement>

const Transactions: FC<Props> = (props) => {

  const { currentAccount, formData, setFormData, sendTransaction } = useContext(TransactionContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
    setFormData!((preState) => ({
      ...preState,
      [name]: e.target.value
    }));
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const { addressTo, amount, keyword, message } = formData;

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction!();
  };

  return (
    <form className="grid grid-cols-12 gap-x-2 gap-y-8 xl:gap-y-6 2xl:gap-y-8 py-10 mt-14 2xl:mt-12 3xl:mt-20
        relative bg-[#ffffff] shadow-md shadow-violet-200 rounded-lg w-[28rem] xl:w-80 2xl:w-[28rem]"
      {...props}
      onSubmit={handleSubmit}>
      <input className="col-start-2 col-end-12 ring-2 ring-violet-200 bg-violet-100 pl-3 text-lg xl:text-sm 2xl:text-lg h-9 xl:h-7 2xl:h-9 py-1 
          rounded-full focus:outline-1 focus:outline-violet-500 placeholder:text-violet-400"
        placeholder="Address To"
        type="text"
        id="addressTo"
        name="addressTo" onChange={(e) => handleChange(e, 'addressTo')} />
      <input className="col-start-2 col-end-12 ring-2 ring-violet-200 bg-violet-100 pl-3 text-lg xl:text-sm 2xl:text-lg h-9 xl:h-7 2xl:h-9 py-1 
          rounded-full focus:outline-1 focus:outline-violet-500 placeholder:text-violet-400"
        placeholder="Amount (ETH)"
        type="text"
        id="amount"
        name="amount" onChange={(e) => handleChange(e, 'amount')} />
      <input className="col-start-2 col-end-12 ring-2 ring-violet-200 bg-violet-100 pl-3 text-lg xl:text-sm 2xl:text-lg h-9 xl:h-7 2xl:h-9 py-1 
          rounded-full focus:outline-1 focus:outline-violet-500 placeholder:text-violet-400"
        placeholder="Keyword (Gif)"
        type="text"
        id="keyword"
        name="keyword" onChange={(e) => handleChange(e, 'keyword')} />
      <input className="col-start-2 col-end-12 ring-2 ring-violet-200 bg-violet-100 pl-3 text-lg xl:text-sm 2xl:text-lg h-9 xl:h-7 2xl:h-9 py-1
          rounded-full focus:outline-1 focus:outline-violet-500 placeholder:text-violet-400"
        placeholder="Message"
        type="text"
        id="message"
        name="message" onChange={(e) => handleChange(e, 'message')} />
      <hr className="col-span-full" />
      <button type="submit" className="col-start-2 col-end-12 text-md 2xl:text-xl rounded-full bg-violet-400 py-2 text-white hover:bg-violet-500 transition-colors" >
        Send Now
      </button>
    </form>
  );
};

export default Transactions;