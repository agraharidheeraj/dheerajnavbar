import React, { useState } from "react";
import "./navbar.css";
import { FaInstagramSquare,FaGithubSquare,FaYoutubeSquare,} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
       
        <div className="logo">
          <h2>
            <span>D</span>heeraj
            <span> A</span>grahari
          </h2>
        </div>

        
        <div
          className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link" }>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/service">Certificate</NavLink>
            </li>
            <li>
              <NavLink to="/contact">About Me</NavLink>
            </li>
          </ul>
        </div>

        
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://github.com/agraharidheeraj"
                target="_dheeraj">
                <FaGithubSquare className="github" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/dheerajagrahari700/"
                target="_dheeraj">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://studio.youtube.com/channel/UCanIdjk1MCCERfJk7AdMoYA"
                target="_dheeraj">
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul>

         
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
