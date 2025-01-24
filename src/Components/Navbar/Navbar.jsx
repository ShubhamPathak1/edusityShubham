import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import menuicon from "../../assets/menu-icon.png";

const Navbar = () => {
  const [sticky, setsticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setsticky(true) : setsticky(false);
    });
  }, []);

  const [mobileMenu, setmobileMenu] = useState(false);

  const toggleMenu = () => {
    mobileMenu ? setmobileMenu(false) : setmobileMenu(true);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <Link to="hero" smooth={true}>
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        {/* here, inside "to" attribute, we are giving the "id" of the element */}
        <li>
          <Link to="hero" smooth={true}>
            Home
          </Link>
        </li>
        <li>
          <Link to="program" smooth={true} offset={-250}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-150}>
            About us
          </Link>
        </li>
        <li>
          <Link to="campus" smooth={true} offset={-250}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={-250}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} offset={-50}>
            <button className="btn">Contact us</button>
          </Link>
        </li>
      </ul>
      <img src={menuicon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
