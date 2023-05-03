// import { Link } from 'react-router-dom';
import { BsFacebook,  BsSnapchat, BsTwitter} from "react-icons/bs";
import logofooter from "./images/logofooter.png"

const Footer = () => {
    let iconStyles = { color: "495E57", fontSize: "1.5em", margin: "0.2em" };
    return (
        <footer id="footer">
            <div className="footer-logo">
                <img src={logofooter} width={"80%"} alt="little lemon logo" />
            </div>
            <div className="footer-menu">
                <h3>Page Links</h3>
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
                <p>944 W North Ave, Chicago</p>
                <p>+1 123-456-7890</p>
                <p>littlelemon@example.com</p>
                <p><BsFacebook style={iconStyles}/> <BsSnapchat style={iconStyles}/> <BsTwitter style={iconStyles}/></p>
            </div>
        </footer>
    );
}

export default Footer;