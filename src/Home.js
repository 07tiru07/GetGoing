import React from "react";
import { ReactComponent as WelcomeImg } from "./tst.svg";

const Home = () => {
  return (
    <div className="h-100 container-fluid d-flex align-items-center">
        <div className="col-1"></div>
        <div className="col-4"><WelcomeImg /></div>
        <div className="col-1"></div>
        <div className="col-5">
          <h3 style={{ color: "#808080" }}>Welcome to Get Going !!!</h3>
            <h4 style={{ color: "#444444" }}>Your Fitness Our Care</h4>
            <p>
            Here you will get to learn about sports and fitness, collaborate with others in the world,
            get rewarded recognized for the hard work.
            </p>
            <div className="d-flex">
              <div >
                <button>Sports</button>
              </div>
                <div className="pl-3">
                  <button >fitness</button>
                </div>
            </div>
        </div>
        <div className="col-1"></div>
    </div>
  );
};

export default Home;
