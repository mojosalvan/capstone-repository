import Navigation from './Navigation';

export default function Header({ navLinks }) {
  return (
    <header className="header">
      <img src="/assets/logo.svg" alt="little-lemon-logo" />
      <Navigation navLinks={navLinks}/>
    </header>
  );
}