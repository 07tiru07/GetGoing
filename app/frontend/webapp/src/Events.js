import React, {useState} from 'react';
import {Button, Card, Row, Alert} from "react-bootstrap";
import JoinEventModal from './modals/JoinEventModal.js'
import CreateEventModal from "./modals/CreateEventModal";
import {connect} from "react-redux";
import {setSport} from "./store/actions";

const cards = [
    {
        title: "with friends",
        date: "01/01/2020",
        type: "online",
        location: "Punjab, India",
        places: "15",
    },
    {
        title: "for beginners",
        date: "02/02/2020",
        type: "offline",
        location: "Kazan, Russia",
        places: "152",
    },
    {
        title: "Sirius AIM",
        date: "03/03/2020",
        type: "online",
        location: "Delhi, India",
        places: "32",
    },
    {
        title: "Sport date",
        date: "05/04/2020",
        type: "offline",
        location: "Punjab, India",
        places: "4198",
    },
]


const Events = ({selected_sport, setSport}) => {
    const [state, setState] = useState({joinModal: false, createModal: false, showmess: false, showmesscreate: false})

    return (
        <div className="container py-1">
            <div className="d-flex col-12 col-md-8 px-0 my-3">
                <h3>{selected_sport}</h3>
                <Button onClick={() => setState({...state, createModal: true})} className="w-50 ml-5"
                        variant="outline-primary">Create my own event</Button>
            </div>
            {state.showmess && <div>
            <Alert variant="success" onClose={() => setState({...state, showmess: false})} dismissible>
        <Alert.Heading>Thank you !!</Alert.Heading>
        <p>
          Thank you for joining the event have a nice journey
        </p>
      </Alert>
            </div>}
            {state.showmesscreate && <div>
            <Alert variant="success" onClose={() => setState({...state, showmesscreate: false})} dismissible>
        <Alert.Heading>Thank you !!</Alert.Heading>
        <p>
          Your event has been created and posted in events section.
        </p>
      </Alert>
            </div>}
            <Row>
                {cards.map((card, index) => (<div key={index} className="col-md-6 p-1">
                    <Card>
                        <Card.Header>
                            {selected_sport+" "+card.title}
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
                            <div className="d-flex col-12 col-md-8 px-0">

                                <Button className="w-50" onClick={() => {
                                    //add about submit events
                                    setState({...state, joinModal: true});
                                }} style={{marginRight: 15}}
                                        variant="primary">Join</Button>
                                <Button className="w-50" variant="primary">Recommend</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>))}
            </Row>

            {state.joinModal &&
            <JoinEventModal showModal={state.joinModal}
                            showModalCallback={(status) => setState({...state, joinModal: status, showmess: true})}/>}


            {state.createModal &&
            <CreateEventModal showModal={state.createModal}
                              showModalCallback={(status) => setState({...state, createModal: status, showmesscreate: true})}
                              saveCallback={(event) => cards.unshift(event)}
            />}
        </div>
    );
};

const mapStateToProps = (state) => ({
    selected_sport: state.selected_sport
});

const mapDispatchToProps = (dispatch) => ({
    setSport: (sport) => dispatch(setSport(sport))
})

export default connect(mapStateToProps, mapDispatchToProps)(Events);