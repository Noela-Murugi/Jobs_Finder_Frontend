import React from "react";
import "../Landing.css";
import { useNavigate } from "react-router-dom"

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing" >
      <div className="welcome-message">
        <h1>
          Find A <span className="anything">Job</span> That <br></br>
          <span className="anything"> Matches</span> <br></br> Your Passion
        </h1>
        <h3 className = "landingh3">
          Hand-picked opportunities to work from home, remotely, freelance,
          <br></br>
          full-time, part-time, contract and internships.
        </h3>
        <button className="button" onClick={() => {navigate(`/jobs`)}}>View Jobs</button>
      </div>
      <div className="hero-image">
        <img className = "landingimg"src="../landing-removebg-preview.jpg" alt=""/>
      </div>
    </div>
  );
}

export default Landing;
