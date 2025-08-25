import Navigation from './Navigation';
import Socials from './Socials'

export default function Footer() {
  return (
    <footer className="md:flex justify-between my-5 gap-5 space-y-10">
      <img
        src="/assets/footerlogo.png"
        alt="little-lemon-logo-footer"
        className=" md:mx-0 h-[200px] md:h-[180px] lg:h-[293px] w-auto justify-self-center"/>
      <hr className="border-t md:hidden border-gray-500 my-5 w-full"/>
      <div className="flex flex-col">
        <p className="text-sm font-medium lg:text-md">Doormat Navigation</p>
        <Navigation className="flex-col mt-5 font-light text-sm"/>
      </div>
      <hr className="border-t md:hidden border-gray-500 my-5 w-full"/>
      <div>
        <p className="text-sm font-medium lg:text-md">Contact</p>
        <address>
            <div className="mt-5 font-light text-sm">
              <p>2395 Maldove Way, Chicago Illinois</p>
              <a href="mailto:littlelemon@yahoo.com">littlelemon@yahoo.com</a><br />
              <a href="tel:+6292436827">(629)-243-6827</a>
            </div>
        </address>
      </div>
      <hr className="border-t md:hidden border-gray-500 my-5 w-full"/>
      <div className="flex flex-col">
        <p className="text-sm font-medium lg:text-md">Social Media</p>
        <Socials/>
      </div>
    </footer>
  );
}