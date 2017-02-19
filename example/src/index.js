import React from "react";
import ReactDOM from "react-dom";
import ThemeProvider from "react-toolbox/lib/ThemeProvider";
import SignupForm from "./SignupForm";
import theme from "./toolbox/theme.js";
import "./toolbox/theme.css";
import "./index.css";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <SignupForm />
  </ThemeProvider>,
  document.getElementById("root")
);
