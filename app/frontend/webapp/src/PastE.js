import React, { useState } from 'react';
import { Button, Card, Row, ButtonGroup,} from "react-bootstrap";
import Comment2Modal from './Comment2Modal.js'
import Rating2Modal from './Rating2Modal.js'


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
            <h4>How helpful it was?</h4>
              
              <div className="col-12 d-flex py-3">
              <button
                      type="button"
                      id=""
                      className="btn w-33 btn-primary text-truncate"
                    //   style={{width: "100px"}}
                    onClick={() => setShowComment2Modal(true)} style={{ marginRight: 15 }}
                    >
                      Comment
                    </button>
              <button
                      type="button"
                      id=""
                      className="btn w-33 ml-2 btn-primary text-truncate"
                    //   style={{width: "100px"}}
                    onClick={() => setShowRating2Modal(true)} style={{ marginRight: 15 }}
                    >
                      Rate
                    </button>
              </div> 
                        </Card.Body>
                    </Card>
                </div>))}
            </Row>
            {showComment2Modal && <Comment2Modal showModal={showComment2Modal} showModalCallback={(status) => setShowComment2Modal(status)}/>}
            {showRating2Modal && <Rating2Modal showModal={showRating2Modal} showModalCallback={(status) => setShowRating2Modal(status)}/>}
             </div>
    );
};

export default PastE;
    
    