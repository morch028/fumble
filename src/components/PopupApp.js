import { Fragment, render, h } from "preact";
import RecentSaves from "./RecentSaves";
import "./PopupApp.css";
import ToastContainer from "./ToastContainer";
import PopupFooter from "./PopupFooter";

const PopupApp = (
  <Fragment>
    <header className="app__header">
      <h1 className="app__header__brand">
        Fumbl<span className="app__header__brand--e">e</span>
      </h1>
      <a href="./saves.html" target="_blank" className="app__header__button">
        See All
      </a>
    </header>
    <main className="app__main">
      <RecentSaves />
    </main>
    <PopupFooter />
    <ToastContainer />
  </Fragment>
);

render(PopupApp, document.getElementById("root"));
