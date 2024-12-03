import { useState } from "react";

function PostIt() {
	const [postIts, setPostIts] = useState([]);
	const [inputValue, setInputValue] = useState("");

	const handleAddPostIt = () => {
		if (inputValue.trim() !== "") {
			setPostIts([...postIts, inputValue]);
			setInputValue(""); // Réinitialise l'input
		}
	};
	return (
		<>
			<div className="input-container">
				<input
					className="input-postit"
					type="text"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					placeholder="Écris ton moment positif ici..."
				/>
				<button
					id="creaPostIt"
					className="icon-postit"
					type="button"
					onClick={handleAddPostIt}
                    onKeyUp={(e) => { if (e.key === "Enter") handleAddPostIt(); }}
				
				>
					Ajouter un post-it
				</button>
			</div>
			<div className="post-it-board">
				{postIts.map((postIt, index) => (
					<div key={index} className="post-it">
						{postIt}
					</div>
				))}
			</div>
		</>
	);
}

export default PostIt;
