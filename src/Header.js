import Nav from "./Nav";

const Header = () => {
	return (
		<header id="header" className="column-grid">
			<div className="header-logo">
				<img src='images/logo.png' alt="Little Lemon Logo" />
			</div>
			<Nav />
		</header>
	);
}

export default Header;