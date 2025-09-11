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
    { href: "/sobre", label: "Sobre" },
  ];

  // Função para fechar o menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav role="navigation" aria-label="Menu principal">
      <Link to="/" className="logo-link" aria-label="Ir para a página inicial">
        <div className="logo-container">
          <img
            className="logo"
            src={logoImg}
            alt="TB Design Residencial - Logo"
          />
        </div>
        <h1 className="font-gantic titleName">Design Residencial</h1>
      </Link>

      {/* Desktop Navigation*/}
      <ul className="nav-links-desktop" role="menubar">
        {navItems.map((navItem, index) => (
          <li key={index} role="none">
            <Link to={navItem.href} role="menuitem">
              {navItem.label}
            </Link>
          </li>
        ))}
        <li role="none">
          <Link to="/contato" className="orcamentoBttn" role="menuitem">
            Orçamento
          </Link>
        </li>
      </ul>
      {/* Mobile Navigation*/}
      <div className="mobileNav">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="nav-links-mobile"
          aria-label="Abrir menu de navegação"
        >
          <Menu className="menuIcon" aria-hidden="true" />
        </button>

        <div className="mobileMenu">
          {isOpen && (
            <ul className="nav-links-mobile" id="nav-links-mobile" role="menu">
              {navItems.map((navItem, index) => (
                <li key={index} role="none">
                  <Link to={navItem.href} onClick={closeMenu} role="menuitem">
                    {navItem.label}
                  </Link>
                </li>
              ))}
              <li role="none">
                <Link
                  to="/contato"
                  onClick={closeMenu}
                  className="orcamentoBttn"
                  role="menuitem"
                >
                  Orçamento
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
