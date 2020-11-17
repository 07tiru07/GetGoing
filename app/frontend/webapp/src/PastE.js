import React, { useState } from 'react';
import {Card, ButtonGroup,Button} from "react-bootstrap";
import StarRatings from 'react-star-ratings';
 const PastE =()=> {
        const [rating, setRating] = useState(0)
     return (
       <div className>
    <Card>
        <Card.Title>Trinity Cycling Championship</Card.Title>
        <Card.Body>
        <Card.Text>How helpful it was?
        <StarRatings
                rating={rating}
                starRatedColor="blue"
                changeRating={(e)=>{setRating(e)}}
                numberOfStars={5}
                name='rating'
              />
        </Card.Text>

    <ButtonGroup className="mr-2" aria-label="First group">
    <Button>Like</Button></ButtonGroup>
    <ButtonGroup className="mr-2" aria-label="Second group">
    <Button>Comment</Button></ButtonGroup>
    <ButtonGroup aria-label="Third group">
    <Button>share</Button></ButtonGroup>.
    </Card.Body>
    </Card>
        </div>  
        );
    };


export default PastE;
    
    