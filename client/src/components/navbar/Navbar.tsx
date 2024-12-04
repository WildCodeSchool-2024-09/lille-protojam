import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
	return (
		<>
			<div className="Navbar">
				<img className="logo-navbar" src="/public/LogoFeedGood.png" alt="logo" />
				<h1>FEEL GOOD</h1>
				<Link to="/profile" className="profile">
					Profil
				</Link>
			</div>
		</>
	);
}

export default Navbar;
