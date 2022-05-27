import { FC, FormHTMLAttributes } from 'react';
type Props = {

} & FormHTMLAttributes<HTMLFormElement>

const Transactions: FC<Props> = (props) => {

  return (
    <form className="grid grid-cols-12 gap-x-2 gap-y-8 py-8 mt-12 2xl:mt-24 relative bg-[#ffffff] shadow-md shadow-violet-200 rounded-lg w-96 2xl:w-[28rem]" {...props}>
      <input className="col-start-2 col-end-12 ring-2 ring-violet-200 bg-violet-100 pl-3 h-9 py-1 rounded-full focus:outline-1 focus:outline-violet-500 placeholder:text-violet-400" placeholder="Address To" type="text" id="address_to" name="address_to" />
      <input className="col-start-2 col-end-12 ring-2 ring-violet-200 bg-violet-100 pl-3 h-9 py-1 rounded-full focus:outline-1 focus:outline-violet-500 placeholder:text-violet-400" placeholder="Amount (ETH)" type="text" id="amount" name="amount" />
      <input className="col-start-2 col-end-12 ring-2 ring-violet-200 bg-violet-100 pl-3 h-9 py-1 rounded-full focus:outline-1 focus:outline-violet-500 placeholder:text-violet-400" placeholder="Keyword (Gif)" type="text" id="keyword" name="keyword" />
      <input className="col-start-2 col-end-12 ring-2 ring-violet-200 bg-violet-100 pl-3 h-9 py-1 rounded-full focus:outline-1 focus:outline-violet-500 placeholder:text-violet-400" placeholder="Message" type="text" id="msg" name="msg" />
      <hr className="col-span-full" />
      <button className="col-start-2 col-end-12 text-xl mt-3 rounded-full bg-violet-400 py-2 text-white hover:bg-violet-500 transition-colors">Send Now</button>
    </form>
  );
};

export default Transactions;