import { Link } from "react-router-dom";
import React from "react";
import "../Error/style.css";

function Error() {
  return (
    <div className="error">
      <div className="error-404">404</div>
      <div className="message-404">
        Oups ! La page que vous demandez n'existe pas.
      </div>
      <Link className="back-home" to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default Error;
