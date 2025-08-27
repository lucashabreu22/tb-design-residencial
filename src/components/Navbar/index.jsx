import { useState } from "react";
import { Menu } from "lucide-react";

import "./styles.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/", label: "Serviços" },
    { href: "/", label: "Projetos" },
    { href: "/", label: "Sobre" },
  ];

  return (
    <nav>
      <div className="logo-container">
        <img
          className="logo"
          src="/src/assets/img/PNG (MARCA DÁGUA)-19.png"
          alt="tbLogo"
        />
      </div>
      <h1 className="font-gantic titleName">Design Residencial</h1>

      {/* Desktop Navigation*/}
      <div className="desktopNav"></div>
      <ul className="nav-links-desktop">
        {navItems.map((navItem, index) => (
          <li key={index}>
            <a href={navItem.href}>{navItem.label}</a>
          </li>
        ))}
        <li>
          <a className="orcamentoBttn" href="#contact">
            Orçamento
          </a>
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
                  <a href={navItem.href}>{navItem.label}</a>
                </li>
              ))}
              <li>
                <a className="orcamentoBttn" href="#contact">
                  Orçamento
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
