import { FC, useEffect, useRef } from 'react';
import { ReactComponent as Logo } from '@/assets/img/BitSwap-text-logo.svg';
import { FiLogIn } from 'react-icons/fi';
import { toast } from 'react-toastify';
const Navbar: FC = () => {

  const headerRef = useRef<HTMLHeadElement>(null);


  useEffect(() => {

    const scrollEvent = () => {
      let scrollHeight = (document.body.scrollTop + document.documentElement.scrollTop);
      // let scrollpercent = scrollHeight / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
      if (scrollHeight > 200) {
        headerRef.current!.style.backgroundColor = 'rgba(255,255,255, 0.9)';
        headerRef.current!.style.height = '80px';
        headerRef.current!.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -2px rgb(0 0 0 / 10%)';
      }
      else {
        headerRef.current!.style.backgroundColor = 'transparent';
        headerRef.current!.style.height = '135px';
        headerRef.current!.style.boxShadow = 'none';
      }
    };
    window.addEventListener('scroll', scrollEvent);

    return () => {
      window.removeEventListener('scroll', scrollEvent);
    };

  }, []);

  const toastMsg = (msg: string) => {
    toast(`🦄 ${msg}`, {
      position: 'top-center',
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <header ref={headerRef} className="fixed w-full h-[135px] top-0 left-0 flex justify-between items-center px-[8%] py-2 bg-transparent transition-all">
      <div className="flex justify-start items-center">
        <Logo className="w-[150px]" />
      </div>
      <div className="flex justify-end item-center w-[500px]">
        <ul className="flex justify-evenly items-center w-[400px]">
          <li><a className="hover:text-violet-500 transition-colors" onClick={() => toastMsg('It\'s just a demo, sorry~')}>Market</a></li>
          <li><a className="hover:text-violet-500 transition-colors" onClick={() => toastMsg('It\'s just a demo, sorry~')}>Exchange</a></li>
          <li><a className="hover:text-violet-500 transition-colors" onClick={() => toastMsg('It\'s just a demo, sorry~')}>Turorials</a></li>
          <li><a className="hover:text-violet-500 transition-colors" onClick={() => toastMsg('It\'s just a demo, sorry~')}>Wallets</a></li >
        </ul >
        <button className="bg-sky-600 hover:bg-sky-700 text-white rounded-full px-5 py-1.5 flex items-center" onClick={() => toastMsg('It\'s just a demo, sorry~')}>
          Login
          <FiLogIn className="ml-1" />
        </button>
      </div >
    </header >
  );
};

export default Navbar;