import "./UsersProfile.css";

function UsersProfile() {
	return (
		<>
        <main className="profile-container">
			<section className="action-container">
				<p className="title-action">Action du jour</p>
			</section>
			<section className="mood-container">
				<p className="title-mood">Humeur du jour</p>
			</section>
			<section className="journal-container">
				<p className="title-journal">Journal de gratitude</p>
			</section>
        </main>
		</>
	);
}

export default UsersProfile;
