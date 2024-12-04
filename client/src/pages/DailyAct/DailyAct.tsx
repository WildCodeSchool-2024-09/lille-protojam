import "./DailyAct.css";
import { MoodContext } from "../../services/MoodContext.jsx";
import { useContext, useEffect, useState } from "react";
function DailyAct() {
  // RECUPERE LE TABLEAU VIA USE EFFECT OU LOADER
  const TAB = [
    {
      id: 1,
      humeur: "heureux",
      action: "Proposer à un ami de sortir pour partager cette bonne énergie.",
    },
    {
      id: 2,
      humeur: "heureux",
      action:
        "S'offrir un petit plaisir comme un dessert ou une activité favorite.",
    },
    {
      id: 3,
      humeur: "heureux",
      action: "Faire un compliment sincère à quelqu'un.",
    },
    {
      id: 4,
      humeur: "heureux",
      action: "Envoyer un message de gratitude à une personne importante.",
    },
    {
      id: 5,
      humeur: "heureux",
      action: "Faire du bénévolat pour répandre sa joie.",
    },
    {
      id: 6,
      humeur: "neutre",
      action: "Prendre un moment pour méditer ou respirer profondément.",
    },
    {
      id: 7,
      humeur: "neutre",
      action: "Organiser sa journée ou sa semaine à venir.",
    },
    {
      id: 8,
      humeur: "neutre",
      action: "Appeler un proche pour prendre des nouvelles.",
    },
    {
      id: 9,
      humeur: "neutre",
      action: "Lire quelques pages d'un livre inspirant ou motivant.",
    },
    {
      id: 10,
      humeur: "neutre",
      action:
        "Faire une promenade en plein air pour se reconnecter avec la nature.",
    },
    {
      id: 11,
      humeur: "triste",
      action: "Écrire ses pensées dans un journal pour mieux les comprendre.",
    },
    {
      id: 12,
      humeur: "triste",
      action: "Regarder un film ou écouter de la musique qui remonte le moral.",
    },
    {
      id: 13,
      humeur: "triste",
      action: "Préparer un repas réconfortant et nutritif.",
    },
    {
      id: 14,
      humeur: "triste",
      action: "Demander à un ami de passer du temps ensemble.",
    },
    {
      id: 15,
      humeur: "triste",
      action:
        "Se concentrer sur un petit objectif réalisable pour retrouver un sentiment d'accomplissement.",
    },
    {
      id: 16,
      humeur: "heureux",
      action:
        "Donner une bonne pourboire à un serveur ou à quelqu’un qui offre un service.",
    },
    {
      id: 17,
      humeur: "heureux",
      action:
        "Partager une bonne nouvelle ou un moment inspirant sur les réseaux sociaux.",
    },
    {
      id: 18,
      humeur: "neutre",
      action:
        "Faire un tri dans ses affaires et donner ce qui n'est plus utilisé.",
    },
    {
      id: 19,
      humeur: "neutre",
      action: "Envoyer un courrier ou un email à une vieille connaissance.",
    },
    {
      id: 20,
      humeur: "triste",
      action: "Prendre une douche chaude ou un bain pour se détendre.",
    },
  ];

  const { mood } = useContext(MoodContext);
  function RandomInArray(array) {
    const copy = array;
    const filteredTab = copy.filter((action) => action.humeur === mood);
    const result = [];
    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * filteredTab.length);
      result.push(filteredTab[randomIndex]);
      filteredTab.splice(randomIndex, 1);
    }
    console.log(result);
    return result;
  }
  const [randomTab, setRandomTab] = useState([]);

  useEffect(() => {
    setRandomTab(RandomInArray(TAB));
  }, []);
  console.log(mood);
  return (
    <main className="dailyact-main">
      <h1>Réalise une bonne action, pour toi ou ton prochain</h1>
      <section className="journal">
        {" "}
        <p>{mood}</p>
        {/* FILTRE SELON LE CONTEXTE HEUREUX/NEUTRE/TRISTE */}
        {randomTab.map((action) => (
          <div key={action.id}>
            <input type="checkbox" id={action.id} name={action.action} />
            <label for={action.id}> {action.action}</label>
          </div>
        ))}
      </section>
    </main>
  );
}
export default DailyAct;
