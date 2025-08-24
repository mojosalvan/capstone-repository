import Header from './Header';
import Navigation from './Navigation';
import Footer from "./Footer";
import { Outlet } from 'react-router-dom';

export default function Layout(){
    return (
      <div className="min-h-screen min-w-screen flex flex-col text-[#333333]">
        <div className="shadow-md">
          <header className="flex justify-between items-center py-3 lg:py-12 bg-white mx-[0px]  lg:mx-[290px]">
            <Header />
            <Navigation className="hidden md:pr-[0px] md:flex gap-3 md:gap-6 pr-[0px] md:pr-[100px] text-xs font-light" />
          </header>
        </div>
          <main>
            <div className="bg-yellow-500 mx-[0px] lg:mx-[290px]">
              <Outlet />
            </div>
          </main>
          <footer className="bg-[#EDEFEE]">
            <div className="bg-sky-500 mx-[0px] lg:mx-[290px] ">
              <Footer />
            </div>
          </footer>
      </div>
    )
}