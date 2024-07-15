import React from "react";
import logo from "../assets/image.png";
import logoAlura from "../assets/aluraLogo.png";
import "./Header.css";

export default () => {
  return (
    <header className="Header">
      <a href="/">
        <img src={logo} alt="AluraFlix" />
      </a>
      <a
        href="https://www.alura.com.br/"
        target="_blank"
        alt="Alura"
        className="logo"
      >
        <img src={logoAlura} alt="Alura" />
      </a>
    </header>
  );
};
