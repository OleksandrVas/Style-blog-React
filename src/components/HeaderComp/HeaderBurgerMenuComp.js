import React from "react";

const BurgerMenu = () => {
    return (
        <>
            <div className="col-xs-5 burger-menu">
                <div className="menu">
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">Gallery</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Buy now</a></li>
                    </ul>
                </div>
                <div className="burger" >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </>
    );
};
export default BurgerMenu
