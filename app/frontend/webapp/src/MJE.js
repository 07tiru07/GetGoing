import React, {useState} from 'react';
import PastEvent from './PastE';
import UpcomingEvent from './UpcomingE';

const MJE = () => {
    console.log("mje")
    const [past, setPast]  = useState(false);
    return (
<div className="container">
    <h1>My Registered Events</h1>
    <div className="col-12 px-0 col-sm-3 d-flex py-3">
    <button
                      type="button"
                      id=""
                      className="btn w-50 btn-primary"
                      onClick={()=>setPast(false)}
                    >
                      Upcoming
                    </button>
                    <button
                      type="button"
                      id=""
                      className="btn screening-cancel-button w-50 ml-2 btn-secondary"
                      onClick={()=>setPast(true)}
                    >
                      Past
                    </button>
    </div>
    <div className="pt-3">

  {past && <PastEvent/>}
  {!past && < UpcomingEvent/>}
    </div>
</div>
   );
};

export default MJE;