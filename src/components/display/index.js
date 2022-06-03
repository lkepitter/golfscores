import css from "./display.module.css";
import { useContext, useEffect, useState } from "react";
import EditButton from "../editButton";
import Modal from "../modal";
//import { scores } from "./data/scores";

function Display({ scores, setScores }) {
  const [editField, setEditField] = useState(0); //current field to display for editing
  const [addToField, setAddToField] = useState(); //list of items to add to the editing field
  const [loadedScore, setLoadedScore] = useState(scores[4]);
  const [scoreInput, setScoreInput] = useState("");
  //function to update scores data

  //const score = loadedScore; //quick messy fix for moving code around. Change naming of score vs loadedScore. Pick one!

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

  function onEdit(scoreIndex) {
    // switch (score) {
    //   case "Genre":
    //     field = "genre";
    //     break;
    //   case "Categories":
    //     field = "categories";
    //     break;
    //   case "Keywords/Tags":
    //     field = "keywords";
    //     break;
    //   default:
    //     break;
    // }
    //Take in the field to edit and change the state
    setEditField(scoreIndex);
    //display relevant modal
    console.log("Scoreindex ", editField);
    setAddToField(loadedScore[scoreIndex]);
    const modal = document.getElementById(editField + "Modal");
    console.log("Modal ", modal);
    modal.style.display = "block";
  }

  return (
    <div className={"display"}>
      <div className={css.display}>
        {/* <div className={css.image}></div> */}

        <div className={css.info}>
          {loadedScore
            ? loadedScore.map((hole, index) => {
                return (
                  <div className={css.hole}>
                    <p>Hole {index + 1}</p>
                    <div
                      className={css.holeScore}
                      onClick={() => {
                        onEdit(index);
                      }}
                    >
                      {hole}
                    </div>
                  </div>
                );
              })
            : ""}
        </div>

        <div className={css.info2}></div>

        <Modal
          editField={editField}
          loadedData={loadedScore}
          addToField={addToField}
          setAddToField={setAddToField}
          updateScore={updateScore}
          setLoadedScore={setLoadedScore}
          scoreInput={scoreInput}
          setScoreInput={setScoreInput}
        />

        <div className={css.genre}></div>

        <div className={css.description}></div>

        <div className={css.copies}>
          <div className={css.copyRow}></div>
        </div>
        <div className={css.category}></div>
        <div className={css.keywords}></div>
      </div>
    </div>
  );
}

export default Display;
