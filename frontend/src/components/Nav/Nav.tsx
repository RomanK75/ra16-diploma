import { useSelector } from "react-redux";
import headerLogo from "../../../img/header-logo.png";
import NavItems from "../NavItems/NavItems";
import { NavLink } from "react-router-dom";

type Props = {};

const Nav = (props: Props) => {
  const navigations = [
    { name: "Главная", href: "/" },
    { name: "Каталог", href: "/catalog" },
    { name: "О магазине", href: "/about" },
    { name: "Контакты", href: "/contacts" },
  ];
  const cartCount = useSelector((state: any) => state.cart.cartList.length);
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <a className="navbar-brand" href="/">
        <img src={headerLogo} alt="Bosa Noga" />
      </a>
      <div className="collapse navbar-collapse" id="navbarMain">
        <NavItems navigations={navigations} />
        <div>
          <div className="header-controls-pics">
            <div
              data-id="search-expander"
              className="header-controls-pic header-controls-search"
            ></div>
            <NavLink to="/cart">
            <div className="header-controls-pic header-controls-cart">
              <div className="header-controls-cart-full">{cartCount}</div>
              <div className="header-controls-cart-menu"></div>
            </div>
            </NavLink>
          </div>
          <form
            data-id="search-form"
            className="header-controls-search-form form-inline invisible"
          >
            <input className="form-control" placeholder="Поиск" />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
