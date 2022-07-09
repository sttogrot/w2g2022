import hsalogo from "./hsalogo.png";
import React from "react";
import { Nav, NavLink, NavMenu1, NavMenu2 }
  from "./NavbarElements";



const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu1>
          <NavLink to="/index" >
          <img src={hsalogo} alt="hsalogo" height={64} />
        </NavLink>
        </NavMenu1>
        <NavMenu2 className="nav-menue">
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
        </NavMenu2>
      </Nav>
    </>
  );
};

export default Navbar;