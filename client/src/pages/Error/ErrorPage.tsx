import "./Error.css";
import { Link } from "react-router-dom";

function ErrorPage() {
	return (
		<>
			<main className="error-main">
                <section className="smiley-error-container">
                    <p className="smiley-error"> 😫 </p>
                </section>
				<section className="error-section">
					Tu es perdu.e ? Ne t'inquiètes pas, chez nous, il y aura toujours une
					main tendue pour t'aider à retrouver ton chemin ❤️
					<div className="btn-div">
						<Link to="/profile" className="link-error">
							<button type="button" className="error-btn">
								Clique ici ✨
							</button>
						</Link>
					</div>
				</section>
			</main>
		</>
	);
}

export default ErrorPage;
