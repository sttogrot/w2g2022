import React from "react";
import BILDNAME from "../src/img/logo.png"
function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <img src={BILDNAME} className="nav-logo"></img>
      </div>
      <ul className='nav-menue'>
        <li>
          <a herf="./pages/Startseite" className='nav-item'>Startseite</a>
        </li>
        <li>
          <a herf="/Uebungsserie" className='nav-item'>Übungserie</a>
        </li>
        <li>
          <a href="https://www.hs-anhalt.de/startseite.html" className='nav-item'>Hochschule</a>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;