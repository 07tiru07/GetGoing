import React, {useState} from 'react';
import {Button, Card, Row, ButtonGroup,} from "react-bootstrap";
import Comment2Modal from './modals/JoinedCommentModal.js'
import Rating2Modal from './modals/JoinedRatingModal.js'

const cards = [
    {
        title: "Bicycle",
        date: "01/01/2020",
        type: "online",
        location: "Punjab, India",
        places: "15",
    },
    {
        title: "Football",
        date: "02/02/2020",
        type: "offline",
        location: "Kazan, Russia",
        places: "152",
    },
    {
        title: "Running",
        date: "03/03/2020",
        type: "online",
        location: "Delhi, India",
        places: "32",
    },
    {
        title: "Running",
        date: "05/04/2020",
        type: "offline",
        location: "Punjab, India",
        places: "4198",
    },
]


const PastEvents = () => {
    const [showComment2Modal, setShowComment2Modal] = useState(false)
    const [showRating2Modal, setShowRating2Modal] = useState(false)

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
                                {"Type: " + card.type}
                            </Card.Text>
                            <Card.Text>
                                {"Location: " + card.location}
                            </Card.Text>
                            <Card.Text>
                                {"Seats left: " + card.places}
                            </Card.Text>
                            <ButtonGroup className="mr-2" aria-label="First group">
                                <Button onClick={() => setShowComment2Modal(true)} style={{marginRight: 15}}
                                        variant="primary">Comment</Button>
                            </ButtonGroup>
                            <ButtonGroup className="mr-2" aria-label="Second group">
                                <Button onClick={() => setShowRating2Modal(true)} style={{marginRight: 15}}
                                        variant="primary">Rate</Button>
                            </ButtonGroup>
                        </Card.Body>
                    </Card>
                </div>))}
            </Row>
            {showComment2Modal &&
            <Comment2Modal showModal={showComment2Modal} showModalCallback={(status) => setShowComment2Modal(status)}/>}
            {showRating2Modal &&
            <Rating2Modal showModal={showRating2Modal} showModalCallback={(status) => setShowRating2Modal(status)}/>}
        </div>
    );
};

export default PastEvents;
