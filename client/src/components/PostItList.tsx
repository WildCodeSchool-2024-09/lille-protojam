import { useState } from "react";
import PostIt from "./PostIt";

function PostItList() {
	const [postIts, setPostIts] = useState<{ id: string; text: string }[]>([]);
	const [inputValue, setInputValue] = useState("");

	const handleAddPostIt = () => {
		if (inputValue.trim() !== "") {
			setPostIts([...postIts, { id: Date.now().toString(), text: inputValue }]);
			setInputValue("");
		}
	};
	return (
		<>
			<div className="input-container">
				<textarea
					className="input-postit"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					placeholder="Écris ton moment positif ici..."
					onKeyUp={(e) => {
						if (e.key === "Enter") handleAddPostIt();
					}}
				/>
				<button
					id="creaPostIt"
					className="icon-postit"
					type="button"
					onClick={handleAddPostIt}
				>
					Ajouter un post-it
				</button>
			</div>
			<form className="post-it-board">
				{postIts.map((postIt) => (
					<PostIt key={postIt.id} postIt={postIt} />
				))}
			</form>
		</>
	);
}

export default PostItList;
