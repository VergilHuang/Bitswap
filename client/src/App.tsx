import './tailwind.css';
import './App.scss';
import 'react-toastify/dist/ReactToastify.css';
import { Navbar, Amoeba, Transactions, Slogen, Footer, AmazingCard } from './components';
import { ToastContainer } from 'react-toastify';


function App() {

  return (
    <div className="App min-h-screen relative bg-violet-100 overflow-hidden">

      <Amoeba type="amoeba-1" className="absolute top-[-5%] left-[-15%] pt-[60%] w-[66%] xl:pt-[50%] xl:w-[55%]" />
      <Amoeba type="amoeba-2" className="absolute top-[35%] right-[-10%] pt-[50%] w-[59%]" />
      <Navbar />
      <div className="pt-[134px]">
        <div className="2xl:mt-36 mt-24 px-[2%] flex justify-evenly flex-wrap xl:flex-nowrap">
          <div className="text-center xl:text-left xl:pr-6">
            <Slogen />
            <button className="bg-sky-600 text-white rounded-full text-2xl mt-16 px-6 py-2 hover:bg-sky-700 relative transition-colors" onClick={() => alert('123')}>Connect Wallet</button>
          </div>
          <div className="flex flex-col items-center w-full xl:w-auto xl:-mt-5 mt-40 ">
            <AmazingCard />
            <Transactions />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
    </div>
  );
}

export default App;
