import React, { useState } from 'react';
import { Button, Modal, } from "react-bootstrap";

const WelcomePopup = (props) => {
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
    <Modal.Title><h4>I-Fit</h4>
            <h6>A step towards Eye Care, We make sure you blink once in every 5-6 seconds</h6></Modal.Title>
  </Modal.Header>
    <Modal.Body>
    <div>
        <p>As this tool is a digital platform so we care for your health download the tool to have better healthier life</p>
            <ul>
                <li>Tracks Eye movements and counts blinking rate.</li>
                <li>Store daily reports separately in a folder</li>
                <li>Timer starts only when face is detected so no possibility of incorrect results.</li>
                <li>Shows Alert Notification to user in case of below average blinking rate.</li>
                <li>Gives a detailed analysis of your blinking rate with graphs and remedies</li>
            </ul>


            </div>
            <a href='https://drive.google.com/u/0/uc?id=19gsyfVi5YX3AwfjXj97PE4hYnQI6JNaY&export=download' target="_blank">
Click Here to Download
    </a>
  </Modal.Body>
    <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>Ok, I got it</Button>
  </Modal.Footer>
</Modal>
</>
    );
}
export default WelcomePopup;