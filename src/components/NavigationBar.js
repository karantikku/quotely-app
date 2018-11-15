import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <NavLink to="/" activeClassName="is-active" exact={true}>
      QOD
    </NavLink>
    <NavLink to="/search" activeClassName="is-active">
      Search
    </NavLink>
    <NavLink to="/fav" activeClassName="is-active">
      Fav
    </NavLink>
  </header>
);

export default Header;
