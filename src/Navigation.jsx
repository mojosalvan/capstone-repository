import NavList from './NavList';

export default function Navigation({ navLinks }) {
  return (
    <nav>
      <NavList navLinks={navLinks} className="nav-links"/>
    </nav>
  );
}