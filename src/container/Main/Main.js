import React from "react";
import "../Main/Main.css"
import StylistHomeIcon from "./Img/stylist-homeicon.png"
import StylistHomeCabluck from "./Img/stylist-home-cabluck.png"
import StylistHomeShoe from "./Img/stylist-home-shoe.png"
const Main = () => {
  return (
    <>
      <section id="im-stilist-firstr">
      <div className="container">
            <div className="row">
                <div className="col-xs-12">
                    <h2 className="number-of-article">01</h2>
                </div>
                <div className="col-xs-12">
                    <h2 className="about-who">
                        I am a stylist
                    </h2>
                </div>
                <div className="col-xs-12">
                    <div className="about-work">
                        My job is to make you beautiful
                    </div>
                </div>
                
                <div className="col-xs-12">
                    <div className="box-about">
                        <div className="info-stilist">
                            Amagna ac pede. Mauris suscipit mauris. Nam quis erat id tortor. Phasellus at nibh nulla nulla, egestas quam eu tortor orci, eros. Mauris neque. Pellentesque dolor. Mauris in est.
                        </div>
                        <div className="info-stilist">
                            Amagna ac pede. Mauris suscipit mauris. Nam quis erat id tortor. Phasellus at nibh nulla nulla, egestas quam eu tortor orci, eros. Mauris neque. Pellentesque dolor. Mauris in est.
                        </div>
                    </div>
                </div>
                <div className="col-xs-12">
                    <div className="button-article">
                        <a href="">view more info</a>
                    </div>
                </div>

            </div>
        </div>
      </section>
      <section id="fashion-galleries">
        <div className="container">
            <div className="row">
                <div className="col-xs-12">
                    <div className="second-article-img">
                        <div className="col-xs-6">
                            <div></div>
                        </div>
                        <div className="col-xs-6">
                            <div className="box-second-article">
                                <div className="col-xs-12">
                                    <h2 className="number-of-article">02</h2>
                                </div>
                                <div className="col-xs-12">
                                    <div className="fashion-article">
                                        Fashion galleries
                                    </div>
                                </div>
                                <div className="col-xs-12">
                                    <h2 className="about-fashion">
                                        Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit amet sem placerat tempor.
                                    </h2>
                                </div>
                                <div className="col-xs-12">
                                    <div className="button-article      second">
                                        <a href="" >see the gallery</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-4 without-padding">
                    <div className="first-bgc-article "></div>
                </div>
                <div className="col-xs-4 without-padding">
                    <div className="second-bgc-article"></div>
                </div>
                <div className="col-xs-4 without-padding">
                    <div className="third-bgc-article"></div>
                </div>
            </div>
        </div>
    </section>
    <section id="do-you-need-style">
        <div className="container">
            <div className="row">
                <div className="col-xs-12 style-article">
                    <div className="col-xs-6">
                        <h2 className="about-who third-style">Do you need a stylist?</h2>
                    </div>
                    <div className="col-xs-6">
                        <div className="button-article third-button-article ">
                            <a href="">contact me today</a>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 bgc-fourth-article-bgc">
                    <div className="col-xs-6">
                        <div className="box-style">
                            <h2>03</h2>
                            <h3>Take a close look
                                at my services</h3>
                            <div className="icon-style">
                                <div className="style-by-icon">
                                    <div className="col-xs-4">
                                        <div className="style-icon-box"><img src={StylistHomeIcon} alt="" /></div>
                                    </div>
                                    <div className="col-xs-8">
                                        <div className="box-info-style">
                                        Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo.
                                        </div>
                                    </div>
                                </div>
                                <div className="style-by-icon">
                                    <div className="col-xs-4">
                                        <div className="style-icon-box second-icon-style"> <img src={StylistHomeCabluck} alt="" /></div>
                                    </div>
                                    <div className="col-xs-8">
                                        <div className="box-info-style">
                                            Nam massa erat, aliquet a rutrum eu, sagittis ac nibh. Pellentesque velit dolor, suscipit in ligula a, suscipit rhoncus dui.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="button-article style-button">
                                <a href="">SEE ALL SERVICES</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-6 position-style">
                        <div >
                            <img src={StylistHomeShoe} alt="" height="400px" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
};

export default Main;
