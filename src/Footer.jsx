import Navigation from './Navigation';

export default function Footer() {
  return (
    <footer>
      <img src="/assets/footerlogo.png" alt="little-lemon-logo-footer" /> 
      <Navigation />
      <address>
        <p>Contact</p>
          <p>
            <p>2395 Maldove Way, Chicago Illinois</p>
            <a href="mailto:littlelemon@yahoo.com">littlelemon@yahoo.com</a><br />
            <a href="tel:+6292436827">(629)-243-6827</a>
          </p>
      </address>
      <nav>
        <ul>
          <li>
            <li><a>Facebook</a></li>
            <li><a>Instagram</a></li>
            <li><a>Twitter</a></li>
          </li>
        </ul>
      </nav>
    </footer> 
  );
}