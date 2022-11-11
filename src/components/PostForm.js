import React, { useState } from "react"
import Axios from "axios";
import "../Form.css";
import { useNavigate } from "react-router-dom";

function Form({ setData, data }) {

  const navigate = useNavigate();

  function handleInputChange (event){
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
  });
  }

  const [formData, setFormData] = useState({
    title:"",
    location:"",
    deadline: "",
    salary: 0,
    image:"",
    requirements:"",
    description:""
  })

  function handleFormSubmit(e){
    e.preventDefault()
    fetch(`http://127.0.0.1:9292/jobs`, {
        method: "POST",
        headers: {
            "content-type":"application/json"
        },
        body: JSON.stringify(formData)
    })
    .then((res) => res.json())
    // .then((item) => addToProducts(item))
    // setTimeout(() => {
    //     navigate(`/products`)
    //   }, 2000);
  }


  return (
    <div className="form">
      <div className="signup-container">
        <div className="left-container">
          <h1>Jobs Finder</h1>
        </div>
        <div className="right-container">
          <header>
            <h1>Post a New Job </h1>
            <div className="set">
            </div>
            <div className="set">

            <div className="pets-name">
                <label htmlFor="events-name">Job Title</label>
                <input
                  id="events-name"
                  placeholder="Title..."
                  name="title"
                  type="text"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                ></input>
              </div>

              <div className="pets-breed">
                <label htmlFor="events-venue">Location</label>
                <input
                  id="events-venue"
                  placeholder="Location..."
                  name="location"
                  type="text"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                ></input>
              </div>
            </div>
            <div className="set">
              <div className="pets-breed">
                <label htmlFor="events-venue">Salary Range</label>
                <input
                  id="events-tickets"
                  placeholder="Salary range..."
                  name="salary"
                  type="number"
                  value={formData.salary}
                  onChange={handleInputChange}
                  required
                ></input>
              </div>

                <div className="pets-birthday">
                  <label htmlFor="pets-birthday">Application Deadline</label>
                  <input
                    id="pets-birthday"
                    type="date"
                    name="deadline"
                    value={formData.deadline}
                    onChange={handleInputChange}
                    required
                  ></input>
                </div>
            </div>

            <div className="pets-weight">
              <label htmlFor="pet-weight-0-25">Job Requirements</label>
              <div className="radio-container">
                <input
                  value={formData.requirements}
                  placeholder="Job Requirements"
                  name="requirements"
                  onChange={handleInputChange}
                  type="text"
                  required
                />
              </div>
              <label htmlFor="pet-weight-0-25">Job Description</label>
              <div className="radio-container">
                <input
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Job Description"
                  required
                />
              </div>
              <label htmlFor="jobs-requirements-0-25">Job Image</label>
              <div className="radio-container">
                <input type="text" value={formData.image} name="image"
                onChange={handleInputChange}
                  placeholder="Job Description"
                  required
                />
              </div>
            </div>
          </header>
          <footer>
            <div className="set">
              <button
                id="back"
                onClick={() => {
                  navigate("/");
                }}
              >
                Back
              </button>
              <button id="next" onClick={handleFormSubmit}>
                Post
              </button>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Form;