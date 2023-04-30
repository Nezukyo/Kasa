import React, { useState } from "react";
import arrowUp from "../../Assets/arrow-up.png";
import arrowDown from "../../Assets/arrow-down.png";
import "../Collapsible/style.css";

function Collapse({ title, content }) {
  /* Creating the hook that will allow me to open or close a tab, state put at false to begin with*/
  const [open, setOpen] = useState(false);
  const displayContent = () => {
    setOpen(!open);
  };

  return (
    <div className="collapse-section">
      <div className="collapse-title">
        <p className="title-style">{title}</p>
        <span className="arrow" onClick={displayContent}>
          {open ? (
             <img src={arrowDown} alt="iconUp" className="arrowUp"></img>
          ) : (
            <img src={arrowUp} alt="iconDown" className="arrowDown"></img>
          )}
        </span>
      </div>
      {/* If the collapse changes to true it displays the content */}
      <div className="collapse-dropdown">{open && <p className="content-style">{content}</p>}</div>
    </div>
  );
}

export default Collapse;
