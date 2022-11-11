import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./navbar/NavBar";
import Home from "./components/Home";
import PostForm from "./components/PostForm";
import Categories from "./components/Categories";
import About from "./components/About";
import Footer from "./components/Footer";
import JobDetails from "./components/JobDetails";


import "./index.css";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact="true" path="/" element={<Home />}/>
        <Route exact="true" path="/postjob" element={<PostForm />}/>
        <Route exact="true" path="/about" element={<About />}/>
        <Route exact="true" path="/jobs" element={<Categories />}/>
        <Route path="/jobs/:id" element={<JobDetails />}/>
        <Route/>
      </Routes>
      <>

      </>
      <>
      <Footer />

      </>
    </div>
  );
}

export default App;
