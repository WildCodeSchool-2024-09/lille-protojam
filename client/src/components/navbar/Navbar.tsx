import { Link } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { UserContext } from "../../services/UserContext";

function Navbar() {
	const { isUserConnected } = useContext(UserContext);
	console.log(isUserConnected);
	return (
		<>
			<div className="Navbar">
				<img
					className="logo-navbar"
					src="/public/LogoFeedGood.png"
					alt="logo"
				/>
				<h1>FEEL GOOD</h1>
				{isUserConnected ? (
					<Link to="/profile" className="profile">
						Profil
					</Link>
				) : (
					<p> Se connecter </p>
				)}
			</div>
		</>
	);
}

export default Navbar;
