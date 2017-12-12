import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => {
  return (
    <Modal
      isOpen = {!!props.selectedOption}
      contentLabel = "Selected Option"
      onRequestClose = {props.handleDeleteSelectedOption}
      closeTimeoutMS = {200}
      className = "modal"
    >
      <h3 className = "modal-title">Hmmm... How about?</h3>
      {props.selectedOption && <p className = "modal-body">{props.selectedOption}</p>}
      <button 
        className = "button"
        onClick = {props.handleDeleteSelectedOption}>
        Okay!
      </button>
    </Modal>
  )
}

export default OptionModal;