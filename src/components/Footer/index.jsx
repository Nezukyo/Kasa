import Logo from "../../Assets/LOGO.png";
import "../Footer/style.css";

function Footer() {
  return (
    <footer className="footer">
        <div className="Kasa-footer">
            <img src={Logo} alt="logo-kasa" className="logoFooter"></img>
        </div>
            <div className="footer-txt">
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
    </footer>
  );
}

export default Footer;