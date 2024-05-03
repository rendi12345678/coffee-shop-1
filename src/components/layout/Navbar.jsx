import { useState } from "react";
import HamburgerMenu from "../common/HamburgerMenu";
import Logo from "../common/Logo";
import CartAndAuth from "../common/CartAndAuth";
import MenuItem from "../common/MenuItem";
import Container from "../common/Container";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <Container className="navbar__container">
        <Logo className="navbar__logo" />
        <HamburgerMenu
          className="navbar__hamburger-menu"
          isOpen={isOpen}
          toggleNavbar={toggleNavbar}
        />
        <ul
          className={
            isOpen ? "navbar__menu navbar__menu--active" : "navbar__menu"
          }
        >
          <MenuItem to="home" text="Home" onClick={toggleNavbar} />
          <MenuItem to="about" text="About" onClick={toggleNavbar} />
          <MenuItem to="menu" text="Menu" onClick={toggleNavbar} />
          <MenuItem to="contact" text="Contact" onClick={toggleNavbar} />
        </ul>
        <CartAndAuth className="navbar__cart-and-auth" />
      </Container>
    </nav>
  );
};

export default Navbar;
