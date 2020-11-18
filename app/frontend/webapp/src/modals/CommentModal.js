import React, { useState } from 'react';
import { Button, Modal, } from "react-bootstrap";

const CommentModal = (props) => {
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
    <Modal.Title>Once people comment on your hosted events, they will show up here</Modal.Title>
  </Modal.Header>
    <Modal.Body>
    <p>Sample Comment:Overall nice) number of people invited could be limited to avoid crowd </p>
  </Modal.Body>
    <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>Ok, I got it</Button>
  </Modal.Footer>
</Modal>
</>
    );
}
export default CommentModal;