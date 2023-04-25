import "../Banner/main-banner.css";
import Background from "../../Assets/home-bg.png";

function bannerMain() {
  return (
    <div className="Main-banner">
      <img src={Background} alt="main-bg" className="main-bg"></img>
        <p className="custom-txt">Chez vous, partout et ailleurs</p>
      </div>
  );
}

export default bannerMain;
