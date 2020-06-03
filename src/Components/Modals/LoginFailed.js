import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const LoginSuccess = ({ show, handleClose }) => {

    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login failed</Modal.Title>
                </Modal.Header>
                <Modal.Body>Incorrect username or password. Please enter again.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default LoginSuccess;
