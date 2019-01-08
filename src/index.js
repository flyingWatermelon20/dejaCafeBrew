import React from "react";
import ReactDOM from "react-dom";

import Container from "./components/container/home";

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<Container />, wrapper) : false;
