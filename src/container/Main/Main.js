import React from "react";
import "../Main/Main.css";
import StylistHomeIcon from "./Img/stylist-homeicon.png";
import StylistHomeCabluck from "./Img/stylist-home-cabluck.png";
import StylistHomeShoe from "./Img/stylist-home-shoe.png";
import ButtonVievMoreInfo from "../../components/MainComp/MainButtonVievMoreInfo";
import ImStylistFirst from "../../components/MainComp/ImStylistFirst";
import FeshionGalleries from "../../components/MainComp/FashionGalleries";
const Main = () => {
  return (
    <>
      <ImStylistFirst />
      <FeshionGalleries />
      <DoYouNeedStyle />
      <StoryArticle />
      <ContactInfoBottom />
    </>
  );
};



const DoYouNeedStyle = () => {
  return (
    <>
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
                <h3>Take a close look at my services</h3>
                <div className="icon-style">
                  <div className="style-by-icon">
                    <div className="col-xs-4">
                      <div className="style-icon-box">
                        <img src={StylistHomeIcon} alt="" />
                      </div>
                    </div>
                    <div className="col-xs-8">
                      <div className="box-info-style">
                        Duis dignissim mi ut laoreet mollis. Nunc id tellus
                        finibus, eleifend mi vel, maximus justo.
                      </div>
                    </div>
                  </div>
                  <div className="style-by-icon">
                    <div className="col-xs-4">
                      <div className="style-icon-box second-icon-style">
                        {" "}
                        <img src={StylistHomeCabluck} alt="" />
                      </div>
                    </div>
                    <div className="col-xs-8">
                      <div className="box-info-style">
                        Nam massa erat, aliquet a rutrum eu, sagittis ac nibh.
                        Pellentesque velit dolor, suscipit in ligula a, suscipit
                        rhoncus dui.
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
              <div>
                <img src={StylistHomeShoe} alt="" height="400px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
const StoryArticle = () => {
  return (
    <>
      <section id="stories-article">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h2 className="number-of-article fifth-article">05</h2>
            </div>
            <div className="col-xs-12">
              <h2 className="about-stories">
                <span>
                  <a href="">Stories</a>
                </span>
                ,
                <span>
                  <a href="">Reviews</a>
                </span>
                ,
                <span>
                  <a href="">Inspirations</a>
                </span>
              </h2>
            </div>
            <div className="col-xs-10 muffin-group-img">
              <div className="col-xs-8 without-padding">
                <div className="fisrt-bgi-muffin-grop">
                  <div className="col-xs-12 display-for-flex">
                    <div className="main-info-muffin-group ">
                      <div>
                        <span>
                          <a href="">Muffin Group</a>
                        </span>
                        at
                        <span>
                          <a href="">December 29, 2017</a>
                        </span>
                      </div>
                    </div>
                    <div className="about-muffin-group">Omnia tare quantum</div>
                    <hr />
                  </div>
                </div>
              </div>
              <div className="col-xs-4 ">
                <div className="second-bgi-muffin-grop ">
                  <div className="col-xs-12 display-for-flex ">
                    <div className="main-info-muffin-group">
                      <div>
                        <span>
                          <a href="">Muffin Group</a>
                        </span>
                        at
                        <span>
                          <a href="">December 29, 2017</a>
                        </span>
                      </div>
                    </div>
                    <div className="about-muffin-group">Omnia tare quantum</div>
                    <hr />
                  </div>
                </div>
                <div className="third-bgi-muffin-grop ">
                  <div className="col-xs-12 display-for-flex ">
                    <div className="main-info-muffin-group">
                      <div>
                        <span>
                          <a href="">Muffin Group</a>
                        </span>
                        at
                        <span>
                          <a href="">December 29, 2017</a>
                        </span>
                      </div>
                    </div>
                    <div class="about-muffin-group">Omnia tare quantum</div>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 ">
              <div className="some-text-storie">
                <h2>
                  Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus,
                  eleifend mi vel, maximus justo. Maecenas mi tortor,
                  pellentesque a aliquam ut, fringilla eleifend lectus.
                </h2>
              </div>
            </div>
            <div className="col-xs-12">
              <div className="button-article fifth-article-button">
                <ButtonVievMoreInfo />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
const ContactInfoBottom = () => {
  return (
<section id="contact-info-bottom">
      <div className="container">
        <div className="row">
          <div className="col-xs-10 contact-info-box ">
            <div className="col-xs-4">
              <div className="col-xs-12">
                <h2 className="stylist">Stylist</h2>
              </div>
              <div className="col-xs-12">
                <div className="lorem-buttom">
                  Lorem ipsum dolor sit amet, consectetur adipcing elit, sed do
                </div>
              </div>
            </div>
            <div className="col-xs-4">
              <ul className="bottom-li">
                <li>
                  <a href="">Facebook</a>{" "}
                </li>
                <li>
                  <a href="">Twitter</a>{" "}
                </li>
                <li>
                  <a href="">Pinterest</a>{" "}
                </li>
                <li>
                  <a href="">Google+</a>{" "}
                </li>
              </ul>
            </div>
            <div className="col-xs-4">
              <div className="col-xs-12 without-padding">
                <h2 className="sign-up">Sign up for the newsletter </h2>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Type in your email "
                  className="sign-up-input"
                />
              </div>
              <button className="subscribe-botton">Subscibe</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
    
  
};
export default Main;
