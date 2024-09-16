import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/x2.png";
import love from "../../assets/love.png";
const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toogleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="" className="logo" />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li> Home</li>
        <li>Program</li>
        <li>About us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li>
          <button className="btn"> Contacr us</button>
        </li>
      </ul>
      <img src={love} alt="" className="menu-icon" onClick={toogleMenu} />
    </nav>
  );
};

export default Navbar;
