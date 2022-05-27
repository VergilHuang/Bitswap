import { FC } from 'react';
import './style.scss';
import { ReactComponent as EthLogo } from '@/assets/img/ethereum-eth-logo.svg';
type Props = {

}

const AmazingCard: FC<Props> = (props) => {

  return (
    <div className="amz-card rounded-2xl shadow-xl overflow-hidden relative w-96 xl:w-80 aspect-[16/9] 2xl:w-96">
      <EthLogo className="w-8 h-8 absolute top-4 left-2" />
      <p className="text-white text-sm absolute bottom-10 left-3">0x87123..23</p>
      <h3 className="text-white text-sm absolute bottom-2 left-3">Ethereum</h3>
    </div>
  );
};

export default AmazingCard;