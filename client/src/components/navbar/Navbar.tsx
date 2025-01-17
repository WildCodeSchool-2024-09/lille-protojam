import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
	return (
		<>
			<div className="Navbar">
				<img className="logo-navbar" src="/public/LogoFeedGood-removebg-preview.png" alt="logo" />
				<h1>FEEL GOOD</h1>
				<Link to="/about" className="about">
					About
				</Link>
			</div>
		</>
	);
}

export default Navbar;
