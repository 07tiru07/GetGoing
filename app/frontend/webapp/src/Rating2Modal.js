import React, { useState } from 'react';
import { Button, Modal, InputGroup, } from "react-bootstrap";
import StarRatings from 'react-star-ratings';

const Rating2Modal = (props) => {
    const { showModal, showModalCallback } = props
    const [show, setShow] = useState(showModal);
    const [rating, setRating] = useState(0);

    const handleClose = () => {
        setShow(false)
        showModalCallback(false)
    }

    return (
        <>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Please enter your rating</Modal.Title>
                </Modal.Header>
                <Modal.Body><InputGroup className="mb-1">
                <StarRatings
                rating={rating}
                starRatedColor="blue"
                changeRating={(e)=>{setRating(e)}}
                numberOfStars={5}
                name='rating'
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
export default Rating2Modal