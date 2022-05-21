import React, { useState } from "react";
import logo from "../../images/logo.png";
import "./Navbar.css";
import { FcSearch } from "react-icons/fc";
import { RiShoppingBag3Fill, RiProfileFill } from "react-icons/ri";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            {/* <span>LOGO</span> */}
            <span>
              <img src={logo} alt="logo" />
            </span>
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Creative</Link>
            </li>
            <li>
              <Link to="/scrap-products">Scrap</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <Link to="/search">
                <FcSearch className="facebook" />
              </Link>
            </li>
            <li>
              <Link to="/cart">
                <RiShoppingBag3Fill className="instagram" />
              </Link>
            </li>
            <li>
              <Link to="/login">
                <RiProfileFill className="youtube" />
              </Link>
            </li>
          </ul>

          {/* hamburget menu start 
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div> */}
        </div>
      </nav>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
    </>
  );
};

export default Navbar;
