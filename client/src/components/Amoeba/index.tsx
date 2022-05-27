import React, { FC, ReactNode } from 'react';
import './style.scss';

type Props = {
  type: 'amoeba-1' | 'amoeba-2'
  className: string,
}

const Amoeba: FC<Props> = ({ type, className }) => {

  return (
    <div className={`${type} ${className}`}></div>
  );
};

export default Amoeba;