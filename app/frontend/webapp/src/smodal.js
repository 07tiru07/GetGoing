import React, { useState } from 'react';
import { Button, Modal, } from "react-bootstrap";
import {FaFacebookSquare, FaTwitterSquare, FaInstagramSquare} from 'react-icons/fa'
import {IconContext} from "react-icons"

const ShareModal = (props) => {
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
    <Modal.Title>Please select your means of Sharing</Modal.Title>
  </Modal.Header>
    <Modal.Body>

<IconContext.Provider value={{style: {fontSize: '50px'}}} >
 <a href= "https://www.facebook.com"><FaFacebookSquare/></a>
<a href= "https://twitter.com"><FaTwitterSquare/></a>
<a href= "https://www.instagram.com"><FaInstagramSquare/></a>
</IconContext.Provider>

  </Modal.Body>
    <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>Confirm</Button>
    <Button variant="primary" onClick={handleClose}>Cancel</Button>
  </Modal.Footer>
</Modal>
</>
    );
}
export default ShareModal;