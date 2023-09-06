import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<nav className="navbar">

			<input type="checkbox" id="nav-check"></input>
			<div className="nav-btn" aria-label="Navigation">
				<label htmlFor="nav-check">
					<span></span>
					<span></span>
					<span></span>
				</label>
			</div>

			<ul>
				<li><Link to="/">HOME</Link></li>
				<li><Link to="/about">ABOUT</Link></li>
				<li><Link to="/menu">MENU</Link></li>
				<li><Link to="/reservations">RESERVATIONS</Link></li>
				<li><Link to="/order online">ORDER ONLINE</Link></li>
				<li><Link to="/login">LOGIN</Link></li>
			</ul>
		</nav>
	);
}

export default Nav;