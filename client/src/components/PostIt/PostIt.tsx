import { useMemo } from "react";

interface PostItProps {
	postIt: {
		id: string;
		text: string;
	};
}

function PostIt({ postIt }: PostItProps) {
	const randomnumber = useMemo(() => Math.floor(Math.random() * 5), []);
const randomColor = useMemo(() => {
	const colorNumber = Math.floor(Math.random() * 4);
	if (colorNumber === 0) {
		return "#c9d4c6";
	} 
	if (colorNumber === 1) {
		return "#dfe1d3";
	} 
	if (colorNumber === 2) {
		return "#e8d7c7";
	} 
	if (colorNumber === 3) {
		return "#f1e7e6";
	}
}, []);
		
	
	return (
		<>
			<textarea
				key={postIt.id}
				className="post-it"
				style={{
					transform: `rotate(${randomnumber}deg)`, backgroundColor: `${randomColor}`
				}}
			>
				{postIt.text}
			</textarea>
		</>
	);
}

export default PostIt;
