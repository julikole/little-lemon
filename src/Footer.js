// import { Link } from 'react-router-dom';
import logofooter from "./images/logofooter.png"

const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer-logo">
                <img src={logofooter} width={"80%"} alt="little lemon logo" />
            </div>
            <div className="footer-menu">
                <h3>Site Links</h3>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Reservations</a></li>
                    <li><a href="#">Order online</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </div>
            <div className="footer-contact">
                <h3>Contact</h3>
                <p>Address</p>
                <p>Address</p>
                <p>Address</p>
            </div>
            <div className="footer-socials">
                <h3>Social Media</h3>
            </div>
        </footer>
    );
}

export default Footer;