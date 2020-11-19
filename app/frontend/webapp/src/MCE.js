import React, {useState} from 'react';
import PastCE from './PastCE'
import UpcomingCE from './UpcomingCE'

const MCE = () => {
    console.log("mce")
    const [pastce, setPastce]  = useState(false);
    return (
<div className="container">
    <h1>My Created Events</h1>
    <div className="col-12 px-0 col-sm-3 d-flex py-3">
    <button
                      type="button"
                      id=""
                      className="btn w-50 btn-primary"
                      onClick={()=>setPastce(false)}
                    >
                      Upcoming
                    </button>
                    <button
                      type="button"
                      id=""
                      className="btn screening-cancel-button w-50 ml-2 btn-secondary"
                      onClick={()=>setPastce(true)}
                    >
                      Past
                    </button>
    </div>
    <div className="pt-3">

  {pastce && <PastCE/>}
  {!pastce && < UpcomingCE/>}
    </div>
</div>
   );
};

export default MCE;