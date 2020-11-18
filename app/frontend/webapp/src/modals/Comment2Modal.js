import React, { useState } from 'react';
import { Button, Modal, InputGroup, FormControl } from "react-bootstrap";

const Comment2Modal = (props) => {
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
                    <Modal.Title>Pls enter your comment</Modal.Title>
                </Modal.Header>
                <Modal.Body><InputGroup className="mb-1">
                    <FormControl
                        placeholder="Enter your Comment"
                        aria-label="Enter your Comment"
                        aria-describedby="basic-addon2"
                    />
                </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Submit
            </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Cancel
            </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default Comment2Modal