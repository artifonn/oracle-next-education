import React from "react";
import "./Footer.css";
import Logo from "../assets/image.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Logo} alt="Alura Flix" />
      <small>
        Desenvolvido por <strong>Sérgio Artifon</strong>
      </small>
    </div>
  );
};

export default Footer;
