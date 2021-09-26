import React from "react";
import "./Header.css";
import Logo from "../Header/img/stylist-logo.png";
import LogoTwo from "../Header/img/stylist-home-header-tex.png";

const Header = () => {
  return (
    <>
      <div id="main-header">
        <div className="container">
          <div className="row">
            <div className="col-xs-7">
              <div className="header-logo">
                <a href="">
                  <img src={Logo} alt="" />
                </a>
              </div>
            </div>
            <div className="col-xs-5 burger-menu">
              <div className="menu">
                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Services</li>
                  <li>Gallery</li>
                  <li>Blog</li>
                  <li>Buy now</li>
                </ul>
              </div>
              <div className="burger">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="header-bottom-img">
              <img src={LogoTwo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
