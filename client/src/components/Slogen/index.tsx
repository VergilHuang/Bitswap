import { FC } from 'react';
import './style.scss';

const Slogen: FC = () => {
  return (
    <div className="slogen mb-16 select-none">
      <div className="mb-12">
        <h1 className="3xl:text-8xl 2xl:text-6xl xl:text-5xl text-6xl">Send Crypto <br /> across the world</h1>
      </div>

      <div className="2xl:text-2xl text-lg mb-12">Explore the crypto world <br />
        <div className="text-green-600 hover:rotate-45 inline-block transition-transform">Buy</div> and
        <div className="text-red-600 hover:-rotate-45 inline-block transition-transform pl-2">Sell</div> crypto
        <br /> currencies easily on BitSwap.
      </div>

      <div>
        <p className="text-gray-700 lg:text-md">&#10024; Buy and sell 250+ cryptocurrencies with 20+ fiat currencies.</p>
        <p className="text-gray-700 lg:text-md">&#10024; Grow your portfolio by receiving rewards up to 14.5% on your crypto assets</p>
        <p className="text-gray-700 lg:text-md">&#10024; Trade with confidence on the world`s fastest and most secure crypto exchange</p>
      </div>
    </div>
  );
};

export default Slogen;