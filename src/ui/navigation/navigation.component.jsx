import React from "react";
import { Link } from "react-router-dom";
import "./navigation.styles.scss";

const NavLinks = (props) => (
  <div className='navigation'>
    <Link to="/popular">
      Популярни
    </Link>
    <Link to="/stats">
      Статистика
    </Link>
    <Link to="/tests">
      Моите тестове
    </Link>
    <Link to="/signin">
      Вход
    </Link>
  </div>
);

export default NavLinks;
