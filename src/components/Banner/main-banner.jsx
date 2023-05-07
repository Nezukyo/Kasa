import "../Banner/main-banner.css";
import Background from "../../Assets/home-bg.png";

function bannerMain() {
  return (
    <div className="Main-banner">
      <img src={Background} alt="main-bg" className="main-bg"></img>
        <p className="custom-txt"><span>Chez vous,</span><span> partout et ailleurs</span></p>
      </div>
  );
}

export default bannerMain;
