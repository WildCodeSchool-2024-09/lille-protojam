import "./Journal.css";
import PostIt from "../components/PostIt/PostItList";

function Journal() {
	return (
		<>
			<h2 className="journal-title">
				Note les petits moments positifs qui t'ont marqués dans ta journée
			</h2>
			<div className="board-container">
				<PostIt />
			</div>
		</>
	);
}

export default Journal;
