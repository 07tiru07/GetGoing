import React, { useState } from 'react';
import { Button, Modal, InputGroup } from "react-bootstrap";
import {StarRatings,} from 'react-star-ratings';

const RatingModal = (props) => {
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
    <Modal.Title>Once people rate your hosted events out of 5 stars, Overall rating will show up here</Modal.Title>
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
    <Button variant="secondary" onClick={handleClose}>Ok, I got it</Button>
  </Modal.Footer>
</Modal>
</>
    );
}
export default RatingModal;