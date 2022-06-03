import { useEffect, useState } from "react";
import "./App.css";
import Display from "./components/display";
import { scores } from "./data/scores";
import banner from "./golf.jpg";

function App() {
  const [scoresData, setScoresData] = useState(scores);

  return (
    <div className="App">
      <img
        src={banner}
        alt="banner showing golf ball on a tee"
        className="banner"
      ></img>
      <Display scores={scoresData} setScores={setScoresData} />
    </div>
  );
}

export default App;
