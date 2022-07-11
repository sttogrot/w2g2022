import hsalogo from "./imgs/hsalogo.png";
import React from "react";
import { Nav, NavLink, NavMenu }from "./NavbarElements";
import "./css/navbar.css";



const Navbar = () => {
  
    return (
      <>
        <Nav>
          <NavMenu>
            <NavLink to="/index" >
              <img src={hsalogo} alt="hsalogo" height={64} />
              <h1 className="h1">Watch2gether der Hochschule Anhalt</h1>
            </NavLink>
          </NavMenu>
          <NavMenu className="nav-menue">
            <NavLink to="/index" activeStyle>
              Startseite
            </NavLink>
            <NavLink to="/Room" activeStyle>
              Räume
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