import React from "react";
import "../About.css";

function About() {
  return (
    <>
    <div>
      <h2 className="populr">About us</h2>
      <p className = "landing3">Ever had a tough time finding your next job?<br /> Well, look no further!<br />
            Job Finder is here to make your job hunting way simpler.
            <br /> Say goodbye to having to stress yourself, we've got you
            covered.
          </p>
      </div>
				<div className="part3">
					<div className="part3img">
						<img src="../happy.png" alt="" />
					</div>
					<div className="part3t">
						<div className="part3title tproduct">
							<h2>Why you should choose us.</h2>
							<p className="recomendation-dsn">
								Various employees use this site to advertise jobs.<br></br>  Thus its easier to get a job via this platform.
							</p>
							<div className="checks">
								<div className="checkr1">
									<div className="checkc">
										<span className="material-symbols-rounded">
											select_check_box
										</span>
										<label for="World Class">World class</label>
									</div>
									<div className="checkc">
										<span className="material-symbols-rounded">
											select_check_box
										</span>
										<label for="Trusted"> Trusted</label>
									</div>
								</div>
								<div className="checkr2">
									<div className="checkc">
										<span className="material-symbols-rounded">
											select_check_box
										</span>
										<label for="Affordable">Convenient</label>
									</div>
									<div className="checkc">
										<span className="material-symbols-rounded">
											select_check_box
										</span>
										<label for="Amenities">Easier</label>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>


      <div id="about" className="container-fluid">

      </div>

      <div className="products">
					<div className="tproduct2"><h2>Our Values</h2></div>
          <></>
          <br></br>

					<div className="card1">
						<div className="card1a">

							<div className="imgcard1ainfo">
								<h3>MISSION:</h3>
								<p className="missionp">
                Our mission is to make job hunting
        easy, <br></br> and also connecting YOU with millions of potential
        employers around the globe.<br></br>
        Relax you don't have to dread the process anymore!!
								</p>
							</div>
						</div>
						<div className="card1a">

							<div className="imgcard1ainfo">
								<h3>VISION:</h3>
								<p>
                Our vision at Job Finder is to help
          make job <br></br> hunting as effortless and smooth as possible. <br></br>Applies to both experienced veterans and beginners.
          <br></br> Find a job, at the comfort of your home.
								</p>
							</div>
						</div>
					</div>
				</div>
    <div className="fcontainer">
      <h2 className="top">Get Our Newsletter</h2>
      <p>To join the worldwide community</p>

      <input id="email" type="email" placeholder="Enter your email address" name="email" required></input>
      <button id="vbutton" className="btnn">Send Now</button>

    </div>
      <div className="row">
       
      </div>
    </>
  );
}
export default About;
