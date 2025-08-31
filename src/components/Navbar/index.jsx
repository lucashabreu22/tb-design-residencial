import { useState } from "react";
import { Menu } from "lucide-react";
import logoImg from "/src/assets/img/PNG (MARCA DÁGUA)-19.png";
import { Link } from "react-router-dom";

import "./styles.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/servicos", label: "Serviços" },
    { href: "/portfolio", label: "Portfólio" },
    { href: "/", label: "Sobre" },
  ];

  // Função para fechar o menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav>
      <Link to="/" className="logo-link">
        <div className="logo-container">
          <img className="logo" src={logoImg} alt="tbLogo" />
        </div>
        <h1 className="font-gantic titleName">Design Residencial</h1>
      </Link>

      {/* Desktop Navigation*/}
      <div className="desktopNav"></div>
      <ul className="nav-links-desktop">
        {navItems.map((navItem, index) => (
          <li key={index}>
            <Link to={navItem.href}>
              <a>{navItem.label}</a>
            </Link>
          </li>
        ))}
        <li>
          <Link to="/">
            <a className="orcamentoBttn">Orçamento</a>
          </Link>
        </li>
      </ul>
      {/* Mobile Navigation*/}
      <div className="mobileNav">
        <button onClick={() => setIsOpen((prev) => !prev)}>
          <Menu className="menuIcon" />
        </button>

        <div className="mobileMenu">
          {isOpen && (
            <ul className="nav-links-mobile" id="nav-links-mobile">
              {navItems.map((navItem, index) => (
                <li key={index}>
                  <Link to={navItem.href} onClick={closeMenu}>
                    <a>{navItem.label}</a>
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/" onClick={closeMenu}>
                  <a className="orcamentoBttn">Orçamento</a>
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
