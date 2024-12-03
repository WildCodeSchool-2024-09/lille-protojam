import { useState } from "react";
import "./Mood.css";

function Mood() {
  const [happyCount, setHappyCount] = useState(0);
  const [neutralCount, setNeutralCount] = useState(0);
  const [sadCount, setSadCount] = useState(0);

  const handleClickHappy = () => {
    setHappyCount(happyCount + 1);
  };

  const handleclickNeutral = () => {
    setNeutralCount(neutralCount + 1);
  };

  const handleClickSad = () => {
    setSadCount(sadCount + 1);
  };

  return (
    <>
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
            <div className="compteur">happy score : {happyCount}</div>
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
            <div className="compteur">neutral score : {neutralCount}</div>
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
            <div className="compteur">sad score : {sadCount}</div>
          </div>
        </button>
      </div>
    </>
  );
}

export default Mood;
