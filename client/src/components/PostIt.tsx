import { useMemo } from "react";

interface PostItProps {
	postIt: {
		id: string;
		text: string;
	};
}

function PostIt({ postIt }: PostItProps) {
	const randomnumber = useMemo(() => Math.floor(Math.random() * 5), []);
	return (
		<>
			<textarea
				key={postIt.id}
				className="post-it"
				style={{
					transform: `rotate(${randomnumber}deg)`,
				}}
			>
				{postIt.text}
			</textarea>
		</>
	);
}

export default PostIt;
