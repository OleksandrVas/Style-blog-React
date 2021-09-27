import React from "react";

const BurgerMenu = () => {
  return (
    <>
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
    </>
  );
};
export default BurgerMenu
