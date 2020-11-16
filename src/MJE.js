import React from 'react';
import {Button, } from "react-bootstrap";

const MJE = () => {
    console.log("mje")
    return (
<div>
    <h1>My Registered Events</h1>
<Button href="/UpcomingE">Upcoming</Button>
<Button href="/PastE">Past</Button>
</div>
   );
};

export default MJE;