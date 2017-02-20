import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Switch, Route, Redirect, NavLink } from "react-router-dom";
import SimpleForm from "./SimpleForm";
import ValidationErrors from "./ValidationErrors";
import "./index.css";

function Navigation() {
  return (
    <ul className="navigation">
      <li><NavLink to="/simple">Simple form</NavLink></li>
      <li><NavLink to="/validation">Form with validation</NavLink></li>
    </ul>
  );
}

ReactDOM.render(
  <HashRouter>
    <div>
      <Navigation />
      <div className="content">
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/simple" />} />
          <Route path="/simple" component={SimpleForm} />
          <Route path="/validation" component={ValidationErrors} />
        </Switch>
      </div>
    </div>
  </HashRouter>,
  document.getElementById("root")
);
