import { NavLink } from "react-router-dom";
type Props = {
  navigations: { name: string; href: string }[];
};

function NavItems({ navigations }: Props) {
  return (
    <ul className="navbar-nav mr-auto">
      {navigations.map(({ name, href }) => (
        <li className="nav-item" key={name}>
          <NavLink
            to={href}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default NavItems;
