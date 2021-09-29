import React from "react";
import "../Main/Main.css";
import ImStylistFirst from "../../components/MainComp/ImStylistFirst";
import FeshionGalleries from "../../components/MainComp/FashionGalleries";
import DoYouNeedStyle from "../../components/MainComp/DoYouNeedStyle";
import StoryArticle from "../../components/MainComp/StoryArticle"
import ContactInfoBottom from "../../components/MainComp/ContactInfoBottom";
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


export default Main;
