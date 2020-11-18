import React, {useState} from 'react';
import {Button, Modal,} from "react-bootstrap";

const LeaveModal = (props) => {
    const {showModal, showModalCallback} = props
    const [show, setShow] = useState(showModal);

    const handleClose = () => {
        setShow(false)
        showModalCallback(false)
    }
    return (
        <>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure you want to leave this event?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Once you leave you cannot join back.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Confirm</Button>
                    <Button variant="primary" onClick={handleClose}>Cancel</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default LeaveModal;