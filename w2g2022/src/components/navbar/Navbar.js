import React from "react";
import { Nav, NavLink, NavMenu }
  from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu className="nav-menue">
          <NavLink to="/index" activeStyle>
            Startseite
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/help" activeStyle>
            Help
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
