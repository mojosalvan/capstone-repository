import Navigation from './Navigation';
import Socials from './Socials'

export default function Footer() {
  return (
    <footer className="flex justify-between my-5">
      <img
        src="/assets/footerlogo.png"
        alt="little-lemon-logo-footer"
        className="h-[293px]
          w-auto"
      />
      <div className="flex flex-col">
        <p className="font-medium text-md">Doormat Navigation</p>
        <Navigation className="flex-col mt-5 font-light text-sm"/>
      </div>
      <div>
        <p className="font-medium text-md">Contact</p>
        <address>
            <div className="mt-5 font-light text-sm">
              <p>2395 Maldove Way, Chicago Illinois</p>
              <a href="mailto:littlelemon@yahoo.com">littlelemon@yahoo.com</a><br />
              <a href="tel:+6292436827">(629)-243-6827</a>
            </div>
        </address>
      </div>
      <div className="flex flex-col">
        <p className="font-medium text-md">Social Media</p>
        <Socials/>
      </div>
    </footer>
  );
}