import { Link, NavLink } from "react-router-dom";
import Logo from "../Assets/kasa.png";
import "../Header/style.css";

function Header() {
  return (
    <header className="header">
        <Link to="/">
            <img src={Logo} alt="logo" className="kasaLogo"></img>
        </Link>
            <nav className="nav">
                {/* Here Navlink is a function from react-router that allows me to add a special link telling me when the tab is selected or not  */}
                <NavLink 
                className={({ isActive }) => 
                isActive ? 'nav-active' : 'nav-link'} to="/">Accueil</NavLink>
                <NavLink 
                className={({ isActive }) => 
                isActive ? 'nav-active' : 'nav-link'} to="/">A propos</NavLink>
            </nav>
    </header>
  );
}

export default Header;
