import React, {useState} from 'react';
import {Button, Modal, InputGroup, FormControl} from "react-bootstrap";

const JoinEventModal = (props) => {
    const {showModal, showModalCallback} = props
    const [show, setShow] = useState(showModal);

    const handleClose = () => {
        setShow(false)
        showModalCallback(false)
    }

    return (
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Please enter your E-Mail</Modal.Title>
            </Modal.Header>
            <Modal.Body><InputGroup className="mb-1">
                <FormControl
                    placeholder="user@example.com"
                    aria-label="E-Mail"
                    type="email"
                />
            </InputGroup>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Send
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
export default JoinEventModal