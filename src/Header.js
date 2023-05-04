// import { Link } from 'react-router-dom';
import Nav from "./Nav";
import logo from "./images/logo.png"

const Header = () => {
    return (
        <header id="header">
            <div className="header-logo">
                <img src={logo} alt="Little Lemon Logo" />
            </div>
            <Nav></Nav>
        </header>
    );
}

export default Header;