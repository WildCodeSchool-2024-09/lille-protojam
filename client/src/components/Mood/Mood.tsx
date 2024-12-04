import { useContext, useState } from "react";
import "./Mood.css";
import { MoodContext } from "../../services/MoodContext";
import { Link } from "react-router-dom";

function Mood() {
  const [moodCount, setMoodcount] = useState(0);
  const [moodText, setMoodText] = useState("test");
  const { mood, setMood } = useContext(MoodContext);

  const handleClickHappy = () => {
    setMoodcount(moodCount - 1);
    setMood("heureux");
  };


	const ScrollToText = () => {
		const textElement = document.getElementById("target-text");
		if (textElement) {
			textElement.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	const handleClickSad = () => {
		setMoodcount(moodCount + 1);
		setMood("sad");
		if (moodCount >= 1) {
			ScrollToText();
		}
	};


  const handleclickNeutral = () => {
    setMood("neutre");
    if (moodCount === 0) {
      setMoodcount(moodCount);
    }
    if (moodCount < 0) {
      setMoodcount(moodCount + 1);
    }
    if (moodCount > 0) {
      setMoodcount(moodCount - 1);
    }
  };

  const calculateCursorPosition = () => {
    return `${((moodCount + 10) / 20) * 100}%`;
  };

	return (
		<>
			<Link to="/profile-actions">
				<p>{mood}</p>
			</Link>
			<p className="container-explanation">
				<strong> Bienvenue dans ton espace de bien-être ! 🌟</strong>
				<br />
				Ici, tu peux explorer et choisir le mood qui te ressemble le plus en ce
				moment. Imagine ces trois ambiances comme des fenêtres ouvertes sur ton
				état d’esprit : chacune a sa couleur, son énergie et son intention. Une
				fois ton mood sélectionné, il se reflètera dans ta mood barre — une
				sorte de thermomètre bienveillant qui te permet de visualiser ton humeur
				du moment. C’est un outil tout simple pour t’aider à te connecter à
				toi-même, dans un espace où tes émotions ont toute leur place. Prends le
				temps de sentir ce qui résonne le mieux avec toi. Chaque choix est une
				belle façon de dire : "Aujourd’hui, je m’écoute et je prends soin de
				moi." 💛
			</p>
			<div className="mood-container">
				<div className="smiley-container">
					{/* Happy face */}
					<button
						type="button"
						className="button-face button-happy"
						onClick={handleClickHappy}
					>
						<img
							className="img-button"
							src="../happy-face-image.png"
							alt="happy face"
						/>
					</button>
					{/* Neutral face */}
					<button
						type="button"
						className="button-face button-neutral"
						onClick={handleclickNeutral}
					>
						<img
							className="img-button"
							src="../neutral-face-image.png"
							alt="happy face"
						/>
					</button>
					{/* Sad face */}
					<button
						type="button"
						onClick={handleClickSad}
						className="button-face button-sad"
					>
						<img
							className="img-button"
							src="../sad-face-image.png"
							alt="happy face"
						/>
					</button>
				</div>
				{/* Mood gauge */}
				<div className="gauge gradient-bar">
					<div className="cursor" style={{ left: calculateCursorPosition() }} />
				</div>
			</div>
			{moodCount > 0 ? (
				<p className="container-warning" id="target-text">
					⚠️
					<br />
					Ton mood semble un peu triste en ce moment, et c’est totalement OK.
					Tout le monde traverse des moments difficiles. L’important, c’est de
					te rappeler que tu n’es pas seul·e et qu’il y a toujours des
					solutions, des mains tendues pour t’aider à aller mieux.
					<br />
					<ul>
						Voici quelques petits gestes pour prendre soin de toi :
						<li>
							Prends un moment pour respirer profondément, ça peut apaiser
							l’esprit.
						</li>
						<li>Écris ce que tu ressens, même quelques mots.</li>
						<li>
							Parle à une personne de confiance, que ce soit un ami, un proche
							ou un professionnel.
						</li>
					</ul>
					Si tu ressens le besoin de parler à quelqu’un tout de suite, voici des
					numéros d’urgence où des personnes bienveillantes sont prêtes à
					t’écouter :
					<br />
					<strong>Soutien Dépression (SOS Amitié) : 09 72 39 40 50</strong>
					<br />
					<strong>
						Suicide Écoute : 01 45 39 40 00 (24h/24 et 7j/7) Numéro national
					</strong>
					<br />
					<strong>Prévention suicide : 3114 Prends soin de toi. </strong>
					<br />
					Chaque étape compte, et on croit en ta capacité à aller mieux.
					<br />💛
				</p>
			) : (
				""
			)}
		</>
	);

}

export default Mood;
