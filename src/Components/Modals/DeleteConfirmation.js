import React from "react";
import { useParams } from "react-router-dom";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const DeleteConfirmation = ({ show, handleClose, deleteHandler }) => {
  let { _id } = useParams();
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Would you like to delete this event?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => deleteHandler(_id)}>
            Remove
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DeleteConfirmation;
