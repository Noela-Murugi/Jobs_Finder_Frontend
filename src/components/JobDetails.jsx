import React, { useEffect, useState } from 'react'
import '../JobDetails.css'
import { useParams } from 'react-router-dom'

export default function JobDetails() {

    const {id} = useParams()
    const [job, setJob] = useState([])
    
    useEffect(() => {
        fetch(`http://127.0.0.1:9292/jobs/${id}`)
        .then((res) => res.json())
        .then((data) => setJob(data))
    },[])

    const parsedDate = new Date(job.deadline)
    const date = parsedDate.toLocaleDateString()

    return (
        <div className='details'>
            <h2>Job Title</h2>
            <div className='job-details'>
                <div className='job-details-image'>
                    <img src={job.image} alt="" />
                </div>
                <div className='job-details-content'>
                    <h2>{job.title}</h2>
                    <h3>Job Requirement: {job.requirements}</h3>
                    <p>{job.description}</p>
                    <h3>Location: {job.location}</h3>
                    <h3>Salary: {job.salary}</h3>
                    <h3>Application Deadline: {date}</h3>
                </div>
            </div>
            <div className='action-buttons'>
                <button className='apply-job'>Apply Job</button>
                <button className='delete-job'>Delete Job</button>
            </div>
        </div>
  )
}
