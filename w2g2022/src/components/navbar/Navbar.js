import hsalogo from "./hsalogo.png";
import React from "react";
import { Nav, NavLink, NavMenu }
  from "./NavbarElements";



const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/index" >
          <img src={hsalogo} alt="hsalogo" height={64} />
        </NavLink>
        </NavMenu>
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
          <NavLink to="/Room" activeStyle>
            Räume
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;