import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import Header from "./../components/Header";
import NavigationBar from "./../components/NavigationBar";
import FavPage from "./../components/FavPage";
import QODPage from "./../components/QODPage";
import SearchPage from "./../components/SearchPage";
import NotFoundPage from "./../components/NotFoundPage";
export default () => (
  <BrowserRouter>
    <div>
      <Header />
      <NavigationBar />
      <Switch>
        <Route path="/" component={QODPage} exact={true} />
        <Route path="/search" component={SearchPage} />
        <Route path="/fav" component={FavPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);
