import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';

const Foo =()=> {

    const [rating, setRating] = useState(0)
      return (
          <div className="pt-3 containe-fluid col-12 col-md-12">
              <div >
                  <h3>My Registered Events</h3>
                </div>
                <div className="pt-2 d-flex">
                <button
                      type="button"
                      id=""
                      className="btn btn-primary text-truncate"
                      style={{width: "150px"}}
                      onClick={()=>{}}
                    >
                      Like
                    </button>
                    <button
                      type="button"
                      id=""
                      style={{width: "150px"}}
                      className="btn screening-cancel-button ml-2 btn-secondary text-truncate"
                      onClick={()=>{}}
                    >
                      Comment
                    </button>
                    <button
                      type="button"
                      id=""
                      style={{width: "150px"}}
                      className="btn screening-cancel-button ml-2 btn-secondary text-truncate"
                      onClick={()=>{}}
                    >
                      Share
                    </button>
                </div>
             <div className="">

            <div className="mt-4 tiles" style={{borderStyle: "solid"}}>
                <div className="px-3">

            <h2>Event Name</h2>
            <h4>How helpful it was?</h4>
              <StarRatings
                rating={rating}
                starRatedColor="blue"
                changeRating={(e)=>{setRating(e)}}
                numberOfStars={5}
                name='rating'
              />
              <div className="d-flex py-3">
              <button
                      type="button"
                      id=""
                      className="btn  btn-primary text-truncate"
                      style={{width: "100px"}}
                      onClick={()=>{}}
                    >
                      Submit
                    </button>
              <button
                      type="button"
                      id=""
                      className="btn ml-2 btn-primary text-truncate"
                      style={{width: "100px"}}
                      onClick={()=>{}}
                    >
                      Comment
                    </button>
                    <button
                      type="button"
                      id=""
                      style={{width: "100px"}}
                      className="btn screening-cancel-button ml-2 btn-secondary text-truncate"
                      onClick={()=>{}}
                    >
                      Share
                    </button>
              </div>
                </div>
            </div>
             </div>

          </div>
      )
}
export default Foo;