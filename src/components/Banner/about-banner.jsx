import Background from "../../Assets/about-bg.png";
import "../Banner/about-banner.css";

function aboutBanner() {
  return (
    <div className="about-banner">
      <img src={Background} alt="about-banner" className="about-bg"></img>
    </div>
  );
}

export default aboutBanner;
