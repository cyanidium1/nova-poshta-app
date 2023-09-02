import React from "react";
import { Link } from "./Navigation.styled";

const Navigation = () => {
  return (
    <nav>
      <Link to="/">Трекінг</Link>
      <Link to="/about">Адреси відділень</Link>
    </nav>
  );
};

export default Navigation;
