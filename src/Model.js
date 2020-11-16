import React, { useState } from 'react';
import { Button, Modal, InputGroup, FormControl, showModal, showModalCallback, setShowModal } from "react-bootstrap";

const EventModal = (props) => {
    const { showModal, showModalCallback } = props
    const [show, setShow] = useState(showModal);

    const handleClose = () => {
        setShow(false)
        showModalCallback(false)
    }

    return (
        <>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Please enter your mail id</Modal.Title>
                </Modal.Header>
                <Modal.Body><InputGroup className="mb-1">
                    <FormControl
                        placeholder="Enter your mail id"
                        aria-label="Enter your mail id"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
                    </InputGroup.Append>
                </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Send
            </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Cancel
            </Button>
                </Modal.Footer>
            </Modal>
        
        </>
    );
}
export default EventModal