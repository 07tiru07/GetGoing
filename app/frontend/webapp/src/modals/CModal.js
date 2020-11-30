import React, { useState } from 'react';
import { Button, Modal, } from "react-bootstrap";

const CancelModal = (props) => {
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
    <Modal.Title>Are you sure you want to cancel this event?</Modal.Title>
  </Modal.Header>
    <Modal.Body>
    <p>Once you cancel you cannot host back directly </p>
  </Modal.Body>
    <Modal.Footer>
      
    <Button
    className="w-10"
    variant="primary"
    style={{ marginRight: 10 }}
    onClick={handleClose}>Confirm</Button>
    <Button
    className="w-10"
    variant="secondary"
    style={{ marginRight: 10 }}
    onClick={handleClose}>Close</Button>
  </Modal.Footer>
</Modal>
</>
    );
}
export default CancelModal;