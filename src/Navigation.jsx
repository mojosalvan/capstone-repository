import { Link } from 'react-router-dom';
import navLinks from './NavList';

export default function Navigation() {
  return (
    <nav>
      <ul className="flex gap-6">
        {navLinks.map(({ path, name }) => (
          <li key={path}>
            <Link
              to={path}
              className="text-white hover:text-yellow-400 transition-colors duration-200"
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
