import { useContext, useState } from "react";
import "./Mood.css";
import { MoodContext } from "../../services/MoodContext";
import { Link } from "react-router-dom";

function Mood() {
  const [moodCount, setMoodcount] = useState(0);
  const { mood, setMood } = useContext(MoodContext);

  console.log("mooddd", mood);

  const handleClickHappy = () => {
    setMoodcount(moodCount - 1);
    setMood("happy");
  };

  const handleClickSad = () => {
    setMoodcount(moodCount + 1);
    setMood("sad");
  };

  const handleclickNeutral = () => {
    setMood("neutral");
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
            className="button-face button-sad"
            onClick={handleClickSad}
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
    </>
  );
}

export default Mood;
