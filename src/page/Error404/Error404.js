import React from "react";
import { Link } from "react-router-dom";
import Error404Image from "../../assets/png/original.png";
import Logo from "../../assets/png/logo.png";

import "./Error404.scss";

export default function Error404() {
  return (
    <div className="error404">
      <img src={Logo} alt="Twwitor" />
      <img src={Error404Image} alt="Error404Image" />
      <Link to="/">Volver a Inicio</Link>
    </div>
  );
}
