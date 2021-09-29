import React from "react";
import "../Main/Main.css";
import ButtonVievMoreInfo from "../../components/MainComp/MainButtonVievMoreInfo";
import ImStylistFirst from "../../components/MainComp/ImStylistFirst";
import FeshionGalleries from "../../components/MainComp/FashionGalleries";
import DoYouNeedStyle from "../../components/MainComp/DoYouNeedStyle";
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
