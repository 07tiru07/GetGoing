import React, {useState} from 'react';
import Events from'./events_yoga';
import Learn from './learn_yoga.js';

const yoga = () => {
   
    const [past, setPast]  = useState(false);
    return (
<div className="container">
    <h1>Yoga</h1>
    <div className="col-12 px-0 col-sm-3 d-flex py-3">
    <button
                      type="button"
                      id=""
                      className="btn w-50 btn-primary"
                      onClick={()=>setPast(false)}
                    >
                      Events
                    </button>
                    <button
                      type="button"
                      id=""
                      className="btn screening-cancel-button w-50 ml-2 btn-secondary"
                      onClick={()=>setPast(true)}
                    >
                      Learn
                    </button>
    </div>
    <div className="pt-3">
  {past && <Events/>}
  {!past && <Learn/>}
    </div>
</div>
   );
};

export default yoga;