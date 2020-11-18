import React from 'react';
import {Button, ButtonGroup, } from "react-bootstrap";

const MCE = () => {
    console.log("mce")
    return (
<div>
    <h1>My Created Events</h1>
<ButtonGroup className="mr-2" aria-label="First group">
<Button href="/UpcomingCE">Upcoming</Button>
  </ButtonGroup>
  <ButtonGroup className="mr-2" aria-label="Second group">
  <Button href="/PastCE">Past</Button>
  </ButtonGroup>
</div>
   );
};

export default MCE;