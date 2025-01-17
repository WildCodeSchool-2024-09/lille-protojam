import "./UsersProfile.css";
import { Link } from "react-router-dom";

function UsersProfile() {
	return (
		<>
			<main className="profile-container">
				<section className="action-container">
					<Link to="/profile-actions" className="link-profile">
						<p className="title-profile">Action du jour</p>
					</Link>
				</section>
				<section className="mood-container">
					<Link to="/profile-mood" className="link-profile">
						<p className="title-profile">Humeur du jour</p>
					</Link>
				</section>
				<section className="journal-container">
					<Link to="/profile-journal" className="link-profile">
						<p className="title-profile">Journal de gratitude</p>
					</Link>
				</section>
			</main>
		</>
	);
}

export default UsersProfile;
