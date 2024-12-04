import "./DailyAct.css";
import { MoodContext } from "../../services/MoodContext.jsx";
import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function DailyAct() {
  const { mood } = useContext(MoodContext);
  const tab = useLoaderData();

  const [randomTab, setRandomTab] = useState();

  console.log("TAB", tab);

  useEffect(() => {
    const result = RandomInArray(tab);
    console.log("result ", result);
    setRandomTab(result);
  }, [tab]);

  function RandomInArray(array) {
    console.log(mood);
    const filteredTab = array.filter((action) => action.mood === mood);
    console.log(filteredTab);
    const result = [];
    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * filteredTab.length);
      result.push(filteredTab[randomIndex]);
      filteredTab.splice(randomIndex, 1);
    }
    console.log("RESULT", result);
    return result;
  }

  return (
    <main className="dailyact-main">
      <h1>Réalise une bonne action, pour toi ou ton prochain</h1>
      <section className="journal">
        {" "}
        <p>{mood}</p>
        {/* FILTRE SELON LE CONTEXTE happy/neutral/TRISTE */}
        {randomTab?.map((action) => (
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
