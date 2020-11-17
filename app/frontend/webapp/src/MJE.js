import React from 'react';
import {Button, ButtonGroup, } from "react-bootstrap";

const MJE = () => {
    console.log("mje")
    return (
<div>
    <h1>My Registered Events</h1>
<ButtonGroup className="mr-2" aria-label="First group">
<Button href="/UpcomingE">Upcoming</Button>
  </ButtonGroup>
  <ButtonGroup className="mr-2" aria-label="Second group">
  <Button href="/PastE">Past</Button>
  </ButtonGroup>
</div>
   );
};

export default MJE;