import { Link } from 'react-router-dom';
import navLinks from './NavList';

export default function Navigation({className}) {
  return (
    <nav aria-label="Main navigation">
      <ul className={className}>
        {navLinks.map(({ path, name }) => (
          <li key={path}>
            <Link to={path} className={`border-b-1 border-transparent hover:border-[#495E57] transition-colors duration-200
              ${name === "Order Online" ? "whitespace-nowrap" : ""}
              `}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
