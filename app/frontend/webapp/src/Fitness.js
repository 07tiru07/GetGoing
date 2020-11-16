import React from 'react';
import {Link} from "react-router-dom";
import {Button, Card, Row} from "react-bootstrap";
import bicycleImg from './bicycle.jpg'
import basketballImg from './basketball.jpg'
import volleyballImg from './volleyball.jpeg'
import footballImg from './football.jpeg'
import hockeyImg from './hockey.jpg'
import runningImg from './running.jpg'

const cards = [
    {
        title: "Bicycle",
        text: `Some quick example text to build on the card title and make up the bulk of
  the card's content.`,
        image: bicycleImg
    }, {
        title: "Basketball",
        text: `Some quick example text to build on the card title and make up the bulk of
  the card's content.`,
        image: basketballImg
    }, {
        title: "Volleyball",
        text: `Some quick example text to build on the card title and make up the bulk of
  the card's content.`,
        image: volleyballImg
    }, {
        title: "Football",
        text: `Some quick example text to build on the card title and make up the bulk of
  the card's content.`,
        image: footballImg
    }, {
        title: "Hockey",
        text: `Some quick example text to build on the card title and make up the bulk of
  the card's content.`,
        image: hockeyImg
    }, {
        title: "Running",
        text: `Some quick example text to build on the card title and make up the bulk of
  the card's content.`,
        image: runningImg
    },
]

const Fitness = () => {
    return (
        <div className="container py-1">
            <Row>
                {cards.map((card, index) => (<div key={index} className="col-md-4 p-2">
                    <Card>
                        <Card.Header>
                            {card.title}
                        </Card.Header>
                        <Card.Body>
                            <Card.Img src={card.image} alt={card.title}/>
                            <Card.Text>
                                {card.text}
                            </Card.Text>

                            <Link to="/events">
                                <Button style={{marginRight: 20}}
                                        variant="primary">Events</Button>
                            </Link>
                            <Link to="/lessons">
                                <Button
                                    variant="primary">Learn</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </div>))}
            </Row>
        </div>
    );
};

export default Fitness;