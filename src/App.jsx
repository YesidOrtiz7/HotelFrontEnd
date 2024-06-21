import React from "react";
import ReactDOM from "react-dom";

import MainLayout from "./components/MainLayout";

import "./index.css";

const App = () => (
  <div className="container">
    <MainLayout/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
