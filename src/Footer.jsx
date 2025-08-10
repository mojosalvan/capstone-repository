import NavList from './NavList';

export default function Footer({ navLinks }) {
  return (
    <footer>
      <img src="/assets/footerlogo.png" alt="little-lemon-logo-footer" /> 
      <NavList navLinks={navLinks} className="footer-nav-links"/>
    </footer> 
  );
}