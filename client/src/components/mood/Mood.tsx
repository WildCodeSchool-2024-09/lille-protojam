import { useState } from "react";
import "./Mood.css";

function Mood() {
  const [moodCount, setMoodcount] = useState(0);

  const handleClickHappy = () => {
    setMoodcount(moodCount - 1);
  };

  const handleclickNeutral = () => {
    if (moodCount <= 0) {
      setMoodcount(moodCount + 1);
    }
    setMoodcount(moodCount - 1);
  };

  const handleClickSad = () => {
    setMoodcount(moodCount + 1);
  };

  // jauge :
  // Entre -50 et 50
  // Jauge = total count = happy + sad
  // total <= 0 ? total + neutre : total - neutre

  return (
    <>
      <div className="mood-container">
        <div className="smiley-container">
          {/*  */}
          <button
            type="button"
            className="button-face button-happy"
            onClick={handleClickHappy}
          >
            <div className="smiley-happy">
              <div className=" face face-happy">
                <div className="eyes">
                  <div className="left-eye eye" />
                  <div className="right-eye eye" />
                </div>
                <div className=" mouth mouth-happy" />
              </div>
            </div>
          </button>
          {/*  */}
          <button
            type="button"
            className="button-face button-neutral"
            onClick={handleclickNeutral}
          >
            <div className="smiley-neutral">
              <div className="face face-neutral">
                <div className="eyes">
                  <div className="left-eye eye" />
                  <div className="right-eye eye" />
                </div>
                <div className="mouth mouth-neutral" />
              </div>
            </div>
          </button>
          {/*  */}
          <button
            type="button"
            className="button-face button-sad"
            onClick={handleClickSad}
          >
            <div className="smiley-sad">
              <div className="face face-sad">
                <div className="eyes">
                  <div className="left-eye eye" />
                  <div className="right-eye eye" />
                </div>
                <div className="mouth mouth-sad" />
              </div>
            </div>
          </button>
        </div>
        <div className="mood-gauge">
          <div className="total-count">
            <h3>Total : {moodCount}</h3>
          </div>
          <div className="left-side-pos" />
          <div className="center-pos" />
          <div className="right-side-pos" />
          <div className="cursor" />
        </div>
      </div>
    </>
  );
}

export default Mood;
