import React, { useState } from 'react';
import { Button, Card, Row,InputGroup,} from "react-bootstrap";
import StarRatings from 'react-star-ratings';
import Comment2Modal from './modals/Comment2Modal.js';
import PastJoinedShareModal from './PastJoinedShareModal.';



const cards = [
    {
        title: "Event Name",
        date: "01/01/2020",

    },
    {
        title: "Event Name",
        date: "02/02/2020",

    },
    {
        title: "Event Name",
        date: "03/03/2020",

    },
    {
        title: "Event Name",
        date: "05/04/2020",

    },
]


const PastE = () => {
        const [showComment2Modal, setShowComment2Modal] = useState(false)
        const [showPastJoinedShareModal, setShowPastJoinedShareModal] = useState(false)
        const [rating, setRating] = useState(0);


    return (
        <div className="container py-1">
            <Row>
                {cards.map((card, index) => (<div key={index} className="col-md-6 p-1">
                    <Card>
                        <Card.Header>
                            {card.title}
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                {"Date: " + card.date}
                            </Card.Text>
            <h4>How helpful it was?</h4>
            <InputGroup className="mb-1">
                <StarRatings
                rating={rating}
                starRatedColor="blue"
                changeRating={(e)=>{setRating(e)}}
                numberOfStars={5}
                name='rating'
              />
                </InputGroup>
                <div className="d-flex col-12 col-md-8 px-0">
              <button
                      type="button"
                      id=""
                      variant="primary"
                      className="btn w-50 btn-primary text-truncate"
                    //   style={{width: "100px"}}
                    onClick={() => setShowComment2Modal(true)} style={{ marginRight: 15 }}
                    >
                      Comment
                            
                    </button>
                    <button
                      type="button"
                      id=""
                      variant="primary"
                      className="btn w-50 btn-primary text-truncate"
                    //   style={{width: "100px"}}
                    onClick={() => setShowPastJoinedShareModal(true)} style={{ marginRight: 15 }}
                    >
                      Share
                    </button>
                    
              </div>
                        </Card.Body>
                    </Card>
                </div>))}
            </Row>
            {showComment2Modal && <Comment2Modal showModal={showComment2Modal} showModalCallback={(status) => setShowComment2Modal(status)}/>}
            {showPastJoinedShareModal && <PastJoinedShareModal showModal={showPastJoinedShareModal} showModalCallback={(status) => setShowPastJoinedShareModal(status)}/>}
             </div>
    );
};

export default PastE;

