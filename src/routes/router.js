import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../pages/Home";
import RoleForm from "../pages/RoleForm"
import SignUpForm from "../pages/SignUpForm";
import Profile from "../pages/Profile";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/user" exact>
          <Profile />
        </Route>
        <Route path="/signup" exact>
          <RoleForm />
        </Route>
        <Route path="/signup/form" exact>
          <SignUpForm />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
