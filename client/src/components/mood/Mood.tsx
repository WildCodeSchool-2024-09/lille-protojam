import { useState } from "react";
import "./Mood.css";

function Mood() {
  const [moodCount, setMoodcount] = useState(0);

  const handleClickHappy = () => {
    setMoodcount(moodCount - 1);
  };

  const handleClickSad = () => {
    setMoodcount(moodCount + 1);
  };

  const handleclickNeutral = () => {
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
      <div className="mood-container">
        <div className="smiley-container">
          {/* Happy face */}
          <button
            type="button"
            className="button-face button-happy"
            onClick={handleClickHappy}
          >
            <img src="../happy-face-image.png" alt="happy face" />
          </button>
          {/* Neutral face */}
          <button
            type="button"
            className="button-face button-neutral"
            onClick={handleclickNeutral}
          >
            <img src="../neutral-face-image.png" alt="happy face" />
          </button>
          {/* Sad face */}
          <button
            type="button"
            className="button-face button-sad"
            onClick={handleClickSad}
          >
            <img src="../sad-face-image.png" alt="happy face" />
          </button>
        </div>
        {/* Mood gauge */}
        <div className="gauge gradient-bar">
          <div className="cursor" style={{ left: calculateCursorPosition() }} />
        </div>
        <h3>Total : {moodCount}</h3>
      </div>
    </>
  );
}

export default Mood;
