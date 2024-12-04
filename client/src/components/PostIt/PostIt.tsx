import React, { useMemo } from "react";

interface PostItProps {
  postIt: {
    id: string;
    text: string;
  };
  setPostIt: React.Dispatch<React.SetStateAction<{ id: string; text: string }[]>>;
}

function PostIt({ postIt, setPostIt }: PostItProps) {
  const randomRotation = useMemo(() => Math.floor(Math.random() * 5), []);
  const randomColor = useMemo(() => {
    const colors = ["#c9d4c6", "#dfe1d3", "#e8d7c7", "#f1e7e6"];
    return colors[Math.floor(Math.random() * colors.length)];
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Post-it envoyé à un modérateur :)");
  };

  const handleDeletePostIt = (id: string) => {
    setPostIt((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div
      className="postit-container"
      style={{
        transform: `rotate(${randomRotation}deg)`,
        backgroundColor: randomColor,
      }}
    >
      <textarea
        key={postIt.id}
        className="post-it"
        defaultValue={postIt.text}
        style={{ backgroundColor: randomColor }}
        readOnly
      />
      <button className="submit-button" type="submit" onClick={handleSubmit}>
        Envoyer
      </button>
      <button
        className="close-button"
        type="button"
        onClick={() => handleDeletePostIt(postIt.id)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-trash"
          viewBox="0 0 16 16"
        >
          <title>Supprimer le post-it</title>
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
        </svg>
      </button>
    </div>
  );
}

export default PostIt;