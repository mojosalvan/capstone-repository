import {Link} from 'react-router-dom'

export default function NavList({navLinks, className}) {
    return (
        <>
          <ul className={className}>
            {navLinks.map(({path, name}) => (
              <li key={path}>
                <Link to={path}>{name}</Link>
              </li>
            ))}
          </ul>
        </>
    )
}