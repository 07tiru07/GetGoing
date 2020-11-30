import React, { useState } from 'react';
import { Button, Card, Row,} from "react-bootstrap";
import CommentModal from './modals/CommentModal.js'
import RatingModal from './Rating2Modal.js'

const cards = [
    {
        title: "Event Name",
        date: "xx/xx/20xx",
        mode: "online/offline",
        location: "xyz",
        places: "123",
    },

    {
    title: "Event Name",
    date: "xx/xx/20xx",
    mode: "online/offline",
    location: "xyz",
    places: "123",

    },

    {
        title: "Event Name",
        date: "xx/xx/20xx",
        mode: "online/offline",
        location: "xyz",
        places: "123",
    },

    {
        title: "Event Name",
        date: "xx/xx/20xx",
        mode: "online/offline",
        location: "xyz",
        places: "123",
    },
]


const PastCE = () => {
        const [showCommentModal, setShowCommentModal] = useState(false)
        const [showRatingModal, setShowRatingModal] = useState(false)

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
                            <Card.Text>
                                {"Mode: " + card.mode}
                            </Card.Text>
                            <Card.Text>
                                {"Location: " + card.location}
                            </Card.Text>
                            <Card.Text>
                                {"Seats left: " + card.places}
                            </Card.Text>
                            <div className="d-flex col-12 col-md-8 px-0">
                            <Button
                            className="w-50" 
                            onClick={() => setShowCommentModal(true)}
                            style={{ marginRight: 15 }}
                            variant="primary">See Comments</Button>
                                
                            <Button
                            className="w-50" 
                            onClick={() => setShowRatingModal(true)}
                            style={{ marginRight: 15 }}
                            variant="primary">See Ratings</Button>
                            </div>
                      </Card.Body>
                    </Card>
                </div>))}
            </Row>
            {showCommentModal && <CommentModal showModal={showCommentModal} showModalCallback={(status) => setShowCommentModal(status)}/>}
            {showRatingModal && <RatingModal showModal={showRatingModal} showModalCallback={(status) => setShowRatingModal(status)}/>}
             </div>
    );
};

export default PastCE;