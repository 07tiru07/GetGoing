import React from 'react';
import {Button, Row,} from "react-bootstrap";
import {Link} from "react-router-dom";

const JoinedEvents = () => {
    return (
        <div >
            <Row>
                <Link to="/upcoming_events">
                    <Button variant="outline-primary" style={{margin: 30, padding: 30, minWidth: 500}}>Upcoming Events</Button>
                </Link>

                <Link to="/past_events">
                    <Button variant="outline-primary" style={{margin: 30, padding: 30, minWidth: 500}}>Past Events</Button>
                </Link>
            </Row>
        </div>
    );
};

export default JoinedEvents;