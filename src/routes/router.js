import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "../pages/Home";
import SignUpPage from "../pages/SignUpPage";
import Profile from "../pages/Profile";
// import RoleForm from "../components/RoleForm"

export const Routes = () => {
  return (
    <Router>
      <Switch>
        {/* <Route path="/" exact>
          <Home />
        </Route> */}
        <Route path="/user" exact>
          <Profile />
        </Route>
        {/* <Route path="/signup" exact>
          <RoleForm />
        </Route> */}
        <Route path="/signup/user" exact>
          <SignUpPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
