import css from "./display.module.css";
import { useEffect, useState } from "react";
import EditButton from "../editButton";
import Modal from "../modal";

function Display({ score, updateScore }) {
  const [editField, setEditField] = useState(0); //current field to display for editing
  const [addToField, setAddToField] = useState(); //list of items to add to the editing field

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
    setAddToField(score[scoreIndex]);
    const modal = document.getElementById(editField + "Modal");
    console.log("Modal ", modal);
    modal.style.display = "block";
  }

  return (
    <div className={"display"}>
      <div className={css.display}>
        {/* <div className={css.image}></div> */}

        <div className={css.info}>
          {score
            ? score.map((hole, index) => {
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
          loadedData={score}
          addToField={addToField}
          setAddToField={setAddToField}
          updateScore={updateScore}
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
