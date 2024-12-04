import { Link, useLoaderData } from "react-router-dom";
import "./homepage.css";
import { useEffect, useState } from "react";

function Homepage() {
	const citations = useLoaderData();
	console.log(citations);
	function randomToArray(citations) {
		const randomCitation =
			citations[Math.floor(Math.random() * citations.length)].citation;
		return randomCitation;
	}
	const [random, setRandom] = useState();
	useEffect(() => {
		const result = randomToArray(citations);
		setRandom(result);
	}, []);

	return (
		<main>
			<div className="button-container">
				<Link to="/login">
					<button type="button" className="button-connexion">
						Se connecter
					</button>
				</Link>
			</div>
			<div className="img-container">
				<img className="image-feelgood" src="feelgood.png" alt="" />
			</div>
			<div className="citation-container">
				<h1 className="title">Citation du jour</h1>
				<p className="text">{random}</p>
			</div>
		</main>
	);
}

export default Homepage;
