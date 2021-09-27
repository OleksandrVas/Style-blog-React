import React from "react";
import "./Header.css";
import HeaderLogo from "../../components/HeaderComp/HeaderLogoComp";
import BurgerMenu from "../../components/HeaderComp/HeaderBurgerMenuComp";
import HeaderBottomImg from "../../components/HeaderComp/HeaderBottomImgComp";

const Header = () => {
  return (
    <>
      <div id="main-header">
      <div className="container">
        <div className="row">
          <HeaderLogo />
          <BurgerMenu />
          <HeaderBottomImg />
        </div>
      </div>
      </div>
    </>
  );
};

export default Header;
