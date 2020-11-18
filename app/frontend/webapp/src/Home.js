import React, {useHi} from "react";
import {Container, Row, Col} from "react-bootstrap";
import {ReactComponent as WelcomeImg} from "./tst.svg";
import { useHistory } from 'react-router-dom';
import './App.css';


const Home = () => {
  const history = useHistory();
    return (
        <div>
            <div className="d-sm-flex vertical-center-container">
            <div className="col-0 col-sm-1"></div>
          <div className="col-12 col-sm-4 wel-img"><WelcomeImg /></div>
          <div className="col-0 col-sm-1"></div>
          <div className="col-12 col-sm-5 wel-header">
            <h3 style={{ color: "#808080" }}>Welcome to Get Going !!!</h3>
              <h4 style={{ color: "#444444" }}>Your Fitness Our Care</h4>
              <p>
              Here you will get to learn about sports and fitness, collaborate with others in the world,
              get rewarded recognized for the hard work.
              </p>
              <p>
              Here you will get to learn about sports and fitness, collaborate with others in the world,
              get rewarded recognized for the hard work.
              </p>
              <div className="screening-buttons d-sm-block">
                    <div className="d-flex screening-buttons-width screening-button-mobile">
                      {/* <Link to={allConditionsNotAgree ? '/attestationSuccess' : '/attestationFailure'}> */}
                      <button
                        type="button"
                        id=""
                        className="btn w-50 btn-primary text-truncate"
                        onClick={()=>history.push('/sports')}
                      >
                        Sports
                      </button>
                      <button
                        type="button"
                        id=""
                        className="btn screening-cancel-button w-50 ml-2 btn-secondary text-truncate"
                        onClick={()=>history.push('/fitness')}
                      >
                        Fitness
                      </button>
                    </div>
                  </div>
          </div>
          <div className="col-0 col-sm-1"></div>
            </div>
        </div>
    );
};

export default Home;
