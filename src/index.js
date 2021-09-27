import React from "react";
import ReactDOM from "react-dom";
import Header from "./container/Header/Header";
import Main from "./container/Main/Main";
import Footer from "./container/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
