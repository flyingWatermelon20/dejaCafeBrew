import React from "react";
import ReactDOM from "react-dom";

import Container from "./components/container/container";

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<Container />, wrapper) : false;
