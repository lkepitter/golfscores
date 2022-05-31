import { useEffect, useState } from "react";
import "./App.css";
import Display from "./components/display";
import { scores } from "./data/scores";
import banner from "./golf.jpg";

function App() {
  const [loadedScore, setLoadedScore] = useState(scores[1]);
  //function to update scores data
  function updateScore(inField, withData) {
    //update the original data
    const scoreIndex = scores.findIndex(
      (score) => score.refId === loadedScore.refId
    );
    console.log("Updating", scores[scoreIndex][inField], "with", withData);
    scores[scoreIndex][inField] = withData;
    //change the state to update the display
    setLoadedScore(scores[scoreIndex]);
  }

  return (
    <div className="App">
      <img
        src={banner}
        alt="banner showing golf ball on a tee"
        className="banner"
      ></img>
      <Display
        score={loadedScore}
        setLoadedScore={setLoadedScore}
        updateScore={updateScore}
      />
    </div>
  );
}

export default App;
