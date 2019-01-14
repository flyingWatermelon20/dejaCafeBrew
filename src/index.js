import React from "react";
import ReactDOM from "react-dom";

import Main from "./page/main";

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<Main />, wrapper) : false;
