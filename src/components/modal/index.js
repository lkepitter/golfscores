// import React, { useState } from "react";
import css from "./modal.module.css";
import * as allData from "../../data/bookFields.js";
import { convertPluralToSingular } from "../../utilities/functions.js";
import { useState } from "react";

function Modal({
  editField,
  loadedData,
  addToField,
  setAddToField,
  updateScore,
}) {
  const [scoreInput, setScoreInput] = useState("");
  function closeModal() {
    const modal = document.getElementById(editField + "Modal");
    const span = document.getElementsByClassName(css.modalClose)[0];
    const button = document.getElementById("modalClose");
    // When the user clicks on <span> (x), click outside modal or click cancel button, close the modal
    span.onclick = function () {
      modal.style.display = "none";
    };
    window.onclick = function (event) {
      console.log("Window clicked");
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
    button.onclick = function () {
      modal.style.display = "none";
    };
    setScoreInput("");
  }

  function removeFrom(state, toRemove) {
    console.log("index: ", state.indexOf(toRemove));
    const index = state.indexOf(toRemove);
    console.log(`Removed ${toRemove} from ${editField}`);
    console.log("State is now: ", [
      ...state.slice(0, index),
      ...state.slice(index + 1),
    ]);
    setAddToField([...state.slice(0, index), ...state.slice(index + 1)]);
  }
  function addTo(state, toAdd) {
    //only add if it's nor already on the list
    if (!state.includes(toAdd)) {
      console.log(`Added ${toAdd} to ${editField}`);
      console.log("State is now: ", [...state, toAdd]);
      setAddToField([...state, toAdd]);
    }
  }

  function onInput(event) {
    setScoreInput(event.target.value);
    console.log("New Score is: ", event.target.value);
  }

  function confirmInput(input) {
    //check it's an appropriate number
    //convert input to a number and check it's not NaN
    if (input === "") {
      closeModal();
    } else if (isNaN(parseInt(input))) {
      alert("Please enter a number.");
      console.log("Please enter a number.", typeof input);
      setScoreInput("");
      const modal = document.getElementById(editField + "Modal");
      modal.style.display = "block";
    } else {
      setScoreInput("");
      updateScore(editField, input);
      closeModal();
    }
  }

  return (
    <div id={`${editField}Modal`} className={css.modal} display="block">
      <div className={css.modalContent}>
        <div className={css.modalHead}>
          <span className={css.modalClose} onClick={() => closeModal()}>
            &times;
          </span>
          {editField > -1 ? `Hole ${editField + 1}` : ""}
        </div>
        <input
          placeholder={loadedData[editField]}
          value={scoreInput}
          onChange={onInput}
          className={css.current}
        ></input>
        <div className={css.add}></div>
        <div className={css.currentFoot}>
          <button
            id="modalClose"
            onClick={() => {
              confirmInput(scoreInput);
            }}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
export default Modal;
