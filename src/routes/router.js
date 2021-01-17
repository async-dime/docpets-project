import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../pages/Home";
import RoleForm from "../pages/RoleForm";
import FormSignUp from "../pages/FormSignUp";
import FormSignIn from "../pages/FormSignIn";
import Profile from "../pages/Profile";
import DetailRS from "../pages/DetailRS";
import ListRS from "../pages/ListRS";
import Userprofile from "../pages/UserProfile";
import TestPage from "../pages/TestPage";
import NotFound from "../pages/404";

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
          <FormSignUp />
        </Route>
        <Route path="/login" exact>
          <FormSignIn />
        </Route>
        <Route path="/detailrs" exact>
          <DetailRS />
        </Route>
        <Route path="/listrs" exact>
          <ListRS />
        </Route>
        <Route path="/user" exact>
          <Userprofile />
        </Route>
        <Route path="/test" exact>
          <TestPage />
        </Route>
        <Route path="*" >
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
