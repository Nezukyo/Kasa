import { Link } from "react-router-dom";
import React from "react";
import "../Error/style.css";

function Error() {
  return (
    <div className="error">
      <div className="error-404"><p className="number-404-style">404</p></div>
      <div className="message-404">
        <p className="error-message-style">Oups ! La page que vous demandez n'existe pas.</p>
      </div>
      <Link className="back-home" to="/">
        <p className="link-backhome-style">Retourner sur la page d'accueil</p>
      </Link>
    </div>
  );
}

export default Error;
