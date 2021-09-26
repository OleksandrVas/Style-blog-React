import React from "react";
import ReactDOM from "react-dom";
import Header from "./container/Header/Header";
import Main from "./container/Main/Main";


const App = () => {
  return (
    <>
      <Header />
      <Main />
    </>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
